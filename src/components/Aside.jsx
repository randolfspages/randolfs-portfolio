//import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
//import GiClawSlashes  from "react-icons/gi";
//import GiCalendar  from "react-icons/gi";
//import GiMailbox  from "react-icons/gi";
//import GiPhone  from "react-icons/gi";
//import GiMayanPyramid  from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAfrica, faEnvelopesBulk, faPhone, faLocationDot, faEllipsisVertical, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";





const Aside = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src={"/images/personal-foto.png"}
              alt="myImage"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">
              Randolf <br />Akuamoah Boateng
            </h1>

            <p className="title">&#10003; FullStack Developer <br /> &#10003; Sustainbility and Innovation Enthusiast.</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <FontAwesomeIcon icon={faEnvelopesBulk} />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
              <FontAwesomeIcon icon={faEnvelopesBulk} />
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:richard@example.com" className="contact-link">
                  randolfakuamoah@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
              <FontAwesomeIcon icon={faEnvelopesBulk} />
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+12133522795" className="contact-link">
                  +49 163 140 7303
                </a>
              </div>
            </li>

            {/* <li className="contact-item">
              <div className="icon-box">
              <FontAwesomeIcon icon={faEnvelopesBulk} />
               
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="1982-06-23">June 23, 1982</time>
              </div>
            </li> */}

            <li className="contact-item">
              <div className="icon-box">
              <FontAwesomeIcon icon={faEnvelopesBulk} />
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Steingasse, Wiesbaden, Germany</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Aside