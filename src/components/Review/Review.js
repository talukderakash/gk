import React from "react";
import "./Review.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Review = () => {
  return (
    <section class="review" id="review">
      <h1 class="heading">
        Client's <span>review</span>
      </h1>

      <div class="box-container">
        <div class="box">
          <img src="https://scontent.fdac136-1.fna.fbcdn.net/v/t1.6435-9/58377647_415384699292923_4166542194687082496_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeGkodtYw5-GkmDYMGyozvx_2AaSpITnL4zYBpKkhOcvjJBe1cpdbtc9L27OArJ58HfIKpgOvCrApdAImLoZbIaT&_nc_ohc=3jqbgXHOMj8AX_Dvye2&tn=F6a11CP_4X_0W0jI&_nc_ht=scontent.fdac136-1.fna&oh=ce8c871382444d2388f7f606a760fd11&oe=61966A13" alt="" />
          <h3>Akash Talukder</h3>
          <div class="stars">
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>

            <i class="fas fa-star-half-alt">
              <FaStarHalfAlt></FaStarHalfAlt>
            </i>
          </div>
          <p class="text">
            I am very much pleased about your service. You became the savior
            when I need you badly.
          </p>
        </div>

        <div class="box">
          <img src="https://scontent.fdac136-1.fna.fbcdn.net/v/t1.6435-9/227200475_1901422386702918_3761188844682689622_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGWQwWppkwKIKgx8T3FiwYtdyQw-Tplo7l3JDD5OmWjuW8BA43cMwHvJFn3UQijf7m3xJQ8MSmzu_J6_YxPbLEJ&_nc_ohc=kcQUtLrxLsAAX_Ie7vr&tn=F6a11CP_4X_0W0jI&_nc_ht=scontent.fdac136-1.fna&oh=293c36f207729a1d34e3395d99a99350&oe=6195A18D" alt="" />
          <h3>Faruk Shovo</h3>
          <div class="stars">
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
          </div>
          <p class="text">
            Very much professional and up to the mark. God bless you!
          </p>
        </div>

        <div class="box">
          <img src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-6/224728615_2867083563543747_402078868004444771_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFUMTervZNNGJgYrFYjWEpheUvzgJNsOhB5S_OAk2w6EFG3xFLvN_zUwF93n8eUzPPGgNEMuw4ETLPum8SOXVcJ&_nc_ohc=6osY8U2Z1o0AX-gfIDC&_nc_ht=scontent.fdac136-1.fna&oh=7d8fb60d9c8f6cd41200dd514544c760&oe=6175705F" alt="" />
          <h3>Roshid Ahmed tamim</h3>
          <div class="stars">
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>

            <i class="fas fa-star-half-alt">
              <FaStarHalfAlt></FaStarHalfAlt>
            </i>
          </div>
          <p class="text">
            Nothing so much pleasant to see your service when I in need of you!
            Hats off!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;
