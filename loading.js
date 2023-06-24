let audio = document.getElementById("music");
// audio.volume = 0.25;
function music(name, author, path){
    this.name = name; // Название музяки
    this.author = author; // Тот кто умудрился такое сочинить
    this.path = path; // Путь к файлу (просто название вставь и всё)
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function raibow(){
    let r = 244, g = 41, b = 41;
    
    while (g == 244){
        r--;
        g++
        console.log(r,g,b)
    }
}
// , _n = new music('', '')
const musicList = [
    new music('Better Days', 'LAKEY INSPIRED', 'better_days.mp3')
    ,new music('Hyper-ballad', 'Björk', 'hyperballad.mp3')
    ,new music('Loveyou', 'j^p^n', 'loveyou.mp3')
    ,new music('gandalf pack', 'xac', 'gandalf_pack.mp3')
    ,new music('Mindfields', 'The Prodigy', 'mindfields.mp3')
    ,new music('Faint', 'Linkin Park', 'faint.mp3')
    ,new music('Chuuo Free Way', 'The Andy Ezrin Trio', 'piano.mp3')
]
    
const randmusic = musicList[getRandomInt(musicList.length)];



document.getElementById('music').src = './media/' + randmusic.path;
document.getElementById('now-plain').innerHTML = `${randmusic.name} - ${randmusic.author}`;


