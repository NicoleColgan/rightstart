import React from "react";
import "../App.css";
import { useState } from "react";
import emailjs from "emailjs-com";

const Landing = () => {
  const [enrollFormVisible, setEnrollFormVisible] = useState(false);

  //set up emailjs account (sends data directly from browser)
  //not sending sensitive info so its ok to send from browser

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  emailjs.init("iARDlKbHmFRPjFHzr"); //public API key (user id of account owner)
  //function to handle form submission
  const handleSubmit = async (e) => {
    setEnrollFormVisible(false);
    //remove rhe model-open class to allow scrolling again
    document.body.classList.remove("modal-open");

    e.preventDefault();

    try {
      await emailjs.send("service_yt9tm8e","template_62ah685", {
        name,
        email,
        message,
      });

      alert("Email sent successfully");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
      alert("failed to send message");
    }
  };

  function handleCancel() {
    setEnrollFormVisible(false);
    //remove rhe model-open class to allow scrolling again
    document.body.classList.remove("modal-open");

    //reset values
    setName("");
    setEmail("");
    setMessage("");
  }

  function handleEnrollButtonClick() {
    setEnrollFormVisible(true);
    document.body.classList.add("modal-open");
  }
  return (
    <div class="home1">
      {/* enroll form shows when enroll button is pressed */}
      {enrollFormVisible && (
        <div class="centered-container">
          <div class="overlay">
            <div class="enrollFormContainer">
              <form>
                <h2 class="enrollFormHeader">Enroll or Make an Enquiry</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  class="enrollName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <br></br>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  class="enrollEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <br></br>
                <textarea
                  type="message"
                  name="message"
                  placeholder="Message"
                  class="enrollMessage"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <br></br>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  class="enrollFormButton"
                >
                  Enroll
                </button>
                <button onClick={handleCancel} class="enrollFormButton">
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div class="navigationBar">
        <div class="navigationBarContainer">
          <img src="navbarLogo.PNG" class="logoImage"></img>
        </div>
      </div>
      <div class="homeContainer">
        <img src="header.jpg" class="headerPhoto"></img>
        <h1 class="headerText">Right Start Montessori</h1>
        <p class="headerMotto">because your child deserves the right start in life</p>
      </div>

      <div class="aboutContainer">
        <div class="aboutTitleContainer">
          <h2 class="h2Titles">About Us</h2>
        </div>
        <div class="flexContainer">
          <div class="aboutItem">
            <img src="baking.jpg" class="aboutImg1"></img>
          </div>
          <div class="paragraphs aboutItem">
            <p>At Right Start Montessori we have been providing a homely, warm,
              and safe environment for over 14 years in our privately owned
              setting in Curraghmore, Kiltoom, Athlone.
              <br></br>
              <br></br>To ensure high quality standards we follow the Montessori
              philosophy on education along with the Aistear and Siolta
              Frameworks. Using both approaches assists us with supporting the
              overall holistic development of each child which empowers them to
              actively pursue their own learning.
              <br></br>
              <br id="mission"></br>We also understand the importance of
              children connecting with nature and incorporate outdoor play and
              work within our curriculum to allow children experience this
              exciting environment and all it offers.{" "}</p>
          </div>
          <div class="aboutItem">
            <img src="garden.jpg" class="aboutImg2"></img>
          </div>
        </div>
      </div>

      <div class="missionVisionContainer">
        <div class="missionVisionContentContainer">
          <div class="missionContainer">
            <h2 class="h2Titles">Our Mission</h2>
            <p class="paragraphs">At Right Start Montessori we understand that building positive
              relationships with parents, families, and the wider community,
              plays an important role in the holistic development of each child.
              That said we also understand that communication is a key element
              in fostering children`s learning, while sharing information and
              parental involvement are also necessary components. This in turn
              allows for each child have a sense of identity and belonging,
              enriching their overall holistic development.
            </p>
          </div>
          <br></br>
          <div class="visionContainer">
            <h2 class="h2Titles">Our Vision</h2>
            <p class="paragraphs">At Right Start Montessori we appreciate that each child is unique
              whilst understanding that a positive early childhood experience is
              instrumental for a child’s overall development throughout their
              lives. We ensure that each child feels loved, respected, and is
              encouraged to develop to his/her best potential so that they can
              flourish and become the best possible version of themselves.</p>
          </div>
        </div>
      </div>

      {/* staff, services, subsedies and fees */}
      <div class="ssfContainer">
        <div class="flexContainer">


          <div class="panel">
            <div>
              <div class="panelText">
                <p>
                  We open from 8am to 6pm and offer Full Day Care,
                  Pre-School/Montessori, and Afterschool Care.
                  <br></br>
                  <br></br>Within our Morning Sessions, we offer part time
                  care where parents can avail of their children staying
                  on till 2 p.m. to coincide with the pick up of other
                  siblings from our local schools. Likewise with
                  afterschool children, we can offer part time services
                  where children can be dropped in the morning for
                  breakfast and are transported by ourselves to school.
                  <br></br>
                  <br></br>We also offer pickups from local schools for
                  our afterschool children.
                  <br></br>
                  <br></br>We have a fully HSE approved Kitchen where we
                  offer hot, nutritional meals and snacks on-site.
                </p>
              </div>
              <div class="servicesBannerDiv">Our Services</div>
            </div>
          </div>

          <div class="panel">
            <div>
              <div class="panelText">
                <p>
                  We value our staff, their individuality, and experiences
                  they bring to our setting. All our staff are suitable
                  and highly qualified in their areas and are passionate
                  about caring for the children in their care.
                  <br></br>
                  <br></br>We understand the importance of family
                  involvement and have an open-door policy, welcoming any
                  suggestions that ensures a positive experience for your
                  child on their early years journey.
                </p>
              </div>
              <div class="servicesBannerDiv">Our Staff</div>
            </div>
          </div>

          <div class="panel">
            <div class="panel-front">
              <div class="panelText">
                <p>
                  Universal Subsidies are available to all children and
                  families up to 15 years of age along with free ECCE
                  morning sessions for eligible pre-school/Montessori
                  children.
                  <br></br>
                  <br></br>For full details see PDF 2023-2024 Right Start
                  Montessori Fees or go to{" "}
                  <a href="https://www.ncs.gov.ie/en/">
                    https://www.ncs.gov.ie/en/
                  </a>
                  , type in Roscommon area and view Right Start Montessori
                  fees.
                  <br></br>
                  <br></br>Alternatively, you are welcome to make an
                  appointment to discuss your childcare issues and fees.
                </p>
              </div>
              <div class="servicesBannerDiv">Subsidies and Fees</div>
            </div>
          </div>

        </div>
      </div>

      {/* Enroll section */}
      <div class="enrollContainer" id="enroll">
        <div class="enrollPanel">
          <div class="enrollContent">
            <img src="Logo.JPG" class="enrollLogo"></img>
            <button class="enrollButton" onClick={handleEnrollButtonClick}>
              Enroll
            </button>
          </div>
        </div>
      </div>


      <div class="footerBackground">
        <div class="footer">
          <div class="footer-left">
            <img class="footerLogo" src="Logo.JPG" alt="Logo"></img>
          </div>
          <div class="footer-right">
            <ul class="contactList">
              <h3>Contact Us</h3>
              <li>Curraghmore, Kiltoom, Athlone, Co. Roscommon, Athlone, Ireland, N37 WY86</li><br></br>
              <li>+353 863704370</li><br></br>
              <li>marionmulkearncolgan@gmail.com</li><br></br>
              <li><a href="https://www.facebook.com/rightstartmontessori1/">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Landing;
