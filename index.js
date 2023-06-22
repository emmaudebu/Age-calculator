


const calculate = ()=>{
    let daylabel =document.querySelector(".daylabel")
    let Dayerror =document.querySelector(".error")
    let montherror =document.querySelector(".montherror")
let monthlabel =document.querySelector(".monthlabel")
let yearlabel =document.querySelector(".yearlabel")
let day = document.querySelector(".Day").value 
let month = document.querySelector(".Month").value 
let year = document.querySelector(".Year").value 

const date =  new Date();

if (day==="") {
    daylabel.style.color="red"
    Dayerror.textContent="Day is Empty !"
    Dayerror.style.color="red"
   setTimeout(() => {
    
    daylabel.style.color="black"
    Dayerror.textContent=""
    
   }, 3000);
} else if (month==="") {

    monthlabel.style.color="red"
    montherror.textContent="Month is Empty !"
    montherror.style.color="red"
   setTimeout(() => {
    
    monthlabel.style.color="black"
    montherror.textContent=""
    
   }, 3000);
    
} else if (year==="") {
    yearlabel.style.color="red"
    yearerror.textContent="Month is Empty !"
    yearerror.style.color="red"
   setTimeout(() => {
    
    yearlabel.style.color="black"
    yearerror.textContent=""
    
   }, 3000);

} else {

    evaluate()
    
}

   
}

function evaluate(params) {
    alert("done")
    
}