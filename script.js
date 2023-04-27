var all1 = document.querySelector(".all1");
var all2 = document.querySelector(".all2");
var dash = document.querySelector(".dash");
const clone = document.querySelector(".all1");
console.log(clone);

console.log(all1);
console.log(all2);
console.log(dash);

function replace1() {
  setTimeout(() => {
    console.log("all1 is replaced by all2----");
    all1.style.display = "none";
    all2.style.display = "flex";
  }, 4800);
}

function replace2() {
  setTimeout(() => {
    console.log("all2 is replaced by dash----");
    all2.style.display = "none";
    dash.style.display = "flex";
  }, 10800);
}

function replace3() {
  setTimeout(() => {
    console.log("dash is replaced by all1");
    dash.style.display = "none";
    all1.style.display = "flex";
  }, 25800);
}

replace1();
replace2();
replace3();
setInterval(() => {
  replace1();
  replace2();
  replace3();
}, 25800);
