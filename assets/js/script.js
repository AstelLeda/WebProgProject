// display Skills
const mySkills = ["Website Developer", "Graphic Designer"];
let stringIndex = 0;
let arrayIndex = 0;
let isAdding = true;
let interval;
const displaySkills = document.querySelector("#home .display-skill ");

function displayDelay(timeoutDelay, intervalDelay) {
  setTimeout(() => {
    interval = setInterval(diplaySkillsFunc, intervalDelay);
  }, timeoutDelay);
  clearInterval(interval);
}
function diplaySkillsFunc() {
  const skill = mySkills[arrayIndex];

  if (isAdding) {
    let skills = skill.substring(0, stringIndex + 1);
    displaySkills.innerText = `${skills}|`;
    stringIndex++;
    if (stringIndex === skill.length) {
      isAdding = false;
      displayDelay(2000, 60);
    }
  } else {
    stringIndex--;
    let skills = skill.substring(0, stringIndex);
    displaySkills.innerText = `${skills}|`;
    if (stringIndex === 0) {
      isAdding = true;
      arrayIndex = (arrayIndex + 1) % mySkills.length;
      displayDelay(500, 120);
    }
  }
}
interval = setInterval(diplaySkillsFunc, 95);



// top-nav //
const navigations = document.querySelectorAll('nav.navbar a');
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver(entries => {   
    entries.forEach(entry => {

        navigations.forEach(navigation => {
            const navValue = navigation.getAttribute('data-value');
            const sectionValue  = entry.target.classList[0];
            if(entry.isIntersecting){
                if(sectionValue === navValue){
                    navigation.classList.add('active')
                }else{
                    navigation.classList.remove('active')
                }
            }
        })       
    })
},{
    rootMargin: '-200px'
});



sections.forEach(section => {
    sectionObserver.observe(section)
})