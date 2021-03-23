// Video Gallery
var video = document.querySelectorAll('video')
video.forEach(play => play.addEventListener('click', () =>{
        if (play.paused){
            play.setAttribute('controls', true);
            play.play();
        } else {
            play.pause();
        }
    }));

  

// Search Bar
function searchFunction() {
    var input, filter, container, video, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    container = document.getElementsByClassName('video-container');
    video = document.getElementsByClassName('video-wrapper');

    for(i=0 ; i< video.length; i++){
        a = video[i].getElementsByClassName('wrapper-credit')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            video[i].style.display = "";
        } else {
            video[i].style.display = 'none';
        }
    }
}

// Copy button email
let copyBtn = document.getElementById('buttonEmail');
copyBtn.addEventListener('click', copyText);

var tooltip = document.getElementById("myTooltip");

function copyText(){
  let div = document.getElementById('email');
  let text = div.innerText;
  let textArea  = document.createElement('textarea');
  textArea.width  = "1px"; 
  textArea.height = "1px";
  textArea.background =  "transparents" ;
  textArea.value = text;
  document.body.append(textArea);
  textArea.select();
  document.execCommand('copy');  
  document.body.removeChild(textArea);
  tooltip.innerHTML = "Copied";
}

function outFunc() {
    tooltip.innerHTML = "For hiring";
}


// Instagram link
function Open() {
    window.open("https://www.instagram.com/mlkbrutal", "_blank");
}