addSpeed = document.getElementById("add-speed-btn");
currentSpeed = document.getElementById("current-speed");

var speedArray = [];
var totalSpeed = 0;
var averageSpeed = 0;

addSpeed.addEventListener("onclick", function() {
    console.log("display = ");
    console.log(currentSpeed.style.display);
    if(currentSpeed.style.display == "none") {
        currentSpeed.style.display = "block";
    } else {
        speedArray.push(currentSpeed);
    }
})

for(var i = 0; i < speedArray.length; i++) {
    totalSpeed += speedArray[i];
}

if(speedArray.length > 0){
    averageSpeed = totalSpeed/speedArray.length;
    console.log("Average speed = " + averageSpeed);
}