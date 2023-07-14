import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="Address">
        <h3>Reach us out here</h3>
        <ol>
          <li>nbierbvk@gmail.com</li>
          <li>654656161531</li>
          <li>46, 95 abc, xyz jagah</li>
        </ol>
        <div className="Map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28399.14644416308!2d77.97077217431637!3d27.159646999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477ee9d89102f%3A0x443a552e860e4e36!2sUnicorn%2C%20Apple%20Premium%20Reseller!5e0!3m2!1sen!2sin!4v1689360174613!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}

            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
        </li>

        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>

        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>

        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>

      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Customers
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            offers
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            contact
          </a>
        </li>
      </ul>

      <p>&copy;Team 52 | All rights reserved</p>
    </footer>
  );
}

export default Footer;
