var messageArray = ["My Academic and Professional Background"]
var textPosition = 0;
var speed = 100;

typewriter = () => {
    document.querySelector('#profess-title').innerHTML = 
    messageArray[0].substring(0, textPosition);
    if(textPosition++ != messageArray[0].length)
        setTimeout(typewriter, speed);   
}

window.addEventListener("load", function(){
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        console.log('no animation');
      } else {
        typewriter();
      }
});