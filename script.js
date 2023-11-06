let header0 = document.getElementById('about-header');
let boxHeader0 = document.getElementById('box-header-0');
let boxText0 = document.getElementById('box-text-0');
let boxHeader01 = document.getElementById('box-header-0-1');
let boxText01 = document.getElementById('box-text-0-1');
let boxHeader1 = document.getElementById('box-header-1');
let boxText1 = document.getElementById('box-text-1');
let boxHeader11 = document.getElementById('box-header-1-1');
let boxHeaderSecondRow0 = document.getElementById('box-header-second-row-0');
let boxText2 = document.getElementById('box-text-2');
let boxHeaderSecondRow1 = document.getElementById('box-header-second-row-1');
let boxText3 = document.getElementById('box-text-3');
let boxText11 = document.getElementById('box-text-1-1');
let boxHeader2 = document.getElementById('box-header-2');
let boxHeader21 = document.getElementById('box-header-2-1');
let iconCon = document.getElementById('icon-container-0');
let iconCon1 = document.getElementById('icon-container-1');
let projDesc0 = document.getElementById('proj-desc-0');
let projDesc1 = document.getElementById('proj-desc-1');
let projDesc2 = document.getElementById('proj-desc-2');
let projDesc3 = document.getElementById('proj-desc-3');
let menuCircle0 = document.getElementById('menu-circle-0');
let menuCircle1 = document.getElementById('menu-circle-1');
let menuCircle2 = document.getElementById('menu-circle-2');
let logo0 = document.getElementById('proj-logo-0');
let logo1 = document.getElementById('proj-logo-1');
let logo2 = document.getElementById('proj-logo-2');


window.onscroll = function() {aboutHeaderAni()};

function aboutHeaderAni() {
  changeSlides();
  if (document.body.scrollTop > 500) {
    header0.classList.add('tracking-in-expand');
    header0.style.visibility = "visible";
    boxHeader0.style.visibility = "visible";
    boxHeader0.classList.add('fade-in-bottom');
    boxText0.style.visibility = "visible";
    boxText0.classList.add('fade-in-bottom');
    boxHeader01.style.visibility = "visible";
    boxHeader01.classList.add('fade-in-bottom');
    boxText01.style.visibility = "visible";
    boxText01.classList.add('fade-in-bottom');
  } else {
    
  }
} 

let slideNum = 0;
let slide0 = document.getElementById('slide-0');
let slidePlus1 = document.getElementById('slide-1');
let slideMinus1 = document.getElementById('slide-2');
let header1 = document.getElementById('past-header');
let header2 = document.getElementById('contact-header');

changeSlides();

function minusDivs() {
  if(slideNum<=-1) {
    slideNum = 1;
  } else {
    slideNum--;
  }
  changeSlides();
}
function plusDivs() {
  if(slideNum>=1) {
    slideNum = -1;
  } else {
    slideNum++;
  }
  changeSlides();
}

function changeSlides() {
  if(slideNum==0) {
    menuCircle0.style.backgroundColor = "#858585";
    menuCircle1.style.backgroundColor = "white";
    menuCircle2.style.backgroundColor = "white";
    slide0.style.display = "block";
    slidePlus1.style.display = "none";
    slideMinus1.style.display = "none";
    header0.style.display = "block";
    header1.style.display = "none";
    header2.style.display = "none";
    header0.classList.add('tracking-in-expand');
  }
  if(slideNum==1) {
    menuCircle0.style.backgroundColor = "white";
    menuCircle1.style.backgroundColor = "#858585";
    menuCircle2.style.backgroundColor = "white";
    slide0.style.display = "none";
    slidePlus1.style.display = "block";
    slideMinus1.style.display = "none";
    header0.style.display = "none";
    header1.style.display = "block";
    header2.style.display = "none";
    header1.classList.add('tracking-in-expand');
    boxHeader1.style.visibility = "visible";
    boxHeader1.classList.add('fade-in-bottom');
    boxText1.style.visibility = "visible";
    boxText1.classList.add('fade-in-bottom');
    boxHeader11.style.visibility = "visible";
    boxHeader11.classList.add('fade-in-bottom');
    boxText11.style.visibility = "visible";
    boxText11.classList.add('fade-in-bottom');
    projDesc0.style.visibility = "visible";
    projDesc0.classList.add('fade-in-bottom');
    projDesc1.style.visibility = "visible";
    projDesc1.classList.add('fade-in-bottom');
    logo0.style.visibility = "visible";
    logo0.classList.add('fade-in-bottom');
    logo1.style.visibility = "visible";
    logo1.classList.add('fade-in-bottom');
    if (document.body.scrollTop > 600) {
      projDesc2.style.visibility = "visible";
      projDesc2.classList.add('fade-in-bottom');
      projDesc3.style.visibility = "visible";
      projDesc3.classList.add('fade-in-bottom');
      boxHeaderSecondRow0.style.visibility = "visible";
      boxHeaderSecondRow0.classList.add('fade-in-bottom');
      boxText2.style.visibility = "visible";
      boxText2.classList.add('fade-in-bottom');
      boxHeaderSecondRow1.style.visibility = "visible";
      boxHeaderSecondRow1.classList.add('fade-in-bottom');
      boxText3.style.visibility = "visible";
      boxText3.classList.add('fade-in-bottom');
      logo2.style.visibility = "visible";
      logo2.classList.add('fade-in-bottom');
    } else {
      
    }
  }
  if(slideNum==-1) {
    menuCircle0.style.backgroundColor = "white";
    menuCircle1.style.backgroundColor = "white";
    menuCircle2.style.backgroundColor = "#858585";
    slide0.style.display = "none";
    slidePlus1.style.display = "none";
    slideMinus1.style.display = "block";
    header0.style.display = "none";
    header1.style.display = "none";
    header2.style.display = "block";
    header2.classList.add('tracking-in-expand');
    iconCon.style.visibility = "visible";
    iconCon.classList.add('fade-in-bottom');
    iconCon1.style.visibility = "visible";
    iconCon1.classList.add('fade-in-bottom');
    boxHeader2.style.visibility = "visible";
    boxHeader2.classList.add('fade-in-bottom');
    boxHeader21.style.visibility = "visible";
    boxHeader21.classList.add('fade-in-bottom');
  }
}