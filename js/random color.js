let sections =document.querySelectorAll(".colorchange");
let aa =document.querySelectorAll(".changecoloraa");
console.log(sections.length)
// const random =Math.round(Math.random() * 360)




function changecoolor(){
    const random =Math.round(Math.random() * 360)

    sections.forEach(e=>{
        e.style.backgroundColor=`hsl(${random}, 100%, 92%)`;
    })


    aa.forEach(e=>{
        e.addEventListener("mouseover",()=>{
            e.style.color=`hsl(${random}, 100%, 92%)`;
        })
        e.addEventListener('mouseout', ()=> {
        e.style.color=`#000`;
        });
        
    })
}
changecoolor()
let stopone=setTimeout(()=>{
    setInterval(changecoolor ,10000)
},100)


