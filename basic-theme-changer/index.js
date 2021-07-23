// access the body element node in html and store it 
let body = document.body.style
// function that has default,  another function for dark theme

const defaultTheme = ()=> {
// change the bgColor and font color values of the body element 
body.backgroundColor = "#fff"
body.color = "#000"
}
const darkTheme = () => {
    body.backgroundColor = "#000"
    body.color = "#fff"
}
// call the function .... event listener: onclick... call it in html
