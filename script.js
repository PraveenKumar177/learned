
const btn = document.querySelector(".btn_select")
const form = document.querySelector(".form-fact")

btn.addEventListener ("click" , function () {
 if(form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
 }
 else{
    form.classList.add("hidden")
    btn.textContent = "shared a fact"
 }


});

/*let votesInteresting = 23 ;
let votesMindBlowing = 5;
const text = "hey i m praveenkumar";

votesInteresting = votesMindBlowing + 5 ;
votesInteresting++;
console.log(text);
console.log(votesInteresting);

let  total= votesInteresting + votesMindBlowing; 
console.log("Total :" , total)

let votesFalse = 16;
const isCorrect = votesFalse === total;
console.log(isCorrect)
*/
function calcFactAge(year){
  const currentYear = 2023;
  const age = currentYear - year;
  return age;
}
const age1 = calcFactAge(2001);
console.log(age1)

console.log(calcFactAge(2001))
console.log(calcFactAge(2000))


const calcFactAge2 = (year) => { currentYear-year}
console.log(calcFactAge2())

let votesInteresting = 20;
let votesMindBlowing = 0;
// if (votesInteresting === votesMindBlowing){
//    alert("Equal")
// }else{
//    alert("not Equal")
// }

if (votesInteresting < votesMindBlowing){
   console.log("Equal")
}else{
   console.log("not Equal")

}

//falsy value : 0 , " ",undefined

if(votesMindBlowing){
   console.log("value")
}else{
   console.log("please add any value")
}


votesInteresting < votesMindBlowing ? console.log("true"):console.log("false");
let a=1 
let b=2
const c = a < b 
? "correct"
:"wrong";
console.log("The ans is" , c)

const text = "i m praveenkumar"
const upperText = text.toUpperCase();
console.log(upperText)
const str = `hello ${upperText} , what about you ?`; //Template literal 
console.log(str)


