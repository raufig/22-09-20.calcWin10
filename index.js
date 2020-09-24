const result = ''
const numbers = ''
const operators = ''
const previewDisplay = document.getElementById ("preview-display")
const numberDisplay = document.getElementById ("number-display")
const numInputs = document.getElementById ("num-inputs")
const number = document.querySelectorAll(".big-btns .big-btn").value


console.log (number)

//clase solo para los numeros
// clase solo para los operadores
const inputnumbers = (x) =>{
    numInputs.innerText += x
}
const inputOperator = (p)=>{
     previewDisplay.innerText  += p
    
//previewDisplay.innerText += p 

}
const buttons = document.querySelector(".big-btns")//cambiar por id
buttons.addEventListener('click', (n) => {
    if (n.target.classList.contains('thisNum')){
        //console.log(e.target.value)
        inputnumbers(n.target.value)
    } 
})

const opera = document.querySelector(".big-btns")//cambiar por id
opera.addEventListener('click', (o) => {
if(o.target.classList.contains('thisOpe')){
    inputOperator(o.target.value)
}
})  