const imcCalc = (weigth, heigth) => {
  const result = weigth / (heigth ^ 2)
  return result
}

const imcAnswer = (result) => {
  const round = result.toFixed(2);
  if (result < 18) {
    console.log(`${round}: Under weigth`)
  } else if (result >= 18 && result < 25) {
    console.log(`${round}: Normal weigth`)
  } else if (result >= 25 && result < 30) {
    console.log(`${round}: Overweigth`)
  } else if (result >= 30 && result < 35) {
    console.log(`${round}: Grade I obesity`)
  } else if (result >= 35 && result < 40) {
    console.log(`${round}: Grade II obesity`)
  } else {
    console.log(`${round}: Grade III obesity`)
  }
}

module.exports = {
  imcCalc, imcAnswer
}
