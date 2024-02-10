// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// here is js code converted into jquery

$("#numOfHours").focus();

// when doc is active and the calcBtn is pressed, it runs through the form and retrieves desired inputs/values to calculate total cost
// makes sure that it is a positive integer (and not null)
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