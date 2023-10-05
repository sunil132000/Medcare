import React from "react";
import img1 from "../image/doc-1.jpg";
import img2 from "../image/doc-2.jpg";
import img3 from "../image/doc-3.jpg";
import img4 from "../image/doc-4.jpg";
import img5 from "../image/doc-5.jpg";
import img6 from "../image/doc-6.jpg";

function Section4() {
  return (
    <div>
      <section class="doctors" id="doctors">
        <h1 class="heading">
          {" "}
          our <span>doctors</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <img src={img1} alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div class="share">
              <a href="/" class="fab fa-facebook-f"></a>
              <a href="/" class="fab fa-twitter"></a>
              <a href="/" class="fab fa-instagram"></a>
              <a href="/" class="fab fa-linkedin"></a>
            </div>
          </div>

          <div class="box">
            <img src={img2} alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div class="share">
              <a href="/" class="fab fa-facebook-f"></a>
              <a href="/" class="fab fa-twitter"></a>
              <a href="/" class="fab fa-instagram"></a>
              <a href="/" class="fab fa-linkedin"></a>
            </div>
          </div>

          <div class="box">
            <img src={img3} alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>

          <div class="box">
            <img src={img4} alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>

          <div class="box">
            <img src={img5} alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>

          <div class="box">
            <img src={img6} alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section4;
