import React from "react";
import img1 from "../image/blog-1.jpg";
import img2 from "../image/blog-2.jpg";
import img3 from "../image/blog-3.jpg";

function Section7() {
  return (
    <div>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          {" "}
          our <span>blogs</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <div class="image">
              <img src={img1} alt="" />
            </div>
            <div class="content">
              <div class="icon">
                <a href="#">
                  {" "}
                  <i class="fas fa-calendar"></i> 1st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fas fa-user"></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" class="btn">
                {" "}
                learn more <span class="fas fa-chevron-right"></span>{" "}
              </a>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <img src={img2} alt="" />
            </div>
            <div class="content">
              <div class="icon">
                <a href="#">
                  {" "}
                  <i class="fas fa-calendar"></i> 1st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fas fa-user"></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" class="btn">
                {" "}
                learn more <span class="fas fa-chevron-right"></span>{" "}
              </a>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <img src={img3} alt="" />
            </div>
            <div class="content">
              <div class="icon">
                <a href="#">
                  {" "}
                  <i class="fas fa-calendar"></i> 1st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fas fa-user"></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" class="btn">
                {" "}
                learn more <span class="fas fa-chevron-right"></span>{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section7;
