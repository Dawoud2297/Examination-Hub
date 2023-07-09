import React, { useEffect, useState } from 'react'
import daBody from '../../../Styles/Dashboard/doctor/Dashboard.module.css'
import DiffExams from './DiffExams'
import QuestionBank from '../QuestionBank'
import { useNavigate } from 'react-router-dom'
import identityPath from '../../../helpers/identityPath'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setExamMode } from '../../../store/createExams'
import { getDraftReq, getDraftsReq, setDraftEditor, turnOnLoading } from '../../../store/drafts'
import { createProfileReq } from '../../../store/createProfile'
const ExamTimer = React.lazy(() => import('./ExamTimer'));

const userAdditional = JSON.parse(localStorage.getItem('additional'))
const id = userAdditional?.id, user_token = userAdditional?.additional?.user_token;


const Dashboard = (props) => {

    const initialState = () => {
        return { userName: '', bio: '', userPic: '', user_token }
    }

    const [questionBank, setQuestionBank] = useState(false)
    const [editProfile, setEditProfile] = useState(false)
    const [editProfileData, setEditProfileData] = useState(initialState)
    const [publishedExam, setPublishedExam] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const { drafts, loading } = useSelector((state) => state.draftsSlice)
    const { exam } = useSelector((state) => state.studentExam)

    const questionsBank = () => {
        setQuestionBank(true)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    const createExam = (category) => {
        dispatch(setCategory(category))
        dispatch(setExamMode(true))
        navigate(`${identityPath(user_token, id)}/createExam`)
    }

    const editDraft = (draftId) => {
        dispatch(getDraftReq(draftId))
        dispatch(setDraftEditor())
        dispatch(turnOnLoading())
    }

    const editProfileMode = () => {
        setEditProfile(!editProfile)
    }


    const handleChange = (e) => {
        let { name, value } = e.target;
        setEditProfileData({
            ...editProfileData,
            [name]: value
        })
    }


    const profileData = {
        photo: editProfileData.userPic,
        bio: editProfileData.bio,
        userName: editProfileData.userName,
        token: editProfileData.user_token
    }

    const handleSubmit = () => {
        dispatch(createProfileReq(profileData))
        setEditProfile(false)
        // dispatch(getProfileReq())
        setEditProfileData(initialState)
    }

    const token = JSON.parse(localStorage.getItem('additional'))?.additional?.user_token;
    const openStudentsData = () => {
        navigate(`${identityPath(user_token, id)}/students-data`)
    }

    useEffect(() => {
        setTimeout(() => {
            if (JSON.parse(localStorage.getItem('draftData'))) {
                navigate(`${identityPath(user_token, id)}/createExam`)
            }
        }, 2000)
        return () => {
            if (JSON.parse(localStorage.getItem('dD'))) {
                navigate(`${identityPath(user_token, id)}`)
            }
        }
    }, [navigate])


    useEffect(() => {
        if (exam?.title) setPublishedExam(true);
        else setPublishedExam(false);
    }, [exam])

    console.log(drafts)


    useEffect(() => {
        setTimeout(() => {
            dispatch(getDraftsReq(token))
        }, 1000)
    }, [dispatch, token])


    return (
        <div className={daBody.container}>
            <div className={daBody.leftHand}>
                <div className={daBody.photo}>
                    <img
                        // src={props?.photo !== null ? props.photo : '/assets/placeholder-doctor.jpg'}
                        src='assets/placeholder-doctor.jpg'
                        height="80"
                        width="80"
                        alt='!!'
                        title={props.email}
                    />
                    <p
                        title={props.email}
                    >
                        {props.firstName} {props.lastName} <br />
                        {
                            editProfile ?
                                <input
                                    type='text'
                                    name='userName'
                                    value={editProfileData.userName}
                                    onChange={handleChange}
                                /> : <span>{props.userName}</span>
                        }
                    </p>
                    <div
                        onClick={editProfileMode}
                        title='Edit Profile'
                    >
                        {
                            editProfile ? <>&#128473;</> : <>&#x270E;</>
                        }
                    </div>
                </div>
                <div className={daBody.leftHandBody}>
                    <div className={daBody.bio}>
                        {
                            editProfile ? <textarea
                                type='text'
                                name="bio"
                                value={editProfileData.bio}
                                onChange={handleChange}
                                maxLength="419"
                            ></textarea> : <p>
                                {props.bio}
                            </p>
                        }
                        {
                            editProfile && <button onClick={handleSubmit}>Submit</button>
                        }
                    </div>
                    <div className={daBody.otherShortHands}>
                        <div className={daBody.line}></div>
                        <ul>
                            <li onClick={questionsBank}>Questions Bank</li>
                            <li onClick={openStudentsData}>Students</li>
                        </ul>
                    </div>
                </div>
            </div>
            <React.Suspense fallback={<div></div>}>
                {
                    publishedExam && <ExamTimer />
                }
            </React.Suspense>
            <div className={daBody.addExams}>
                <div>
                    <h2>Create &#128073;
                    </h2>
                    <small>
                        Note you won't be able to create one if there's the same type in drafts
                    </small>
                </div>
                <button onClick={() => createExam('quiz')}>Quiz</button>
                <button onClick={() => createExam('mid_term')}>Mid-Term</button>
                <button onClick={() => createExam('final')}>Final</button>
            </div>
            <div className={daBody.archive}>
                <div className={daBody.draftsHeader}>Drafts &#9203;</div>
                {
                    drafts?.length ?
                        (
                            loading ? (
                                <div className={daBody.loader}></div>
                            ) : (

                                drafts?.length > 0 && drafts?.map((draft) => (
                                    <button className={daBody.draft} disabled={loading} onClick={() => editDraft(draft._id)}>
                                        {/* <div className={daBody.draftHeader}> */}
                                        <p className={daBody.draftTitle}>{draft.title}</p>
                                        <p className={daBody.draftCategory}>{draft.category}</p>
                                        {/* </div> */}
                                        <p className={daBody.draftDesc}>{draft.description}</p>

                                    </button>
                                ))
                            )
                        ) : (<p className={daBody.noArch}>No Drafts</p>)
                }
            </div>
            <div className={questionBank ? daBody.qbOn : daBody.qbOff}>
                <QuestionBank setQuestionBank={setQuestionBank} />
            </div>
            <DiffExams />

        </div >
    )
}

export default Dashboard