//setting the header time
let current = $('#currentDay')
let now = moment()
current.text(now)

let Timer = setInterval(updateTime, 1000)
//lets the interval run and update the time through this function
function updateTime() {
    let nower = moment()
    current.text(nower)
}
//modulate the color depending on the day
function initColor() {
    let hour = moment().format("HH");
    console.log(hour)
    for (i = 7; i < 25; i++){
        if (i < hour) {
            $("#" + i).css("background-color", "#FF7979");
        } else if (i == hour) {
            $("#" + i).css("background-color", "#9CDBFF");
        } else {
            $("#" + i).css("background-color", "#A0D4AC");
        }
    }
}
initColor()

let button = $('.btn')
button.on("click", saveToStorage)


function saveToStorage() {
    $(this).removeClass("btn-primary").addClass("btn-success").text("Saved to storage!")

    let storedSchedule = JSON.parse(localStorage.getItem("Schedule"));

    let Schedule = {
        ...storedSchedule,
    };
    console.log(Schedule)
    let timeOfDay = $(this).parents().prev().children().attr("id")
    let tasks = $(this).parents().prev().children("textarea").val()

    Schedule[timeOfDay] = tasks
    localStorage.setItem("Schedule", JSON.stringify(Schedule))
}

//get local storage from schedule
//set each text container to have what was in local storage

for (i = 7; i < 25; i++) {

    let storedSchedule = JSON.parse(localStorage.getItem("Schedule"));

    let Schedule = {
        ...storedSchedule,
    };

    let tasks = $("#" + i)

    tasks.text(Schedule[i])
}