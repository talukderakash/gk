import React from "react";
import "./Blogs.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FcCalendar, FcGraduationCap } from "react-icons/fc";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our <span>Service</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src="https://st.depositphotos.com/1000260/2525/i/950/depositphotos_25257467-stock-photo-ecg-test-of-man.jpg" alt="" />
          </div>
          <div className="content">
            <div className="icon">
              <Link to="/blogs">
                {" "}
                <i className="fas fa-calendar">
                  {" "}
                  <FcCalendar></FcCalendar>{" "}
                </i>{" "}
                21st may, 2018{" "}
              </Link>
              <Link to="/blogs">
                {" "}
                <i className="fas fa-user">
                  {" "}
                  <FcGraduationCap></FcGraduationCap>{" "}
                </i>{" "}
                by admin{" "}
              </Link>
            </div>
            <h3>Electrocardiography</h3>
            <p>
            Electrocardiography is the process of producing an electrocardiogram. It is a graph of voltage versus time of the electrical activity of the heart using electrodes placed on the skin. 
            </p>
            <Link to="/blogs" className="btn">
              See More{" "}
              <span className="fas fa-chevron-right">
                {" "}
                <FaAngleDoubleRight></FaAngleDoubleRight>{" "}
              </span>
            </Link>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src="http://fertilitycentrenepal.com/wp-content/uploads/2016/06/Ultrasound1.jpg" alt="" />
          </div>
          <div className="content">
            <div className="icon">
              <Link to="/blogs">
                {" "}
                <i className="fas fa-calendar">
                  <FcCalendar></FcCalendar>
                </i>{" "}
                8th march, 2020{" "}
              </Link>
              <Link to="/blogs">
                {" "}
                <i className="fas fa-user">
                  <FcGraduationCap></FcGraduationCap>
                </i>{" "}
                by admin{" "}
              </Link>
            </div>
            <h3>Ultrasonography</h3>
            <p>
            Medical ultrasound includes diagnostic imaging techniques, as well as therapeutic applications of ultrasound. In diagnosis, it is used to create an image of internal body ...
            </p>
            <Link to="/blogs" className="btn">
              See More{" "}
              <span className="fas fa-chevron-right">
                <FaAngleDoubleRight></FaAngleDoubleRight>
              </span>
            </Link>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src="https://st.depositphotos.com/1003098/3612/i/600/depositphotos_36126895-stock-photo-nurse-preparing-patient-for-ct.jpg" alt="" />
          </div>
          <div className="content">
            <div className="icon">
              <Link to="/blogs">
                {" "}
                <i className="fas fa-calendar">
                  <FcCalendar></FcCalendar>
                </i>{" "}
                23rd april, 2021{" "}
              </Link>
              <Link to="/blogs">
                {" "}
                <i className="fas fa-user">
                  <FcGraduationCap></FcGraduationCap>
                </i>{" "}
                by admin{" "}
              </Link>
            </div>
            <h3>computed tomography scan</h3>
            <p>
            A CT scan or computed tomography scan (formerly known as computed axial tomography or CAT scan) is a medical imaging technique used in radiology to get detailed images of  diagnostic purposes. .....
            </p>
            <Link to="#" className="btn">
              See More{" "}
              <span className="fas fa-chevron-right">
                <FaAngleDoubleRight></FaAngleDoubleRight>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
