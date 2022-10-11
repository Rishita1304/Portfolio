let clock = () => {
    let hrs = new Date().getHours();
    let mins = new Date().getMinutes();
    let secs = new Date().getSeconds();
    let period = "AM";
    if (hrs == 0) {
        hrs = 12;
    } 
    else if (hrs >= 12) {
        hrs = hrs - 12;
        period = "PM";
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let time = `${hrs}:${mins}:${secs} ${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
};
clock()

$(document).ready(function(){
    $('#icon1').click(function(){
        $('ul').toggleClass('show');
    });
});


