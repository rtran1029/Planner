console.log("script has been linked")

//display current day at the top (html has an id made #currentDay)
$(document).ready(function() {
    $('#currentDay').text(moment().format('LLLL'));

//time block color changes dependent on past, present, future. (css has preset classes ".past .present .future")
    
    var currentHour = moment().format("kk");
    console.log(currentHour)
    


    // function hourChecker() {
    //     if (currentHour)
    // };

//use funtion that adds and removes classes to the row

//figure out how to save the text on the text field to local storage then .getItem an input it on that same row?
//use event listener to make the save button run the function to store ^^

});