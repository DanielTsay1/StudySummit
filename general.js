jQuery.noConflict()
jQuery(function($) {
    $(document).ready(function() {
    
    $('.overlay').click(function(){
    $('.nav-list').removeClass('show');
    $('.overlay').removeClass('show');
    });

    $('.menu-button').click(function(){
        $('.nav-list').toggleClass('show');
        $('.overlay').toggleClass('show');
    });
    
});
});

var seconds = document.getElementById("countdown").textContent;
var countdown;

function addFive()
{
    seconds+=5;
    document.getElementById("countdown").innerHTML = seconds;

}

function minusTime()
{
    seconds-=5;
    document.getElementById("countdown").innerHTML = seconds;
}

function startTimer()
{
    countdown = setInterval(function() {
        seconds--;
        if(seconds == 1)
        {
            document.getElementById("plural").textContent = "";
        }else{
            document.getElementById("plural").textContent = "s";
        }
        document.getElementById("countdown").textContent = seconds;
        if(seconds <= 0)
        {
            endTimer();
        } 
    }, 1000);
}

function endTimer()
{
    clearInterval(countdown);
    seconds = 60;
    document.getElementById("countdown").innerHTML = "60";
}
