// ============================Project====================================
let allcards=[
    `            <div class="project-card">
                    <div class="project-image">
                        <img src="images/first-project.png" alt="">
                    </div>
                    <div class="project-info">
                        <p class="project-category">first-project</p>
                        <strong class="project-title">
                            <a href="https://mohamed-ibrahim-1.github.io/-Template-One/" class="more-details"
                                target="_blank">more details</a>
                        </strong>
                    </div>
                </div>`,
                `<div class="project-card">
                    <div class="project-image">
                        <img src="images/second-project.png" alt="">
                    </div>
                    <div class="project-info">
                        <p class="project-category">second-project</p>
                        <strong class="project-title">
                            <a href="https://mohamed-ibrahim-1.github.io/-Template-two/" class="more-details"
                                target="_blank">more details</a>
                        </strong>
                    </div>
                </div>`,
                `<div class="project-card">
                    <div class="project-image">
                        <img src="images/Third-project.png" alt="">
                    </div>
                    <div class="project-info">
                        <p class="project-category">Third-project</p>
                        <strong class="project-title">
                            <a href="https://mohamed-ibrahim-1.github.io/YouTube/" class="more-details" target="_blank">more
                                details</a>
                        </strong>
                    </div>
                </div>`,
                `<div class="project-card">
                    <div class="project-image">
                        <img src="images/Fourth-project.png" alt="">
                    </div>
                    <div class="project-info">
                        <p class="project-category">Fourth-project</p>
                        <strong class="project-title">
                            <a href="https://mohamed-ibrahim-1.github.io/Template-four/" class="more-details"
                                target="_blank">more details</a>
                        </strong>
                    </div>
                </div>`,
    ]
    
    let concenter=document.getElementById("contentProjects")
    let Project=document.getElementById("Project")
    
    
    concenter.innerHTML=allcards[0];
    
    let next=document.getElementById("next")
    let pre=document.getElementById("pre")
    let p=0;
    
    
    pre.setAttribute("disabled" ,"")
    
    next.addEventListener("click",()=>{
        pre.removeAttribute("disabled")
    
        p++
        concenter.innerHTML=allcards[p];
    
    
    if(p+1 == allcards.length ){
        next.setAttribute("disabled" ,"")
    }
    })
    
    pre.addEventListener("click",()=>{
        next.removeAttribute("disabled")
    p--
        concenter.innerHTML=allcards[p];
    
    
        if(p == 0){
            pre.setAttribute("disabled" ,"")
        }
    
    }
    )
    


Project.addEventListener("keydown", (ev) => {
    console.log(ev.key);

    if (ev.key == "ArrowRight") {
        if (p < allcards.length - 1) {
            pre.removeAttribute("disabled");
            p++;
            concenter.innerHTML = allcards[p];
        }

        if (p == allcards.length - 1) {
            next.setAttribute("disabled", "");
        }
    }

    if (ev.key == "ArrowLeft") {  // إذا كنت ترغب في التعامل مع السهم الأيسر أيضًا
        if (p > 0) {
            next.removeAttribute("disabled");
            p--;
            concenter.innerHTML = allcards[p];
        }

        if (p == 0) {
            pre.setAttribute("disabled", "");
        }
    }
});
