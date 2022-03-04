let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() 
{
    let mySrc = myImage.getAttribute('src');
    
    if(mySrc === 'images/starringfargirl.gif') 
    {
      myImage.setAttribute('src', 'images/2.gif');
    } 
    else 
    {
      myImage.setAttribute('src', 'images/starringfargirl.gif');
    }
}
