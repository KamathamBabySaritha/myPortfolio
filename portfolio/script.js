/*function gohome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }*/

  /*function show(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => sec.classList.add("hidden"));
    document.getElementById(sectionId.toUpperCase()).classList.remove("hidden");
  }*/

function show(topic) {
  
  const sections = ["home", "Home", "About", "Skills", "Projects", "Certifications", "Resume", "Contact"];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });

  const target = document.getElementById(topic);
  if (target) target.classList.remove("hidden");
}


function gohome() {
  document.getElementById("Home").classList.add("hidden");
  document.getElementById("About").classList.add("hidden");
  document.getElementById("Skills").classList.add("hidden");
  document.getElementById("Projects").classList.add("hidden");
  document.getElementById("Certifications").classList.add("hidden");
  document.getElementById("Resume").classList.add("hidden");
  document.getElementById("Contact").classList.add("hidden");

  document.getElementById("home").classList.remove("hidden");

}