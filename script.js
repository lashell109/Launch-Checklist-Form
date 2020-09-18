// Write your JavaScript code here!
window.addEventlistener("load", function() {
    let form = document.querySelector("form");
     form.addEventListener("submit", function(event) {
         event.preventDefault();
         event.stopPropagation();
         
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        let items = document.getElementById("faultyItems");
        let launchStatus = document.getElementById("launchStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        
        if(pilotName === "" || copilotName === "" || fuelLevel === "" || isNaN(fuelLevel) || cargoMass === "" || isNaN(cargoMass)) {
                  alert("All fields are required!"); } 

             else {
               document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName}`
               document.getElementById("copilotStatus").innerHTML = `CoPilot ${copilotName}`

               if (fuelLevel < 10000) {
                  fuelStatus = ("There is not enough fuel for the journey"); }
               
               else {
                  fuelStatus = ("Fuel level high enough for launch");
               }
               if (cargoMass > 10000) {
                  cargoStatus = ("Too much mass for the shuttle to take off"); }
               
                  else {
                     cargoMass = ("Cargo mass low enough for launch");
            }
        }

     }); 
 });

//  This block of code shows how to format the HTML once you fetch some planetary JSON!
 fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then( function(json) {
      const div = document.getElementById("missionTarget");

      div.innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
      <li>Name: ${json.name}</li>
      <li>Diameter: ${json.diameter}</li>
      <li>Star: ${json.star}</li>
      <li>Distance from Earth: ${json.distance}</li>
      <li>Number of Moons: ${json.moons}</li>
   </ol>
   <img src="${json.image}">`
   });
});

