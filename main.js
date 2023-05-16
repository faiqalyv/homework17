const male=document.querySelector(".male")
const female=document.querySelector(".female")
const both1=document.querySelector(".both1")

const b1=document.querySelector(".b1")
const b2=document.querySelector(".b2")
const b3=document.querySelector(".b3")

let block=false
b1.addEventListener("click",()=>{
    block=true
    if(block=true)
    {
        male.style.display="block"
        both1.style.display="none"
        female.style.display="none"
        block=false
    }
    else{
        male.style.display="none"
        both1.style.display="none"
        female.style.display="none"
        block=!block
    }
})
b2.addEventListener("click",()=>{
    female.style.display="block"
    male.style.display="none"
    both1.style.display="none"

})
b3.addEventListener("click",()=>{
    both1.style.display="block"
    male.style.display="none"
    female.style.display="none"
})

