let arrow = document.querySelectorAll(".arrow");
// console.log(arrow);
for(var i = 0; i< arrow.length; i++){
    arrow[i].addEventListener('click',(event)=>{
        let arrowParent = event.target.parentElement.parentElement;
        console.log(arrowParent);
        arrowParent.classList.toggle("showMenu");
    })
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-home-circle");
sidebarBtn.addEventListener('click',(event)=>{
    sidebar.classList.toggle("close");
})
