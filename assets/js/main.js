/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav__menu");
const navToggel = document.getElementById("nav__toggel");
const navClose = document.getElementById("nav__close");


        /*====  Menu Show  =====*/
/*=====  Validate if constant exists ======*/
if (navToggel) {
    navToggel.addEventListener("click", ()=>{
        navMenu.classList.add("show_menu");
    })
};

        /*====  Menu Hidden  =====*/
/*=====  Validate if constant exists ======*/
if (navClose) {
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show_menu");
    })
}



/*=============== REMOVE MENU MOBILE ===============*/

          /*=== All Link As Array ====*/
const navLink = document.querySelectorAll(".nav__link");

    /*===== A Variable Contain A Function REMOVE MENU MOBILE =======*/
const activeLink = ()=>{
    const navMenu = document.getElementById("nav__menu");

    navMenu.classList.remove("show_menu")
}

  /*======= for Each Link when click on activation  A Function activeLink ====*/
navLink.forEach( link =>{ link.addEventListener("click", activeLink) } );




/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = ()=>{
    const header = document.getElementById("header");
    // when scroll value is greater than 50 px add class bg-header to the header
    if (this.scrollY >= 50) {
        header.classList.add("bg-header");
    } else{
        header.classList.remove("bg-header");
    };
}

window.addEventListener("scroll", scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav__menu .nav__list li a")


window.addEventListener("scroll", ()=>{
    let current = "";

    const scrollY = window.pageYOffset;

    sections.forEach( section => {
        const top = section.offsetTop;
        const height = section.offsetHeight; 

        if (scrollY >= (top - height / 5) ) {
            current = section.getAttribute("id");
        }
    })

    links.forEach(link =>{
        link.classList.remove("active-link")
        
        if (link.classList.contains(current)) {            
            link.classList.add("active-link")
        }
    })
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = ()=>{
    const goup = document.getElementById("scrollup");

    if (this.scrollY >= 400) {
        goup.classList.add("scrollshow")
    } else {
        goup.classList.remove("scrollshow")
    }

    goup.onclick = () =>{
        window.scrollTo({
            top: 0
        })
    }
}

window.addEventListener("scroll", scrollup)

/*=============== SCROLL REVEAL ANIMATION ===============*/

window.addEventListener("scroll", reveal)

function reveal() {
   const reveals = document.querySelectorAll("section.reveal");

    for (var i = 0 ; i < reveals.length; i++) {
        var windowheight = window.innerHeight; // window vh
        var revealtop = reveals[i].getBoundingClientRect().top; // location of the Element how far is it from the top of the window

        var revealpoint = 100;
                  
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active")
        } else {
            reveals[i].classList.remove("active")
        }
    }
}

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById("calculate__form");
const calculateCm = document.getElementById("calculate-cm");
const calculateKg = document.getElementById("calculate-kg");
const calculateMessage = document.getElementById("calculate-message");


const calculateBmi = (e)=> {
    e.preventDefault()
    // Check if the fields have a value
    if (calculateCm.value === "" || calculateKg.value === "") {
        calculateMessage.classList.remove("color-green")
        calculateMessage.classList.add("color-red")
        calculateMessage.textContent = "Fill in the Height and Weight 🤷‍♀️"

        setTimeout(()=>{
            calculateMessage.textContent = ""
        }, 2500)
    } else {
        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              bmi = Math.round(kg / (cm * cm))  

        if (bmi < 18.5) {
            calculateMessage.classList.add("color-green");
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😢`
        }  else if (bmi < 25) {
            calculateMessage.classList.add("color-green");
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 🥳`
        }    else {
            calculateMessage.classList.add("color-green");
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😓`
        }
        calculateCm.value = ""
        calculateKg.value = ""
        setTimeout(()=>{
            calculateMessage.textContent = ""
        }, 4000)
    }
}


calculateForm.addEventListener("submit", calculateBmi)


/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById("contact__form");
const contactUser = document.getElementById("contact__user");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e)=>{
    e.preventDefault()
    // Check if the field has a value
    if (contactUser.value === "") {
        contactMessage.classList.remove("color-green")
        contactMessage.classList.add("color-red")

        contactMessage.textContent = "You must enter your email 🤷‍♀️"

        setTimeout(()=>{
            contactMessage.textContent = ""
        }, 3000)
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm("service_wo83wps", "template_cx95hlv", "#contact__form", "arIaFeNc8iuAYgPOb")
            .then(()=>{
                contactMessage.classList.add("color-green")
                contactMessage.textContent = "You registered successfully"

                // Remove message after three seconds
                setTimeout(()=>{
                    contactMessage.textContent = ""
                },3000)
            }, (Error)=>{
                // Mail sending error
                alert("OOPS! SOMETHING HAS FAILED...")
            } )

          // To clear the input field
                contactUser.value = ""
           
    }

 
}

contactForm.addEventListener("submit", sendEmail);


