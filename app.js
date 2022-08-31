const firstCont = document.querySelector(".ctnr-first");
const secondCont = document.querySelector(".ctnr-second");
const numbers = document.querySelectorAll(".ctnr-first__number");
const submitBtn = document.querySelector("#submitBtn");
const rateBtn = document.querySelector("#rateBtn");
const rate_text = document.querySelector(".rate");

submitBtn.addEventListener("click", function(){
    firstCont.classList.add("hidden");
    secondCont.classList.remove("hidden");
})



rateBtn.addEventListener("click", function(){
    secondCont.classList.add("hidden");
    firstCont.classList.remove("hidden");
})


//! numbers'a foreach dönüyoruz ve tıklanan elemente(validNumber.addEventListener) ulaşıp on
numbers.forEach((validNumber) => {
    validNumber.addEventListener("click", (e) => {
        rate_text.innerHTML = validNumber.innerHTML;
    })
})
