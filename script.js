const hamb = document.querySelector("#hamb"); 
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu");
const menuCloseItem = document.querySelector('#cross');
const shadow=document.querySelector('.shadow')
const account=document.querySelector('#account')

shadow.addEventListener('click', activ);
hamb.addEventListener("click", activ);
menuCloseItem.addEventListener('click', activ);

  function  activ() {
    popup.classList.toggle("open");
  hamb.classList.toggle("active");
  shadow.classList.toggle("active");
  menu.classList.toggle('active');
  renderPopup();

};

function renderPopup() {
    popup.appendChild(menu);
  }

  const loginButton=document.querySelector('.button1');
  const modal1=document.getElementById('login_popup');
   const modal2=document.querySelector('.signup_popup');
  const registerSwitch=document.querySelector('.register');
  const loginSwitch=document.querySelector('.login');
const alertOut=document.querySelector('.alertOut');
const signIn=document.querySelector('.sign_in');

signIn.addEventListener('click',(sig)=>{
  alertOut.classList.toggle('alertOut_active');
  let a =document.querySelector('.input_email').value;
let b =document.querySelector('.input_password').value;
  document.querySelector('.alertOut').innerHTML='Email:  ' + a +'<br/>Password:  ' +b;
   }) ;

shadow.addEventListener('click',(shad)=>{
  modal1.classList.remove('login_popup_open');
  modal2.classList.remove('signup_popup_active');
   alertOut.classList.remove('alertOut_active');
   document.getElementsByClassName('login_popup')[0].style= "transition: 1s";
   popup.classList.remove("open");
   menu.classList.remove('active');
     }) ;

  registerSwitch.addEventListener('click', (swi)=>{
    modal1.classList.remove('login_popup_open');
    modal2.classList.add('signup_popup_active');
    document.getElementsByClassName('login_popup')[0].style= "transition: 0s";
  })

  loginSwitch.addEventListener('click', (swit)=>{
    modal2.classList.remove('signup_popup_active');
    modal1.classList.add('login_popup_open');
  })

loginButton.addEventListener('click', (event)=>{
    modal1.classList.toggle('login_popup_open');
    modal2.classList.remove('signup_popup_active');
    shadow.classList.toggle("active");
    alertOut.classList.remove('alertOut_active');
  });

      account.addEventListener('click', (event)=>{
        modal1.classList.toggle('login_popup_open');
      alertOut.classList.remove('alertOut_active');
        popup.classList.remove("open");
        menu.classList.remove('active');
  });     
 


let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mobile slider-item");
    let dots = document.getElementsByClassName("dots");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



// const openMenu = document.querySelectorAll('.openMenu');
// const menu = document.querySelector('.headerMenu');
// const BackgroundMenu = document.querySelector('.BackgroundMenu');
// const menuItem = document.querySelectorAll('.menuItem');
// const body = document.querySelector('.body');
// const account = document.querySelectorAll('.account');
// const BackgroundPopUp = document.querySelector('.BackgroundPopUp');
// const PopUp = document.querySelector('.loginPopUp');
// const Register = document.querySelector('.register');
// const hide = document.querySelectorAll('.hide');
// const titlePopUp = document.querySelector('.titlePopUp');
// const sign = document.querySelector('.sign');
// const textQuestion = document.querySelector('.textQuestion');
// const buttonHelp = document.querySelector('.help');

// openMenu.forEach(img => {
//     img.addEventListener('click', () => {
//         menu.classList.toggle('active')
//         BackgroundMenu.classList.toggle('active')
//         body.classList.toggle('active')
//    })
// })

// menuItem.forEach(a => {
//     a.addEventListener('click', () => {
//         if (menu.classList.contains('active'), 
//         BackgroundMenu.classList.contains('active'),
//         body.classList.contains('active')) {
//             menu.classList.toggle('active'),
//             BackgroundMenu.classList.toggle('active'),
//             body.classList.toggle('active');
//         }
//    })
// })

// BackgroundMenu.addEventListener('click', () => {
//     menu.classList.toggle('active')
//     BackgroundMenu.classList.toggle('active')
//     body.classList.toggle('active')
// })

// account.forEach(button => {
//     button.addEventListener('click', () => {
//         BackgroundPopUp.classList.toggle('hidden')
//         body.classList.toggle('active')
//         PopUp.classList.toggle('active')
//     })
// })

// BackgroundPopUp.addEventListener('click', (event) => {
//     if (event.target.classList.contains('BackgroundPopUp')) {
//         BackgroundPopUp.classList.toggle('hidden')
//         body.classList.toggle('active')
//         PopUp.classList.toggle('active')
//     }
// })

// Register.addEventListener('click', () => {
//     hide.forEach(div => {
//         div.classList.toggle('display')
//     })
//     titlePopUp.textContent = titlePopUp.textContent === 'Create account' ? 'Log in to your account' : 'Create account';
//     sign.textContent = sign.textContent === 'Sign Up' ? 'Sign In' : 'Sign Up';
//     textQuestion.textContent = textQuestion.textContent === 'Already have an account?' ? 'Don’t have an account?' : 'Already have an account?';
//     Register.textContent = Register.textContent === 'Log in' ? 'Register' : 'Log in';
// })

// buttonHelp.addEventListener("click", () => {
//     const val = document.help.text.value;
//     if(val) {
//         alert(`Would you like to do: ${val}`);
//     }
// })

// function validate() {
//     const email=document.forms['form']['email'].value;
//     const password=document.forms['form']['password'].value;
//     if (email.length==0) {
//         document.getElementById('warningEmail').innerHTML=' - This field is required';
//         return false;
//     }
//     if (password.length==0) {
//         document.getElementById('warningPassword').innerHTML=' - This field is required';
//         return false;
//     }
//     else {
//         alert(`Email: ${email}\nPassword: ${password}`);
//     }
//  }
