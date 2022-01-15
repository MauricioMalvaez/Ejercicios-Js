// Consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18).

function businessHours(dayNumber, hourNumber) {
  if (hourNumber >= 9 && hourNumber <= 18 && dayNumber > 0 && dayNumber < 6) {
    return true;
  } else {
    return false;
  }
}

// The yearDayNumber will be an int ranging from 0 to 365
// janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.

function getDayNumber(janFirstDayNumber,yearDayNumber){
    var res = yearDayNumber % 7; 
    var final = (janFirstDayNumber+res)%7;
    return final;
}

alert("El dia de la semana en el que cayo fue el : " + getDayNumber(parseInt(prompt("Que dia cayo el 1ro de Enero?(0-6)")),parseInt(prompt("Que dia quieres conocer?(0-365)"))));
 

function isWork(){
    let dayNumber = Number(prompt("Introduce el dia (Del 0 al 6, donde 0 es Domingo):"));
    let yearDayNumber = Number(prompt("Introduce el dia del año (Año=365):"));
    let hour = Number(prompt("Introduce la hora (Formato 24hrs):"));
    console.log(businessHours(getDayNumber(dayNumber,yearDayNumber),hour));
}

isWork();