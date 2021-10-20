import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

import {
  FaAngleDoubleRight,
  FaUserMd,
  FaUsers,
  FaProcedures,
  FaHospital,
} from "react-icons/fa";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <>
    
      <section className="home" id="home">
     
        <div className="image">
          <img src="https://dionleadership.com/wp-content/uploads/2020/06/Dion-Leadership-Healthcare-Workers-3.jpg" alt="" />
        </div>

        <div className="content">
          
          <h3>Your health is our priority</h3>
          <p>
          Clinical excellence must be the priority for any health care service provider. Tangail Hospital ensures the best healthcare service comprise of professional (clinical) service excellence with outstanding personal service.?
          </p>
          <Link to="/home" className="btn">
            contact us <FaAngleDoubleRight></FaAngleDoubleRight>
          </Link>
        </div>



      </section>

      <div className="fiter-deign">
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/elevated-view-stethoscope-blue-background_23-2148050517.jpg?size=626&ext=jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className="carasouldes">Covid Fiter</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/doctor-with-stethoscope-hand-hospital-background_34200-156.jpg?size=626&ext=jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
     <h1 className="carasouldes">Real Life Hero</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.citizenshospitals.com/wp-content/uploads/layerslider/Homepage-Slider-1/Backround1.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
     <h1 className="carasouldes">Fiter of a Nation</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

      <div className="icons-container">
        
      <div class="row row-cols-1 row-cols-md-3 g-4">
  
  <div class="col">
    <div class="card h-100">
      <img src="https://img.freepik.com/free-psd/medical-aid-banner-page-template_23-2148969688.jpg?size=626&ext=jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">24 Hours Doctor's service</h5>
        <p class="card-text">Syed Atiqul Haq is a Bangladeshi physician & academic. He is the current president of Asia Pacific League of Associations for Rheumatology for 2018–2020 tenure. .</p>
      </div>
      <div class="card-footer">
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">X-radiation (X-ray)</h5>
        <p class="card-text">An X-ray is a quick, painless test that produces images of the structures inside your body — particularly your bones.</p>
      </div>
      <div class="card-footer">
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://5.imimg.com/data5/JF/IG/GLADMIN-50961650/ultrasonography-500x500.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Ultrasonography</h5>
        <p class="card-text">Medical ultrasound includes diagnostic imaging techniques, as well as therapeutic applications of ultrasound. In diagnosis, it is used to create .</p>
      </div>
      <div class="card-footer">
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://media.istockphoto.com/photos/scanner-equipment-in-the-hospital-picture-id1310342557?b=1&k=20&m=1310342557&s=170667a&w=0&h=fbyk6j8E4FlcezL2UGC-m17uL_CrjsefGn1NfeLY96M=" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Computed tomography</h5>
        <p class="card-text">Computed tomography (CT) scan is a useful diagnostic tool for detecting diseases and injuries. It uses a series of X-rays and a computer to produce .</p>
      </div>
      <div class="card-footer">
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://www.theengineeringprojects.com/wp-content/uploads/2017/08/Introduction-to-ECG_3-2.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Electrocardiogram</h5>
        <p class="card-text">An electrocardiogram (ECG) is a simple test that can be used to check your heart's rhythm and electrical activity. Sensors attached  .</p>
      </div>
      <div class="card-footer">
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/146/146309/mri-scan.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Magnetic resonance imaging</h5>
        <p class="card-text">Magnetic resonance imaging (MRI) is a type of scan that uses strong magnetic fields and radio waves to produce detailed images of the inside of the body..</p>
      </div>
      <div class="card-footer">
       
      </div>
    </div>
  </div>
  
</div>
        
      </div>
    </>
  );
};

export default Home;
