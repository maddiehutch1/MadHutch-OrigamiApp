// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function calCost()
{
    let form = document.getElementById("tutorEstimate");
    let userData = new FormData(form);

    if (userData.get("numOfHours") > 0) {
        let userHrs = parseFloat(userData.get("numOfHours"));

        let hourlyWage = parseFloat(userData.get("costPerHour"));

        let totalCost = Math.round((userHrs * hourlyWage), 2);

        document.getElementById("totalOutput").innerHTML = "$" + totalCost.toString();
    }
    else {
        alert("Aw man! Our calculator cannot use that value. Please reenter a number above 0 hours.");
    }
    
}