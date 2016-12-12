window.onload = function() {
   setInterval("loadDate()", 1000); //Actualisation de l'heure
};

function loadDate(){
    var objToday = new Date(),
        weekday = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'),
        months = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juiller', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'),
        
        // Hour
        curHour = objToday.getHours(),
        curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),

        // Date
        dayOfWeek = weekday[objToday.getDay()],
        dayOfMonth = objToday.getDate() < 10 ? '0' + objToday.getDate() : objToday.getDate(),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear(),
        
        date = dayOfWeek + " " + dayOfMonth + " " + curMonth + " " + curYear,
        time = curHour + ":" + curMinute;

    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}