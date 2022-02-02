const ul = document.querySelector('ul');

const changeCurrency = async () => {
  const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json'
  try {
    const response = await fetch(url);
    const objeto = await response.json();
    const data = objeto.usd;
    const realValue = data.brl;
    return realValue;
  } catch (erro) {
    return erro;
  }
}

const fetchCoin = async () => {
  const url = `https://api.coincap.io/v2/assets`;
  ul.innerHTML = '';

  try {
    const realValue = await changeCurrency();
    const response = await fetch(url);
    const objeto = await response.json()
    const data = objeto.data;    
    const coins = data.filter((element, index) => element && index <= 10)
      coins.forEach((element) => {
        const li = document.createElement('li');
        const newValue = (parseFloat(element.priceUsd) * realValue).toFixed(2);
        li.innerText = `${element.name} (${element.symbol}): ${newValue}.`;
        ul.appendChild(li);
        })
  } catch (error) {
    return error;
  }

  /* fetch(url)
    .then((response) => response.json())
    .then((objeto) => objeto.data)
    .then((data) => {
      const coins = data.filter((element, index) => element && index <= 10)
      coins.forEach((element) => {
        const li = document.createElement('li');
        const newValue = parseFloat(element.priceUsd).toFixed(2) * realValue;
        li.innerText = `${element.name} (${element.symbol}): ${newValue}.`;
        ul.appendChild(li);
        })
    })

    .catch((erro) => console.log(erro)) */
}

window.onload = () => fetchCoin();

// Bitcoin (BTC): 46785.06 .