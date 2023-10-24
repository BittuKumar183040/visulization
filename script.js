const displayArea=document.querySelector(".container")
const stack=document.querySelector(".stack-box")
const dropPlace=document.querySelector(".dropLoc p")
const container=document.querySelector(".stack-container")
const selectorDOM=document.querySelector("select")

let activeAlgo="stack"
const hider=()=>{
    Array.from(displayArea.children).forEach((algo)=>{
        console.log(activeAlgo, algo.classList.value)
        if(algo.classList.value!=activeAlgo){
            algo.style.display="none"
        }
        else{
            algo.style.display="flex"
        }
    })
}
hider()
function selector(e){
    activeAlgo=e.target.value
    hider();
}

let msg='Stack Empty'
stack.setAttribute('empty',msg)
function allowDrop(e){
    e.preventDefault();
}

function drag(e){
    console.log(e)
    e.dataTransfer.setData("text", e.target.id);
    dropPlace.style.border="2px solid black";
    dropPlace.style.color="black";
}
function drop(e){
    e.preventDefault();
    let data=e.dataTransfer.getData("text");
    stack.appendChild(document.getElementById(data));
    stack.setAttribute('empty','')
}
function pop(e){
    if(stack.getAttribute('empty')==msg){
        alert("Stack is already Empty")
    }
    else{
        let elements=stack.querySelectorAll("p")
        let element=elements[elements.length-1]
        container.appendChild(element)
        if(elements.length<2){
            stack.setAttribute('empty',msg)
        }
    }
}
function resetDrop(e){
    dropPlace.style.border="2px solid rgb(193, 193, 193)";
    dropPlace.style.color="rgb(104, 104, 104)";
}