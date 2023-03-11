const ratio = .1

const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
      } 
  })
}
 
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
  observer.observe(r)
})



let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
     
     if( counter == 80 ) {
       clearInterval();
     } else {
      counter += 1
      number.innerHTML = counter + "%";
     } 
},20);

let number1 = document.getElementById("number1");
let counter1 = 0;
setInterval(() => {
     
     if( counter1 == 60 ) {
       clearInterval();
     } else {
      counter1 += 1
      number1.innerHTML = counter1 + "%";
     } 
},20);


let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
     
     if( counter2 == 35 ) {
       clearInterval();
     } else {
      counter2 += 1
      number2.innerHTML = counter2 + "%";
     } 
},40);


let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
     
     if( counter3 == 25 ) {
       clearInterval();
     } else {
      counter3 += 1
      number3.innerHTML = counter3 + "%";
     } 
},60);


let number4 = document.getElementById("number4");
let counter4 = 0;
setInterval(() => {
     
     if( counter4 == 70 ) {
       clearInterval();
     } else {
      counter4 += 1
      number4.innerHTML = counter4 + "%";
     } 
},20);

let number5 = document.getElementById("number5");
let counter5 = 0;
setInterval(() => {
     
     if( counter5 == 80 ) {
       clearInterval();
     } else {
      counter5 += 1
      number5.innerHTML = counter5 + "%";
     } 
},20);