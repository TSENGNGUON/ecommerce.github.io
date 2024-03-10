

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

var bool = true;


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



