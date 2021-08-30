let colorBox = document.getElementById('color-box');
let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let message = document.getElementById('message');


const hex = (color) => {
    let number = parseInt(color.value)
    let hexVal = number.toString(16);
return hexVal.length < 2 ? `0${hexVal}` : hexVal;
    
}

const colorChange = ()=>{
  if(red.value === '' || green.value === '' || blue.value === ''){
    message.textContent = 'Please enter a value for each color';
  }else if (red.value > 255 || green.value > 255 || blue.value > 255){
    message.textContent = 'Please enter a value less than or equal to 255';
  }else if (red.value < 0 || green.value < 0 || blue.value < 0){
    message.textContent = 'Negative values not allowed';
  }else {
  let bgColor = `#${hex(red)}${hex(green)}${hex(blue)}`
  colorBox.style.color = bgColor
  message.textContent = `The hex value is: ${bgColor}`
  message.style.color= '#000';
  }
    
}
