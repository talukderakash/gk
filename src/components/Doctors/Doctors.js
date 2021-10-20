import "./Doctors.css";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

const Doctors = () => {
  return (
    <section class="doctors" id="doctors">
      <h1 class="heading">
        Our <span>doctors</span>
      </h1>

      <div class="box-container">
        <div class="box">
          <img src="https://media-eng.dhakatribune.com/uploads/2021/06/dr-tasnim-jara-1622700403384.gif" alt="" />
          <h3>
            Dr. Tasnim Jara <FcApproval></FcApproval>{" "}
          </h3>
          <span>Cardiologist</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" class="fab fa-twitter">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" class="fab fa-instagram">
              <FaInstagram></FaInstagram>
            </a>
            <a href="#" class="fab fa-linkedin">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>

        <div class="box">
          <img src="https://i0.wp.com/insiderion.com/wp-content/uploads/2020/07/Bangladeshi-doctor-Sabrina.jpg?ssl=1" alt="" />
          <h3>
          Dr Sabrina Chowdhury <FcApproval></FcApproval>{" "}
          </h3>
          <span>Special doctor</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" class="fab fa-twitter">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" class="fab fa-instagram">
              <FaInstagram></FaInstagram>
            </a>
            <a href="#" class="fab fa-linkedin">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>

        <div class="box">
          <img src="https://surecellbd.com/wp-content/uploads/2019/11/meri2020-400x400.jpg" alt="" />
          <h3>
            Dr. Mehra Afrin Tonny <FcApproval></FcApproval>{" "}
          </h3>
          <span>Medicine</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" class="fab fa-twitter">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" class="fab fa-instagram">
              <FaInstagram></FaInstagram>
            </a>
            <a href="#" class="fab fa-linkedin">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>

        <div class="box">
          <img src="https://2.bp.blogspot.com/-4s0tuIM8XLs/WC1VWAC-fKI/AAAAAAAAAik/QLameeqVqtgTOPy3wUGhBjLZJBr47U0WwCPcBGAYYCw/s1600/IMG_20161117_125039-1.jpg" alt="" />
          <h3>
            Dr. Hasan Mahmud <FcApproval></FcApproval>{" "}
          </h3>
          <span>Endocrinologist</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" class="fab fa-twitter">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" class="fab fa-instagram">
              <FaInstagram></FaInstagram>
            </a>
            <a href="#" class="fab fa-linkedin">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>

        <div class="box">
          <img src="https://lasertreat.com.bd/public/images/doctors/Dr.-Sumayea-Binte-Mizan.jpeg" alt="" />
          <h3>
            Dr.Sweety<FcApproval></FcApproval>{" "}
          </h3>
          <span>Gastroenterologist</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" class="fab fa-twitter">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" class="fab fa-instagram">
              <FaInstagram></FaInstagram>
            </a>
            <a href="#" class="fab fa-linkedin">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>

        <div class="box">
          <img src="https://daktarbook.com/frontend/image/hero.png" alt="" />
          <h3>
            Dr. Helel Uddin<FcApproval></FcApproval>{" "}
          </h3>
          <span>Gynecologist</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" class="fab fa-twitter">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" class="fab fa-instagram">
              <FaInstagram></FaInstagram>
            </a>
            <a href="#" class="fab fa-linkedin">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
