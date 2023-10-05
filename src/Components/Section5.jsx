import React from "react";
// import {ReactComponent as img11} from '../image/book-img.svg';

function Section5() {
  return (
    <div>
      <section class="book" id="book">
        <h1 class="heading">
          {" "}
          <span>book</span> now{" "}
        </h1>

        <div class="row">
          <div class="image">
            <img src="image/book-img.svg" alt="" />
            {/* <img11/> */}
          </div>

          <form action="connect1.php" method="post">
            <h3>book appointment</h3>
            <input
              type="text"
              placeholder="your name"
              class="box"
              name="firstname"
            />
            <input
              type="number"
              placeholder="your number"
              class="box"
              name="number"
            />
            <input
              type="email"
              placeholder="your email"
              class="box"
              name="email"
            />
            <input type="date" class="box" name="date" />
            <input type="submit" value="book now" class="btn" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Section5;
