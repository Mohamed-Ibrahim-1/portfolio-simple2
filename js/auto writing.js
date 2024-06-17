let parr_ent =document.getElementById("terr");


let oneh2 =document.createElement("h2");
oneh2.setAttribute("id","test1");
parr_ent.appendChild(oneh2)

let onespan =document.createElement("span");
onespan.setAttribute("id","spaan");
parr_ent.appendChild(onespan)

let onep =document.createElement("p");
onep.setAttribute("id","pp");
parr_ent.appendChild(onep)


let i =1;
let j =1;
let r =1;
let stop1=setInterval(autowrting , 100)
function autowrting (){
let text0= `hello guys, my name is mohamed ibrahim `;
let text1= `Front-end developer `;
let text2= `i Look for an internship opportunity to gain more experience`;
oneh2.innerHTML=text0.slice(0 , i);

    i++
    if (i > text0.length) {
        // clearInterval(stop1)
        onespan.innerHTML=text1.slice(0 , j);
        j++
        }if(j > text1.length){
            onep.innerHTML=text2.slice(0 , r);
            r++
    }if(r > text2.length){
        parr_ent.style.marginBottom="30px";
        clearInterval(stop1)
    }

}