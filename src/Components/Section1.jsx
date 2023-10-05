import React from "react";
import img1 from "../image/home-img.jpg";
import Contact from "../Components/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Section1() {
  return (
    <div>
      <section class="home" id="home">
        <div class="image">
          <img src={img1} alt="" />
        </div>

        <div class="content">
          <h3>stay safe, stay healthy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed
            autem vero? Magnam, est laboriosam!
          </p>
          {/* <a href={<Contact />} class="btn"> */}
          <Link className="btn" to="Contact">
            Contact Us <span class="fas fa-chevron-right"></span>{" "}
          </Link>
          {/* </a> */}
        </div>
      </section>
    </div>
  );
}

export default Section1;
