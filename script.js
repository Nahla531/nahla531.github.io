const nav=document.querySelector("nav"),
      navList=nav.querySelectorAll("li"),
      totalnavList= navList.length,
      allSection=document.querySelectorAll(".section"),
      totalSection=allSection.length;

for(let i=0; i<totalnavList; i++){
    
    const a = navList[i].querySelector("a");
    a.addEventListener("click",function(){
        for(let j=0; j<totalnavList; j++){
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

const navTogglerBtn=document.querySelector(".fa-bars"),aside=document.querySelector(".aside");
navTogglerBtn.addEventListener("click",asideSectionTogglerBtn);

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}
