let availibilityBanner = document.getElementById("availability");
let agesBanner = document.getElementById("ages");
let locationsBanner = document.getElementById("locations");
let emailBanner = document.getElementById("email");
let nameBanner = document.getElementById("title-name");
let roleBanner = document.getElementById("roles");
let expBanner = document.getElementById("experience");

function getValueForm() {
  const name = document.getElementById("myform").elements[0].value;
  const role = document.getElementById("myform").elements[1].value;
  const availabilities = document.getElementById("myform").elements[2].value;
  const ages = document.getElementById("myform").elements[3].value;
  const lokasi = document.getElementById("myform").elements[4].value;
  const experience = document.getElementById("myform").elements[5].value;
  const email = document.getElementById("myform").elements[6].value;
  nameBanner.innerHTML = name;
  roleBanner.innerHTML = role;
  availibilityBanner.innerHTML = availabilities;
  agesBanner.innerHTML = ages;
  locationsBanner.innerHTML = lokasi;
  expBanner.innerHTML = experience;
  emailBanner.innerHTML = email;
}
