import React from "react";
import "../App.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet-async";

const Landing = () => {
  const [enrollFormVisible, setEnrollFormVisible] = useState(false);

  //set up emailjs account (sends data directly from browser)
  //not sending sensitive info so its ok to send from browser

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  emailjs.init("CUdd-rWsjI3vLaUDK"); //public API key (user id of account owner)
  //function to handle form submission
  const handleSubmit = async (e) => {
    setEnrollFormVisible(false);
    //remove rhe model-open class to allow scrolling again
    document.body.classList.remove("modal-open");

    e.preventDefault();

    try {
      await emailjs.send("service_fdk6hf9", "template_adkz9mk", {
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
    // disable scrolling on the webpage
    //in js, we can have clases in the same way in java
    //has the same function as java classes whereby a class
    //can have methods and attributes
    //e.g.,
    //  class Person{
    //    constructor(name, age){
    //      this.name=name;
    //      this.age=age;
    //    }
    //
    //    greet(){
    //      console.log('greetings');
    //    }
    //  }

    //then you would create a new person like
    //  const person=new Person("john",25);
    //  person.greet();

    //you can add different classes to the body
    //(it has none added by default)
    //the model-open is a css class that has a rule that sets the
    //overflow (anything outside of the normal dimensions) to hidden
    //i.e. preventing scrolling
    //its the same as any other class we have added to div elements
    //we are adding this class at this instant, so the properties defined
    //in the css class will only begin to apply now
    document.body.classList.add("modal-open");
  }
  return (
    <div class="home">
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
      {/* Header for the webpage */}
      <div class="header-container">

        <div class="ribbon-container">
        <div class="ribbon">
          <nav class="navbar">
            <div class="navbarImageContainer">
              <img src="/navbarLogo.png" class="navbarLogo"></img>
            </div>
            {/* <ul class="navbarElements">
              <li>
                <a href="#home" class="navbarElement">
                  Home
                </a>
              </li>
              <li class="dropdown">
                <a class="navbarElement">About &#9662;</a>
                <ul class="dropdownMenu">
                  <li>
                    <a href="#about" class="dropdownElement">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#mission" class="dropdownElement">
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a href="#vision" class="dropdownElement">
                      Our Vision
                    </a>
                  </li>
                  <li>
                    <a href="#services" class="dropdownElement">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="#staff" class="dropdownElement">
                      Our Staff
                    </a>
                  </li>
                  <li>
                    <a href="#subsidies" class="dropdownElement">
                      Subsidies & Fees
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#enroll" class="navbarElement">
                  Enroll
                </a>
              </li>
              <li>
                <a href="#footer" class="navbarElement">
                  Contact
                </a>
              </li>
            </ul> */}
          </nav>
        </div>
        </div>
        <img src="/header.jpg" class="headerImage"></img>
        <h1 class="welcomeText">Right Start Montessori</h1>
        <p class="motto">because your child deserves the right start in life</p>
      </div>

      {/* About section */}
      <div class="about" id="about">
        <h2 class="aboutHeader">About Us</h2>
        <div class="aboutContent">
          <div class="aboutImagesArea">
            <img src="garden.jpg" class="about1Image"></img>
            <img src="baking.jpg" class="about2Image"></img>
          </div>
          <div class="aboutTextArea">
            <p class="aboutText">
              At Right Start Montessori we have been providing a homely, warm,
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
              exciting environment and all it offers.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision section */}
      <div class="missionVision">
        <div class="missionVisionContent">
          <br></br>
          <div class="missionVisionEachSection">
            <h2 class="missionVisionHeader">Our Mission</h2>
            <p class="aboutText" id="vision">
              At Right Start Montessori we understand that building positive
              relationships with parents, families, and the wider community,
              plays an important role in the holistic development of each child.
              That said we also understand that communication is a key element
              in fostering children`s learning, while sharing information and
              parental involvement are also necessary components. This in turn
              allows for each child have a sense of identity and belonging,
              enriching their overall holistic development.
            </p>
            <br></br>
          </div>

          <div class="missionVisionEachSection">
            <h2 class="missionVisionHeader" style={{ marginTop: "-30px" }}>
              Our Vision
            </h2>
            <p class="aboutText">
              At Right Start Montessori we appreciate that each child is unique
              whilst understanding that a positive early childhood experience is
              instrumental for a child’s overall development throughout their
              lives. We ensure that each child feels loved, respected, and is
              encouraged to develop to his/her best potential so that they can
              flourish and become the best possible version of themselves.
            </p>
            <br></br>
          </div>
        </div>
      </div>

      {/* our services, staff, subsidies, and fees */}
      <div id="services">
        <div id="staff">
          <div id="subsidies">
            <div class="ssfoptionSection">
              {/* i think i will have to do a vertical flex column for each picture and button and then a flex horizontal column for each pair */}
              <div class="flipContainer">
                <div class="flipper">
                  <div class="front">
                    <div class="ssfPanels">
                      <img src="garden.jpg" class="ssfPanelImage"></img>
                      <button class="ssfPanelButton">Our Services</button>
                    </div>
                  </div>

                  <div class="back">
                    <div class="cardContent">
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
                  </div>
                </div>
              </div>

              <div class="flipContainer">
                <div class="flipper">
                  <div class="front">
                    <div class="ssfPanels">
                      <img src="garden.jpg" class="ssfPanelImage"></img>
                      <button class="ssfPanelButton">Our Staff</button>
                    </div>
                  </div>

                  <div class="back">
                    <div class="cardContent">
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
                  </div>
                </div>
              </div>

              <div class="flipContainer">
                <div class="flipper">
                  <div class="front">
                    <div class="ssfPanels">
                      <img src="garden.jpg" class="ssfPanelImage"></img>
                      <button class="ssfPanelButton">Subsidies and Fees</button>
                    </div>
                  </div>

                  <div class="back">
                    <div class="cardContent">
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
                  </div>
                </div>
              </div>
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
              Enroll Your Child Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div class="footer" id="footer">
        <div class="footerBorder">
          <div class="footerSections">
            <div class="footerCol">
              <img src="Logo.JPG" class="footerImage"></img>
            </div>

            <div class="footerCol">
              <h2 class="navigationHeading">Navigation</h2>
              <ul
                class="navigationContent"
                style={{
                  listStyle: "none",
                }}
              >
                <li>Home</li>
                <li>About Us</li>
                <li>Our Mission</li>
                <li>Our Vision</li>
                <li>Gallery</li>
                <li>Our Services</li>
                <li>Staff</li>
                <li>Subsidies & Fees</li>
                <li>Testimonials</li>
                <li>Enroll Now</li>
              </ul>
            </div>

            <div class="footerCol">
              <h2 class="navigationHeading">Contact Us</h2>
              <div class="socialSection">
                <img src="placeholder.png" class="icon locationIcon"></img>
                <p class="socialInfo">
                  Curraghmore, Kiltoom, Athlone, Co. Roscommon, Athlone, Ireland
                </p>
              </div>

              <div class="socialSection">
                <img src="phone-call.png" class="icon"></img>
                <p class="socialInfo">+353 863704370</p>
              </div>

              <div class="socialSection">
                <img src="email.png" class="icon"></img>
                <p class="socialInfo">marionmulkearncolgan@gmail.com</p>
              </div>

              <div class="socialSection">
                <img src="facebook.png" class="icon"></img>
                <p class="socialInfo">Right Start Montessori</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
