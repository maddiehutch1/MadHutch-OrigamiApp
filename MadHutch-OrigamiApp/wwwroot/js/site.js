// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(function () {
    $("#calcBtn").click(function () {

        let userHrs = parseFloat($("#numOfHours").val());

        if (userHrs > 0) {
            let hourlyWage = parseFloat($("#costPerHour").val());

            let totalCost = Math.round((userHrs * hourlyWage), 2);

            $("#totalOutput").html("$" + totalCost.toString());
        }
        else {
            alert("Aw man! Our calculator cannot use that value. Please reenter a number above 0 hours.");
        }
    })
})