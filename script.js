
const btn = document.querySelector(".btn_select")
const form = document.querySelector(".fact-form")

btn.addEventListener ("click" , function () {
    console.log("hello")
 if(form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
 }
 else{
    form.class.add("hidden")
    btn.textContent = "shared a fact"
 }


});
