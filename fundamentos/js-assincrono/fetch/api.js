const ul = document.querySelector('ul');
/* const fetch = require('node-fetch');

const changeCurrency = async () => {
  const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json'
  try {
    const response = await fetch(url);
    const data = await response.json();
    const realValue = data.brl.toFixed(2);
    return realValue;
  } catch (erro) {
    return erro;
  }
}

console.log(changeCurrency()) */

const fetchCoin = () =>{
  const url = `https://api.coincap.io/v2/assets`;
  ul.innerHTML = '';

  fetch(url)
    .then((response) => response.json())
    .then((objeto) => objeto.data)
    .then((data) => {
      const coins = data.filter((element, index) => element && index <= 10)
      coins.forEach((element) => {
        const li = document.createElement('li');
        li.innerText = `${element.name} (${element.symbol}): ${parseFloat(element.priceUsd).toFixed(2)}.`;
        ul.appendChild(li);
        })
    })

    .catch((erro) => console.log(erro))
}

window.onload = () => fetchCoin();

// Bitcoin (BTC): 46785.06 .