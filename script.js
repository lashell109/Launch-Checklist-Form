// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
const divTarget = document.getElementById("missionTarget");

   divTarget.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[3].name}</li>
         <li>Diameter: ${json[3].diameter}</li>
         <li>Star: ${json[3].star}</li>
         <li>Distance from Earth: ${json[3].distance}</li>
         <li>Number of Moons: ${json[3].moons}</li>
      </ol>
      <img src="${json[3].image}"> `
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      event.stopPropagation();
      
   let pilotName = document.querySelector("input[name=pilotName]").value;
   let copilotName = document.querySelector("input[name=copilotName]").value;
   let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
   let cargoMass = document.querySelector("input[name=cargoMass]").value;

   let items = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let ready = true;
     
      if (pilotName.value === "" || !isNaN(pilotName) || copilotName.value === "" || !isNaN(copilotName) || fuelLevel.value === "" || isNaN(fuelLevel) || cargoMass.value === "" || isNaN(cargoMass)) {
         alert("All fields are required!");
         items.style.visibility = "hidden";
      } else {
            items.style.visibility = "visible";
            launchStatus.innerHTML = "Awaiting Information Before Launch";
            document.getElementById("pilotStatus").innerHTML = `Pilot: ${pilotName} = ready`
            document.getElementById("copilotStatus").innerHTML = `CoPilot: ${copilotName} = ready`

            if (fuelLevel < 10000) {
               ready = false;
               items.style.visibility = "visible";
               launchStatus.style.color = "red";
               fuelStatus.innerHTML = "There is not enough fuel for the journey = not ready";                                                                                                                    
            
            } else {
               ready = true;
               launchStatus.style.color = "green";
               fuelStatus.innerHTML = "Fuel level high enough for launch = ready"; }

            if (cargoMass > 10000) {
               ready = false;
               items.style.visibility = "visible";
               launchStatus.style.color = "red";
               cargoStatus.innerHTML = "Too much mass for the shuttle to take off = not ready"; 
            
            } else {
               ready = true;
               launchStatus.style.color = "green";
               cargoStatus.innerHTML = "Cargo mass low enough for launch = ready"; }
     }
  }); 
});

//  This block of code shows how to format the HTML once you fetch some planetary JSON!

