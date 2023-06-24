let audio = document.getElementById("music");
audio.volume = 0.25;

 function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function widget_create(link){
    return `https://open.spotify.com/embed/track/${link}?utm_source=generator&amp;theme=0`
}
let random = getRandomInt(5)
let widget;
let myzyaka;
switch (random){
      case 0:
          myzyaka = "1.mp3"
          widget = widget_create("3YmZ8V92nqVKx6u1lohFCC")
        break;

        case 1:
            myzyaka = "2.mp3"
            widget = widget_create("0HS6Lmeq0pvAhFoZ9Kazyu")
        break;

        case 2:
            myzyaka = "3.mp3"
            widget = widget_create("5ASxwnS9Y1EwxBsA9qmOV8")
        break;

        case 3:
            myzyaka = "4.mp3"
            widget = widget_create("1hGRe4d3LJCg1VszAU8Cy1")
        break;

        case 4:
            myzyaka = "5.mp3"
            widget = widget_create("16LldYYJefKzxIM6mc7ryR")
        break;
        }
        document.getElementById('music').src = myzyaka;
        document.getElementById('spopafi').src = widget;

