function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function addDaysOfCalendar(dezDaysList){
    for (let i = 0; i < dezDaysList.length; i++) {
        let day = document.createElement('li');
        day.innerText = dezDaysList[i];
        day.className = 'day';
        if (dezDaysList[i] == 24 || dezDaysList[i] == 25 || dezDaysList[i] == 31) {
            day.className = 'holiday';
        }
        if (i == 5 || i == 12 || i == 19 || i == 26) {
            day.className = 'friday';
        }
        document.getElementById('days').appendChild(day);
    }
}
addDaysOfCalendar(dezDaysList);

/* Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */
function createButton(string) {
    let button = document.createElement('button');
    button.className = string;
    button.setAttribute('id', 'btn-holiday');
    document.querySelector('.buttons-container').appendChild(button);
}
createButton('Feriados');