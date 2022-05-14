const secondHand = $(".second-hand");
const minuteHand = $(".min-hand");
const hourHand = $(".hour-hand");
function setDate(){
    const now = new Date();

    // to get second hand move correctly
    const seconds = now.getSeconds();
    const secondDgree = ((seconds / 60) * 360) + 90;
    secondHand.css("transform", "rotate(" + secondDgree + "deg)");

    // now for minute
    const minutes = now.getMinutes();
    const minuteDgree = ((minutes / 60) * 360) + 90;
    minuteHand.css("transform", "rotate(" + minuteDgree + "deg)");


    // to move hour hand correctly
    const hour = now.getHours();
    const hourDgree = ((hour / 12) * 360) + 90;
    hourHand.css("transform", "rotate(" + hourDgree + "deg)");


    if (secondDgree === 444){
        secondHand.css("transition", "unset");
    }
    
}
setInterval(setDate, 1000);