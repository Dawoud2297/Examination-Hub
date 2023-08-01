import React from 'react'
import footer from '../Styles/Footer.module.css'


const Footer = () => {
  return (
    <div className={footer.footerContainer}>
      <div className={footer.logo}>
        <img src='assets/alazhar-logo2.png' height="150" width="200" alt='' />
      </div>
      <div className={footer.section}>
        <ul className={footer.info}>
          <li>Contact Us</li>
          <li>See Statistics</li>
          <li>Read More</li>
          <li>Register</li>
        </ul>
      </div>
      <div className={footer.section3}>

        <div className={footer.contacts}>
          <img src='assets/Group 1432.svg' alt='' />
          <a href='https://www.facebook.com/AlAzharUniversity/' target='blank'>/Alazhar</a>
        </div>
        <div className={footer.contacts}>
          <img src='assets/Group 1433.svg' alt='' />
          <a href='https://www.instagram.com/alazhar.university/' target='blank'>/Alazhar</a>
        </div>
        <div className={footer.contacts}>
          <img src='assets/Group 1434.svg' alt='' />
          <a href='https://twitter.com/alazharuniv?lang=en' target='blank'>/Alazhar</a>
        </div>

      </div>
    </div>
  )
}

export default Footer