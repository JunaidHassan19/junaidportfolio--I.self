/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// /*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// /*=============== DARK LIGHT THEME ===============*/
// const themeButton = document.getElementById("theme-button");
// const darkTheme = "dark-theme";
// const sunIcon = document.getElementById('sun-icon')

// const selectedTheme = localStorage.getItem("selected-theme");

// const getCurrentTheme = () =>
//   document.body.classList.contains(darkTheme) ? "dark" : "light";
//     themeButton.addEventListener('click', function() {

//          sunIcon.style.display= "block"
//          themeButton.style.display = "none";
//     })

//     sunIcon.addEventListener('click', function(){
//       sunIcon.style.display= "none"
//       themeButton.style.display = "block";

//     })

// themeButton.addEventListener("click", () => {
//   document.body.classList.toggle(darkTheme);
//   localStorage.setItem("selected-theme", getCurrentTheme());
// });

// sunIcon.addEventListener("click", () => {
//   document.body.classList.toggle(darkTheme);
//   localStorage.setItem("selected-theme", getCurrentTheme());
// });

const themeButton = document.getElementById("theme-button");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(`.home__data, .project-card, .card-wrapper`);
sr.reveal(`.home__info div`, { delay: 600, origin: "bottom", interval: 100 });

sr.reveal(
  `.skills__content:nth-child(1), .about__img ,.contact__content:nth-child(1)`,
  {
    origin: "left",
  }
);
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {
  origin: "right",
});
sr.reveal(`.footer__container, .banner__social `, {
  interval: 100,
  origin: "bottom",
});

const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".project-listing").children;

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target");

    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if (target == items[k].getAttribute("data-id")) {
        items[k].style.display = "block";
      }
      if (target == "all") {
        items[k].style.display = "block";
      }
    }
  });
}

window.ityped.init(document.querySelector(".ityped"), {
  strings: [
    "BCA Aspirant!",
    "Self-Taught Web Developer",
    "JavaScript!",
    "exploring technologies",
    "AI!",
  ],
  loop: true,
});

function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

let speed = 200;
let h1 = document.querySelector(".say__hi");
let delay = 100;
setTimeout(function () {
  h1.style.display = "inline-block";
  typeEffect(h1, speed);
}, delay);

const swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project");
contactMessage = document.getElementById("contact-message");
sendBtn = document.getElementById("send_btn");
let contactModal = document.getElementById("contact-modal");
let thanksMsg = document.getElementById("thanks-msg");
let closeContactBtn = document.getElementById("close-contact");
closeContactBtn.onclick = function () {
  contactModal.style.display = "none";
};
const sendEmail = (e) => {
  e.preventDefault();
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    contactMessage.textContent = "Wrie all the input fields";
  } else {
    // service id / template id  /form_id / formPublic key
    emailjs
      .sendForm(
        "service_tphmlox",
        "template_t6lyt1o",
        "#contact-form",
        "Hhp-G121AyKXZZGYE"
      )
      .then(
        () => {
          setTimeout(() => {
            contactModal.style.display = "block";
            thanksMsg.innerHTML = `
     
    <div class="thanks__container">
      <h3 class="success_msg">Form submitted successfully!!</h3>
     
      <div class="heart_div">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
      </div>
      <p>
        Thanks for initiating the conversation.
        
      </p>
        <p>I will get back to you as early as possible.</p>
   </div>
       `;
            contactMessage.textContent = "";
            contactName.value = "";
            contactEmail.value = "";
            contactProject.value = "";
            sendBtn.innerHTML = `
    Send
    <svg class="send-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
    height="24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path
        d="M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z" />
    </svg>
    `;
          }, 300);
        },
        (error) => {
          setTimeout(() => {
            contactModal.style.display = "block";
            thanksMsg.innerHTML = `
       
      <div class="thanks__container">
        <h3 class="error_msg">Couldn't send your message!!</h3>
       
        <div class="emoji-div">
        <img src="svg/error.jpg" alt="oops message failed">
         
         </div>
        <div class="alt-div">
         <p>Here are some of the things you can try:</p>
          <ul>
          <li>
          Checking the network cables, modem and router.</li>
          <li>Reconnecting to Wi-Fi.</li>
          </ul>
           <p>Alternatively you can try to drop your message here </p>
          <div class="email-btn-container">
                                    <a href="mailto:thejunni01@gmail.com"
                                class="cv__btn email-btn">
                                Write to me
                                <svg class="dynamic-svg"  class="svg-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg>
                                </a>
          </div>


        </div>
          
     </div>
         `;
            sendBtn.innerHTML = `
      Send
      <svg class="send-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                    height="24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z" />
                                </svg>
      `;
          }, 300);
        }
      );
    sendBtn.innerHTML = `Sending..
    <svg class="dynamic-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"/></svg>
    
    `;
  }
};
contactForm.addEventListener("submit", sendEmail);
sendBtn.addEventListener("click", sendEmail);

var modal = document.getElementById("myModal");
let snakeBtn = document.getElementById("snake-cta");
let firstportBtn = document.getElementById("firstport-cta");
let portfolioBtn = document.getElementById("portfolio-cta");
let chatbotBtn = document.getElementById("chatbot-cta");
// let clockBtn = document.getElementById("clock-cta");
let gridBtn = document.getElementById("grid-cta");
let youtubeBtn = document.getElementById("youtube-cta");
let googleBtn = document.getElementById("google-cta");
let moreBtn = document.getElementById("more-cta");
let discordBtn = document.getElementById("discord-cta");

var span = document.getElementsByClassName("close")[0];
let modalData = document.getElementById("modal-info");

snakeBtn.onclick = function () {
  modal.style.display = "block";
  modalData.innerHTML = `
  <div class="projectInfoContainer">
  <div class="projectImage">
  <video src="images/snake.mp4" loop controls autoplay muted></video>
</div>
   <p class="projectInfo">I developed a classic Snake game using HTML, CSS, and JavaScript. This project demonstrates my ability to create interactive and engaging web applications, featuring smooth gameplay, responsive controls, and a dynamic user interface.</p>
  
  <div class="getCodeLink">
    <a href="https://github.com/JunaidHassan19/SnakeGame" class="cv__btn">View Code</a>
    <a href="https://junaidhassan19.github.io/SnakeGame/" class="cv__btn">Click To Play</a>
  </div>
  </div>
 `;
};

firstportBtn.onclick = function () {
  modal.style.display = "block";
  modalData.innerHTML = `
  <div class="projectInfoContainer">
  <div class="projectImage">
  <img src="images/firstport.jpeg" alt="css-grid">
</div>
  <p class="projectInfo">I created my first portfolio website using HTML, CSS, and JavaScript, showcasing my web development skills and projects. This site highlights my ability to design responsive and visually appealing layouts, reflecting my passion for creating impactful digital experiences.</p>
  
  <div class="getCodeLink">
    <a href="https://github.com/junaidhassan19/first.portfolio" class="cv__btn">View Code</a>
    <a href="https://junaidhassan19.github.io/first.portfolio/" class="cv__btn">Visit Site</a>
  </div>
  </div>
 `;
};

portfolioBtn.onclick = function () {
  modal.style.display = "block";
  modalData.innerHTML = ` <div class="projectInfoContainer">

  <div class="projectImage">
  <img src="images/portfolio.jpeg" alt="css-grid">

  </div>
  <p class="projectInfo">The portfolio here is one of the projects I have created.This portfolio has been created using HTML, CSS and JavaScript only. This project helped me to understand my skills better.</p>
  
  <div class="getCodeLink">
    <a href="https://github.com/JunaidHassan19/junaidportfolio--I.self" class="cv__btn">View Code</a>
  </div>
  
  </div>`;
};

chatbotBtn.onclick = function () {
  modal.style.display = "block";
  modalData.innerHTML = ` <div class="projectInfoContainer">

  <div class="projectImage">
  <video src="images/ai.mp4" loop controls autoplay muted></video>

  </div>
  <p> I have developed and trained an AI-powered chatbot for my portfolio website to enhance user interaction. This chatbot provides instant, accurate responses to queries about my background, projects, and skills, ensuring a smooth and engaging visitor experience.
</p>
  
  <div class="getCodeLink">
    <a href="https://github.com/junaidhassan19" class="cv__btn">View Code</a>
  </div>
  
  </div>`;
};

// clockBtn.onclick = function () {
//   modal.style.display = "block";
//   modalData.innerHTML = ` <div class="projectInfoContainer">

//   <div class="projectImage">
//   <video src="-----------" loop controls autoplay muted></video>

//   </div>
//   <p class="projectInfo"> ========add dis.=============
//   </p>

//   <div class="getCodeLink">
//     <a href="------------" class="cv__btn">View Code</a>
//   </div>

//   </div>`;
// };

gridBtn.onclick = function () {
  modal.style.display = "block";
  modalData.innerHTML = ` <div class="projectInfoContainer">

<div class="projectImage">
<img src="images/grid2.png" alt="css-grid">
</div>
<p class="projectInfo">I designed a Facebook friend list page using HTML and CSS, showcasing my skills in creating structured and visually appealing layouts. This project utilizes various CSS properties to enhance the user interface, including hover effects, positioning, and responsive design techniques, ensuring a seamless and engaging user experience.
</p>

<div class="getCodeLink">
  <a href="https://github.com/JunaidHassan19/HTML-CSS-COURSE/tree/main/CSS%20Grid%20Practice" class="cv__btn">View Code</a>
</div>

</div>`;
};

youtubeBtn.onclick = function () {
  modal.style.display = "block";
  modalData.innerHTML = `<div class="projectInfoContainer">

  <div class="projectImage">
  <video src="images/youtube.mp4" loop controls autoplay muted></video>
  </div>
  <p class="projectInfo">I designed a YouTube index page using HTML and CSS, incorporating various properties such as hover effects, positioning, grid, and flexbox. This project showcases my ability to create a responsive and interactive layout, enhancing
  </p>
  
  <div class="getCodeLink">
    <a href="https://github.com/JunaidHassan19/HTML-CSS-COURSE/tree/main/Final%20Project" class="cv__btn">View Code</a>
  </div>
  
  </div>`;
};

googleBtn.onclick = function () {
  modal.style.display = "block";
  modalData.innerHTML = `

  <div class="projectInfoContainer">

  <div class="projectImage">
  <img src="images/google.jpeg" alt="css-grid">

</div>
  <p class="projectInfo">I created a Google index page using HTML and CSS, demonstrating my proficiency in web development. This project features a clean and intuitive design.
  </p>
  
  <div class="getCodeLink">
    <a href="https://github.com/JunaidHassan19/HTML-CSS-COURSE/tree/main/the%20div%20element%20practice" class="cv__btn">View Code</a>
  </div>
  </div>
 `;
};

moreBtn.onclick = function () {
  modal.style.display = "block";
  modalData.innerHTML = `

  <div class="projectInfoContainer">

  <div class="projectImage discord-img">
  <img src="images/mix.jpeg" alt="css-grid">
  <img src="images/mix1.jpeg" alt="css-grid">
  </div>
  <p class="projectInfo">I designed interactive tweet and follower buttons using HTML and CSS. This project showcases my ability to create engaging and functional UI elements.
  </p>
  
  <div class="getCodeLink">
    <a href="https://github.com/JunaidHassan19/HTML-CSS-COURSE/tree/main/Flexbox%20practice" class="cv__btn">View Code</a>
  </div>
  </div>
 `;
};

discordBtn.onclick = function () {
  modal.style.display = "block";
  modalData.innerHTML = `<div class="projectInfoContainer">

  <div class="projectImage discord-img">
  <img src="images/discord.jpeg" alt="css-grid">
  
  </div>
  <p class="projectInfo watch-info">
  This is the CSS artwork that I created out of the growing love for CSS art and helped me to strengthen my CSS concepts
  
  </p>
  
  <div class="getCodeLink">
    <a href="https://github.com/JunaidHassan19/HTML-CSS-COURSE/tree/main/Positions%20practice" class="cv__btn">View Code</a>
  </div>
  
  </div>`;
};

/*****===============chat bot====================*** */

function openCXGenieChatWidget() {
  window.openCXGenieChatWidget();
}

document
  .getElementById("chatButton")
  .addEventListener("click", openCXGenieChatWidget);

/****==========================chat bot======================**** */

span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
