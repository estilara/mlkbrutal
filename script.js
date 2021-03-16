// Video Gallery
var video = document.querySelectorAll('video')
    video.forEach(play => play.addEventListener('click', () =>{
        play.classList.toggle('active');
        if (play.paused){
            play.play();
        }else{
            play.pause();
            play.currentTime = 0;
        }
    }));

// Search Bar
function searchFunction() {
    var input, filter, container, video, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    container = document.getElementsByClassName('video-container');
    video = document.getElementsByClassName('video');

    for(i=0 ; i< video.length; i++){
        a = video[i].getElementsByClassName('wrapper-credit')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            video[i].style.display = "";
        }

        else{
            video[i].style.display = 'none';
        }
    }
}