const userInput = document.getElementById('input-number');
const addBtn =document.getElementById('btn-add');
const subtractBtn=document.getElementById('btn-subtrsct');
const multiplayBtn=document.getElementById('btn-multiply');
const divideBtn=document.getElementById('btn-divide');


const currtntResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result,text){
    currtntResultOutput.textContent=result;
currentCalculationOutput.textContent=text;
}