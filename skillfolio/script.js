 // SCROLL BAR
window.onscroll = function() {myFunction()};
        
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

let visibleMenu = false;
/* function that show and hide menu*/
function showhideMenu(){
    if(visibleMenu){
        document.getElementById("nav").classList ="";
        visibleMenu = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        visibleMenu= true;
    }
}

function select(){
    //hide menu once an opcion was chosen//
    document.getElementById("nav").classList = "";
    visibleMenu = false;
}

//Function that applies animations to the skills
function skillsEfect() {
    var skills = document.getElementById("skills");
    var skills_distance = window.innerHeight - skills.getBoundingClientRect().top;
    if (skills_distance >= 300) {
        let skills = document.getElementsByClassName("progress");
        skills[0].classList.add("javascript");
        skills[1].classList.add("htmlcss");
        skills[2].classList.add("python");
        skills[3].classList.add("java");
        skills[4].classList.add("c");
        skills[5].classList.add("english");
        skills[6].classList.add("teamwork");
        skills[7].classList.add("leadership");
        skills[8].classList.add("dedication");
        skills[9].classList.add("proyectm");
    }
}

//detect scrolling to apply skill bar animation
window.onscroll = function(){
    skillsEfect();
}