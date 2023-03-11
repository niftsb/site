let audio = document.getElementById("music");
audio.volume = 0.25;

 function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let random = getRandomInt(5)
let widget;
let myzyaka;
switch (random){
      case 0:
          myzyaka = "1.mp3"
          widget = "https://open.spotify.com/embed/track/3YmZ8V92nqVKx6u1lohFCC?utm_source=generator&amp;theme=0"
        break;

        case 1:
            myzyaka = "2.mp3"
            widget = "https://open.spotify.com/embed/track/0HS6Lmeq0pvAhFoZ9Kazyu?utm_source=generator&amp;theme=0"
        break;

        case 2:
            myzyaka = "3.mp3"
            widget = "https://open.spotify.com/embed/track/5ASxwnS9Y1EwxBsA9qmOV8?utm_source=generator&amp;theme=0"
        break;

        case 3:
            myzyaka = "4.mp3"
            widget = "https://open.spotify.com/embed/track/1hGRe4d3LJCg1VszAU8Cy1?utm_source=generator&amp;theme=0"
        break;

        case 4:
            myzyaka = "5.mp3"
            widget = "https://open.spotify.com/embed/track/16LldYYJefKzxIM6mc7ryR?utm_source=generator&amp;theme=0"
        break;
        }
        document.getElementById('music').src = myzyaka;
        document.getElementById('spopafi').src = widget;

