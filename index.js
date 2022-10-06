document.querySelector('.menu-btn').addEventListener('click',
  () => document.querySelector('.main-menu').classList.toggle('show'));
// what to achieve here
// events, contacts, donations, email redirection
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.log-out');
const loggedInLinks = document.querySelectorAll('.log-in');



function setupUi(user) {
  if (user) {
    // toggle user UI elements
    loggedInLinks.forEach(item => item.parentElement.style.display = 'block');
    loggedOutLinks.forEach(item => item.parentElement.style.display = 'none');
  } else {
    // toggle user elements
    loggedInLinks.forEach(item => item.parentElement.style.display = 'none');
    loggedOutLinks.forEach(item => item.parentElement.style.display = 'block');
  }
};
const State = function () {
  let currentState;
  this.pageRender = document.querySelector('section.dynamics');
  this.init = function () {
    currentState = new homePage;
  }

  this.changeState = function (state) {
    currentState = state;
  }
}

const page = new State();
page.init();

function homePage() {
  page.pageRender.innerHTML = `
    <div class="title one">
    <h1>Welcome to Sir Jerry and Lady Comfort Foundation
    </h1>
    <p>
      Inspired by a life-changing event, <strong>SIR Jerry AND LADY COMFORT FOUNDATION</strong> was  established
      2020 in Awka, Anambra state, Nigeria. Ever since we've working hard to improve the lives of those in need.
      Here you can learn more about who we are and what we do.
      <br>
      <a href="#about-us" class="about btn">Learn More <i class="fa fa-info-circle"></i></a>
    </p>
  </div>
  <div class="services">
    <div class="service">
      <div class="icon">
      <img src="youth.jpg" alt="" />
      </div>
      <h2>Youth Empowerment</h2>
      <p>
        One of the main reasons SIR Jerry AND LADY COMFORT FOUNDATION was founded in 2020
        was to end social marginalization, hunger, and poverty by pioneering sustainable, grassroots, 
        humanitarian-centered youth empowerment and advocating for their widespread adoption in the State and 
        across the country.
        Hope you'll help us continue this work. See how you can by contacting us below
        <a href="tel:+2348035014070" class="serve">Contact us <i class="fa fa-user-plus"></i></a>
      </p>
    </div>
    <div class="service">
      <div class="icon">
        <img src="PHOTO-2022-02-03-09-18-47_7.jpg" alt="" class="treat"/>

      </div>
      <h2>Fighting Poverty</h2>
      <p>One of our goals is to ensure that the most vulnerable and at-risk groups in the world are safe and have their
      basic needs taken care of. With your generous donations and volunteering efforts, you have the capacity to help
      us in our endeavour of Fighting Poverty.
      <a href="tel:+2348035014070" class="serve">Contact us <i class="fa fa-user-plus"></i></a>
      </p>
    </div>
    <div class="service">
      <div class="icon">
        <img src="hands-compassion-help-old.jpg" alt="" " />
      </div>
      <h2>Helping the Less Privileged</h2>
      <p>
        One of our main causes here at SIR JERRY AND LADY COMFORT FOUNDATION is feeding Children, an 
        issue that touches many lives, particularly those in Africa and world at large. We spend a significant
        portion of our resources on tackling this problem. See how you can help contacting one of our
        representatives.
        <a href="tel:+2348035014070" class="serve">Contact us <i class="fa fa-user-plus"></i></a>
      </p>
    </div>
  </div>
    <div class="title two">
      <h1>
        Become a Volunteer
      </h1>
      <p>
        Our Charitable Foundation helps raise funds through various programs and initiatives,
        and we'd love for you to get involved with SIR JERRY AND LADY COMFORT FOUNDATION. We depend on your 
        support in order to improve lives and make the world a better place for the generations to come. Join
         us today to learn all about volunteering and donating options.
        <br>
        <a href="#" class="btn started">Get Started <i class="fa fa-donate"></i></a>
      </p>
    </div>
  <div class="service">
      
    <div class="service ser-">
    <h2 id="about-us">Our Vision <i class="fa fa-eye"></i></h2>
    <p>
      With a sustainable foundation geared towards meeting the needs of the common,
      we build a sustainable community of individuals.
      </p>
       
    </div>
  </div>
    `;
}

function loginState() {
  page.pageRender.innerHTML = `
    <form id="login-">
      <h2>LOGIN YOUR ACCOUNT <i class="fa fa-user-plus"></i></h2>
      <div class="feedback"></div>
    <input type="email" placeholder="Email" id="email" required/>
    <input type="password" placeholder="password" id="password" required/>
    <input type="submit" value="LOGIN" class="Submit" />
  </form>
    `;
  LoginIn();
}

function registerState() {
  page.pageRender.innerHTML = `
  <form id="register-">
  <h2>Join The Foundation <i class="fa fa-link"></i></h2>
<input type="text" placeholder="First Name" id="fname" required/>

<input type="text" placeholder="Last Name" id="lname" required/>
<input type="email" placeholder="Email" id="email" required/>
<input type="password" placeholder="password" id="password" required/>
<input type="number" placeholder="phone number" id="phone-num" required/>
<input type="submit" value="REGISTER" class="Submit" />
</form>  
  `;
  signUpUser();
}

function contactState() {
  page.pageRender.innerHTML = `
<section class="location">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63461.153379746116!2d7.044166842377412!3d6.221191397072293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104382bd8b94e753%3A0xcf2391eb8abd4753!2sAwka!5e0!3m2!1sen!2sng!4v1637055540258!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</section>
<section class="contact-us">
    
    <div class="row">
        
        <div class="contact-col">
            <div>
                <i class="fa fa-home">
                </i>
                <span>
                   <h5><a href="#">NO 5 ROAD 11 NGOZIKA ESTATE</a></h5> 
                   <p>AWKA, ANAMBRA</p>
                </span>
            </div>
            <div>
                <i class="fa fa-phone">
                </i>
                <span>
                   <h5><a href="tel:+234805014070">+234805014070</a></h5> 
                   <p>Monday to Saturday, 10AM to 6PM</p>
                </span>
            </div>
            <div>
                <i class="fa fa-envelope">
                </i>
                <span>
                   <h5><a href="mail:lyndaojoseph85@gmail.com">lyndaojoseph85@gmail.com</a></h5> 
                   <p>Email us today</p>
                </span>
            </div>
        </div>
        <div class="contact-col">
            
            <form action="#" id="submit-form">
                <input type="text" placeholder="Enter your name" required id="name">
                <input type="text" placeholder="Enter your email address" required id="email">
                <input type="number" name="phonenumber" id="phonenumber" placeholder="phonenumber" required>
                <textarea name="msg" placeholder="Message" id="msg" cols="30" rows="10" required></textarea>
                <button type="submit" class="hero-btn red-btn">Send Message</button>
            </form>
        </div>
    </div>
</section>
    `;
  const createForm = document.querySelector('#submit-form');
  createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('contact_option').add({
      name: createForm.name.value,
      email: createForm.email.value,
      call: createForm.phonenumber.value,
      msg: createForm.msg.value,
    }).then(() => {
      createForm.reset();
      createForm.name.value = "";
      createForm.msg.value = "";
      createForm.email.value = "";
      createForm.phonenumber.value = "";
      feedBack(document.querySelector("#submit-form"), "Form Submitted", "correct")

    }).catch((err) => {
      console.log(err.message);
      feedBack(document.querySelector("#submit-form"), "Form Submitted", "correct")
    })
  });
}

function setUp(data) {
  page.pageRender.innerHTML = `
  <div class="dash-board">  
  <h1>DashBoard <i class="fa fa-tachometer"></i></h1>
  <h3><i class="fa fa-user-plus"></i> Users Donations Update</h3>
  <ul class="board"></ul>
  </div>
  `;
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const user = doc.data();
      if (user.accesskey) {
        const li = `
      <li><span class="name-"><i class="fa fa-user"></i> ${user.lastname} ${user.firstname}</span><span class="val-">&#8358 ${user.paid}</span>
      <br>    
      <p id="call"><i class="fa fa-phone"></i>  ${user.phoneNumber}</p>
      <p id="email-"><i class="fa fa-envelope"></i> ${user.email}</p>
      </li>
    `;
        html += li;
        document.querySelector('ul.board').innerHTML = html;
      }

    });
  } else {
    document.querySelector('ul.board').innerHTML = "<h3>No Record Yet...</h3>";
  }

}