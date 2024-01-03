const rollBtn = document.querySelector('.rollBtn');

rollBtn.addEventListener("click", (e) => {  
  const numOfDice = document.querySelector('.numOfDice').value;
  const values = [];
  const images = [];
  
  for (let i = 0 ; i < numOfDice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push (`<img src="./public/assets/${value}.png" >`);
  }
  
  const result = document.querySelector('.diceResult');
  result.innerHTML = `Dice Value : ${values.join(', ')}`

  const diceImages = document.querySelector('.diceImages');
  diceImages.innerHTML = images.join('');
});
  
