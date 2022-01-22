const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const gradesAvarege = grades.map(grade => {
    const totalGrade = grade.reduce(((result, current) => result + current), 0);
    return totalGrade / 5;
  })
  return students.map((student, index) => {
    return {name: student, average: gradesAvarege[index]}})
}
