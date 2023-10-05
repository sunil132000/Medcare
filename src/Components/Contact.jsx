import React from "react";

function Contact() {
  return (
    <div>
      <header class="header">
        <a href="/" class="logo">
          {" "}
          <i class="fas fa-heartbeat"></i> medcare.{" "}
        </a>

        <nav class="navbar">
          <a href="./index.html">home</a>
          <a href="./index.html#services">services</a>
          <a href="./index.html#about">about</a>
          <a href="./index.html#doctors">doctors</a>
          <a href="./index.html#book">book</a>
          <a href="./index.html#review">review</a>
          <a href="./index.html#blogs">blogs</a>
        </nav>

        <div id="menu-btn" class="fas fa-bars"></div>
      </header>
      <div class="container">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Address</div>
              <div class="text-one">Surkhet, NP12</div>
              <div class="text-two">Birendranagar 06</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">Phone</div>
              <div class="text-one">+0098 9893 5647</div>
              <div class="text-two">+0096 3434 5678</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one">codinglab@gmail.com</div>
              <div class="text-two">info.codinglab@gmail.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Send us a message</div>
            <p>
              If you have any work from me or any types of quries related to my
              tutorial, you can send me message from here. It's my pleasure to
              help you.
            </p>
            <form action="contact.php" method="post">
              <div class="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="firstname"
                />
              </div>
              <div class="input-box">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>
              <div class="input-box">
                <input
                  type="text"
                  placeholder="Enter Patient Problem"
                  name="prblm"
                />
              </div>
              <div class="input-box">
                <input
                  type="number"
                  placeholder="Enter Patient Age"
                  name="age"
                />
              </div>
              <div class="input-box">
                <input type="text" placeholder="Enter Address" name="address" />
              </div>
              <div class="input-box">
                <input
                  type="text"
                  placeholder="Patient Relation With You"
                  name="relation"
                />
              </div>
              <div class="input-box">
                <input
                  type="number"
                  placeholder="Enter your Phone No."
                  name="phone"
                />
              </div>
              <div class="input-box">
                <input
                  type="gender"
                  placeholder="Enter Patient Sex"
                  name="gender"
                />
              </div>
              <div class="input-box message-box">
                <input type="text" name="text-area" />
              </div>
              <div class="button">
                <input type="submit" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
