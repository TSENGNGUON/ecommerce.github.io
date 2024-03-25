

// Countdown Date
var countDownDate = new Date("March 1, 2024 9:56:26").getTime();

var x = setInterval(() => {
    
    var now = new Date().getTime();
    var distance = now - countDownDate;

    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds = Math.floor((distance % (1000*60))/1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);

// Menus of Fashion
// Man Fashions
const btnManFashion = document.querySelector(".man-fashion");

// Woman Fashion
const btnWomanFashion = document.querySelector(".woman-fashtion");
// Watches
const btnWatches = document.querySelector(".watches");
// See More
const btnSeeMoreFas = document.querySelector(".see-more-f");
// Chevron Left And Right of Fashions
const chevronLeftFas = document.querySelector(".chevron-left-f-l");
const chevronRightFas = document.querySelector(".chevron-right-f-r");

// Chevron Left TV 
const chevronLeftTv = document.querySelector(".chevron-left-tv");

// Chevron Left TV 
const chevronRightTv =  document.querySelector(".chevron-right-tv");

// Menu Btn of Tv and Video Menu
const btnTelevisions = document.querySelector(".televisions");

// Menu btn Audio
const btnAudio = document.querySelector(".audio");

// Menu Btn Projector
const btnProjector = document.querySelector(".projector");

// Menu btn See More Tv
const btnSeeMoreTv = document.querySelector(".see-more-tv");

// See Mores
const btnSeeMore = document.querySelector(".see-more");

// Tablet 
const btnTablets = document.querySelector(".tablet");

// Menu Mobile Accessories
const btnMobileAccessories = document.querySelector(".moblie-accessories");

// Menu Smart Phone
const btnSmrtPhone = document.querySelector(".smart-phone");
// Btn Categories
const btnCategories = document.querySelector(".menu-categories");

// Content Left
const btnContentLeft = document.querySelector(".content-left");

// Toggle List Categories
const btnListCategories = document.querySelector(".list-categories");

// Top Brannds Menu
const menuTopBrands = document.querySelector(".top-brands");

// Menu Fashion 
const menuFashion = document.querySelector(".fashion-brands");

// Menu Electronic

const menuElectronic = document.querySelector(".electronic-brands");

// Chevron Left
const chevronLeft = document.querySelector(".chevron-left");

// Chevron Right
const chevronRight = document.querySelector(".chevron-right");

// Chevron Left1
const chevronLeft1 = document.querySelector(".chevron-left1");

// Chevron Right1
const chevronRight1 = document.querySelector(".chevron-right1");

var bool = true;

// Menus of Electronics
const btnGamepad = document.querySelector(".gamepad");
const btnVitualReality = document.querySelector(".vitual-reality");
const btnCamera = document.querySelector(".camera");
const btnSeeMoreElec = document.querySelector(".see-more-elec");
// Chevron Left and Right of Electronics
const  chevronLeftElecL = document.querySelector(".chevron-left-elec-l");
const chevronRightElecR = document.querySelector(".chevron-right-elec-r");











// Click Event Menus of Electronics
btnGamepad.addEventListener("click",function(){
    btnGamepad.classList.add("active");
    btnVitualReality.classList.remove("active");
    btnCamera.classList.remove("active");
    btnSeeMoreElec.classList.remove("active");
})
btnVitualReality.addEventListener("click",function(){
    btnGamepad.classList.remove("active");
    btnVitualReality.classList.add("active");
    btnCamera.classList.remove("active");
    btnSeeMoreElec.classList.remove("active");
})
btnCamera.addEventListener("click",function(){
    btnGamepad.classList.remove("active");
    btnVitualReality.classList.remove("active");
    btnCamera.classList.add("active");
    btnSeeMoreElec.classList.remove("active");
})
btnSeeMoreElec.addEventListener("click",function(){
    btnGamepad.classList.remove("active");
    btnVitualReality.classList.remove("active");
    btnCamera.classList.remove("active");
    btnSeeMoreElec.classList.add("active");
})

chevronLeftElecL.addEventListener("click",function(){
    chevronLeftElecL.classList.add("active");
    chevronRightElecR.classList.remove("active");
})
chevronRightElecR.addEventListener("click",function(){
    chevronLeftElecL.classList.remove("active");
    chevronRightElecR.classList.add("active");
})


// Click Event Menus of Fashions 
btnManFashion.addEventListener("click",function(){
    btnManFashion.classList.add("active");
    btnWomanFashion.classList.remove("active");
    btnWatches.classList.remove("active");
    btnSeeMoreFas.classList.remove("active");
})
btnWomanFashion.addEventListener("click",function(){
    btnManFashion.classList.remove("active");
    btnWomanFashion.classList.add("active");
    btnWatches.classList.remove("active");
    btnSeeMoreFas.classList.remove("active");
})
btnWatches.addEventListener("click",function(){
    btnManFashion.classList.remove("active");
    btnWomanFashion.classList.remove("active");
    btnWatches.classList.add("active");
    btnSeeMoreFas.classList.remove("active");
})
btnSeeMoreFas.addEventListener("click",function(){
    btnManFashion.classList.remove("active");
    btnWomanFashion.classList.remove("active");
    btnWatches.classList.remove("active");
    btnSeeMoreFas.classList.add("active");
})

// Chevron Left and Right Fashions
chevronLeftFas.addEventListener("click",function(){
    chevronLeftFas.classList.add("active");
    chevronRightFas.classList.remove("active");
})
chevronRightFas.addEventListener("click",function(){
    chevronLeftFas.classList.remove("active");
    chevronRightFas.classList.add("active");
})


// Click on Chevron Left or Right TV and Video
chevronLeftTv.addEventListener("click",function(){
    chevronLeftTv.classList.add("active");
    chevronRightTv.classList.remove("active");
})

chevronRightTv.addEventListener("click",function(){
    chevronLeftTv.classList.remove("active");
    chevronRightTv.classList.add("active");
})


// CLick on Televison Menu
btnTelevisions.addEventListener("click",function(){
    btnTelevisions.classList.add("active");
    btnAudio.classList.remove("active");
    btnProjector.classList.remove("active");
    btnSeeMoreTv.classList.remove("active");
    
})
// CLick on Audio Menu
btnAudio.addEventListener("click",function(){
    btnTelevisions.classList.remove("active");
    btnAudio.classList.add("active");
    btnProjector.classList.remove("active");
    btnSeeMoreTv.classList.remove("active");
})
// CLick on Projector Menu
btnProjector.addEventListener("click",function(){
    btnTelevisions.classList.remove("active");
    btnAudio.classList.remove("active");
    btnProjector.classList.add("active");
    btnSeeMoreTv.classList.remove("active");
})
// CLick on See More Menu
btnSeeMoreTv.addEventListener("click",function(){
    btnTelevisions.classList.remove("active");
    btnAudio.classList.remove("active");
    btnProjector.classList.remove("active");
    btnSeeMoreTv.classList.add("active");
})




// Click SmartPhone 
btnSmrtPhone.addEventListener("click",function(){
    btnSmrtPhone.classList.add("active");
    btnMobileAccessories.classList.remove("active");
    btnTablets.classList.remove("active");
    btnSeeMore.classList.remove("active");
})
// Click Mobile Accessories
btnMobileAccessories.addEventListener("click",function(){
    btnSmrtPhone.classList.remove("active");
    btnMobileAccessories.classList.add("active");
    btnTablets.classList.remove("active");
    btnSeeMore.classList.remove("active");
})

// Click Tablets
btnTablets.addEventListener("click",function(){
    btnSmrtPhone.classList.remove("active");
    btnMobileAccessories.classList.remove("active");
    btnTablets.classList.add("active");
    btnSeeMore.classList.remove("active");
})

// Click See More
btnSeeMore.addEventListener("click",function(){
    btnSmrtPhone.classList.remove("active");
    btnMobileAccessories.classList.remove("active");
    btnTablets.classList.remove("active");
    btnSeeMore.classList.add("active");
})


// Chevron Right1
chevronRight1.addEventListener("click",function(){
    chevronRight1.classList.add("active");
    chevronLeft1.classList.remove("active");
})

// Chevron Left1
chevronLeft1.addEventListener("click",function(){
    chevronLeft1.classList.add("active");
    chevronRight1.classList.remove("active");
})
// Chevron Right
chevronRight.addEventListener("click",function(){
    chevronRight.classList.add("active");
    chevronLeft.classList.remove("active");
})

// Chevron Left 
chevronLeft.addEventListener("click",function(){
    chevronLeft.classList.add("active");
    chevronRight.classList.remove("active");
})

menuElectronic.addEventListener("click",function(){
    menuElectronic.classList.add("active");
    menuFashion.classList.remove("active");
    menuTopBrands.classList.remove("active");
})

menuFashion.addEventListener("click",function(){
    menuFashion.classList.add("active");
    menuElectronic.classList.remove("active");
    menuTopBrands.classList.remove("active");
})

menuTopBrands.addEventListener("click",function(){
    menuTopBrands.classList.add("active");
    menuElectronic.classList.remove("active");
    menuFashion.classList.remove("active");
})

btnCategories.addEventListener("click",function(){
    if(bool == true){
        btnListCategories.classList.add("active");
        btnContentLeft.classList.add("active");
        bool = false;
    }else {
        btnListCategories.classList.remove("active");
        btnContentLeft.classList.remove("active");
        bool = true;
    }

})



