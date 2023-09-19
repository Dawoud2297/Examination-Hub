# Examination-Hub :
Is an examination app, contains  and illustrates the relation between the instructor and the students. So that the instructor creates and publishes the exams and then they are available to his students.
### The Instructor Department:
![insDash4](https://github.com/Dawoud2297/Examination-Hub/assets/86451115/da1d093c-ac50-4ea4-a99b-ab353ea88d94)
the instructor dashboard consists of many parts, the very left-side is the profile data which is a simple section contains the name the picture the user-name and tiny bio.Below that two Buttons, the questions bank and the students list.
The questions bank:  is the backbone of the exam creation, which is created by the instructor himself depending on each lecture, the questions are filtered by lecture number, the instructor has full access on the questions bank, so he can add and delete questions using controls add or delete, there are 3 types of questions : 'true or false' , 'mcq' and ' article ' .
Students list : is a list contains all the instructor's students data (e.g. name user-name email and scores).
At the very left-bottom is the timer : 
Timer section shows up when the instructor publishes an exam showing the exam name, description and the countdown timer.
The right-side consists of three sections create exam, drafts and exams history.
Create Exam : consists of three buttons Mid-term Quiz and Final, all of them have the same characteristics no differences but the naming.When you decide one of them, you will be directed to page called create exam, which will open the questions bank letting you select questions from any lecture, the head of the page contains the name and description inputs followed by exam type(which is decided before) questions number and checkbox called draft (will be discussed later)  and publish button.
Drafts : is the second section in the right-side, it is like the instructor thoughts where he can create the exam but without publishing it, otherwise he keep it so he can edit it as many as he wants. And once he decide to publish it, simply he checks the checkbox` back to empty box` and publish it.
Exams History : The last part of the right-side section. It is a list displays a row of the published exams, they can be filtered by the exam type.
### Student department :
the student dashboard consists of two adjacent sections, the most right section is the same as the instructor's dashboard.
The left-side : this section is his exams history, as like the instructor has exams history, displays a row of token exams. Shows the exam name description date and the score. When he clicks on one of the exams, he will be directed to another page shows the exam in detailed (i.e. the questions).
What if there is a published exam at the same time when the student opens the dashboard, in this case the student will show only the exam without the ability to go anywhere else , till the student finishes and submit his answers, he will be immediately directed to his dashboard .
### Student exam page :
is the page where student receives and interact with the published exam, this page can be divided to two parts the : exam head where the exam name, timer and submit button are placed. exam body where the leftover questions and the question with it's options to solve are placed. The model works in the style question is followed by the next one while the time is counting down
.
### SignUp steps :
after signup is selected it will be directed to page where the user choose which account to create (instructor or student) after filling out all the required fields you will be directed to create your profile options and after submitting you will be directed to your dashboard.

### Session feature :
in briefly if there is not interactions with the app tab for at most 10 minutes the user will be logged out automatically after that time runs out.
Responsible for creating and developing the frontend side from scratch using ReactJs.
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
