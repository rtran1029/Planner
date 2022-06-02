console.log("script has been linked")

//display current day at the top (html has an id made #currentDay)
$(document).ready(function() {
    $('#currentDay').text(moment().format('LLLL'));

//time block color changes dependent on past, present, future. (css has preset classes ".past .present .future")
    // var currentHour = 12
    var currentHour = moment().format("kk");
    console.log(currentHour)
    

// make a For loop to iterate through every time slot and check its hard coded "data" against currentHour
//use for loop to add and remove classes to the row
debugger
    for (let i = 0; i < timeSlotElArray.length; i++) {
        timeSlotElArray[i].removeClass("past","present","future")
        if (currentHour > timeSlotElArray[i].data("time")) {
            timeSlotElArray[i].addClass("past");
        } else if (currentHour == timeSlotElArray[i].data("time")) {
            timeSlotElArray[i].addClass("present");
        } else {
            timeSlotElArray[i].addClass("future");
        }
    }

//figure out how to save the text on the text field to local storage then .getItem an input it on that same row?
//use event listener to make the save button run the function to store ^^

});

//create array of time slots

let timeSlot0900 = $("#0900");
let timeSlot1000 = $("#1000");
let timeSlot1100 = $("#1100");
let timeSlot1200 = $("#1200");
let timeSlot1300 = $("#1300");
let timeSlot1400 = $("#1400");
let timeSlot1500 = $("#1500");
let timeSlot1600 = $("#1600");
let timeSlot1700 = $("#1700");

let timeSlotElArray = [
    timeSlot0900,
    timeSlot1000,
    timeSlot1100,
    timeSlot1200,
    timeSlot1300,
    timeSlot1400,
    timeSlot1500,
    timeSlot1600,
    timeSlot1700,
];