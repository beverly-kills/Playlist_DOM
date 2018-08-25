'use strict';

var playList = [{
    author: "led zeppelin",
    song: "stairway to heaven",
    duration: "2:03"
},
{
    author: "queen",
    song: "bohemian rhapsody",
    duration: "2:30"
},
{
    author: "lynyrd skynyrd",
    song: "free bird",
    duration: "1:56"
},
{
    author: "deep purple",
    song: "smoke on the water",
    duration: "3:03"
},
{
    author: "jimi hendrix",
    song: "all along the watchtower",
    duration: "2:53"
},
{
    author: "AC/DC",
    song: "back in black",
    duration: "2:43"
},
{
    author: "queen",
    song: "we will rock you",
    duration: "2:13"            
},
{
    author: "metallica",
    song: "enter sandman",
    duration: "3:03"            
}
];

var addSong = function (list){

    for(let i = 0; i < list.length; i++){
    // list.forEach(function (element){
    // first I tried to use forEach with list[element].author in the body, but it did not work
        var li = document.createElement('li');
        li.className = 'playlist__item'
        var div = document.createElement('div');
        div.className = 'song';

        var duration = document.createElement('span')
        duration.innerHTML = list[i].duration;
        duration.className = 'song__duration';
        div.appendChild(duration);
        
        var author = document.createElement('span')
        author.innerText = ' ' + list[i].author;
        author.className = 'song__author';
        div.appendChild(author);

        var song = document.createElement('p')
        song.innerHTML = list[i].song;
        song.className = 'song__name';
        div.appendChild(song);


        li.appendChild(div);
        document.querySelector('.playlist__songs').appendChild(li);
    //});
    }
}

addSong(playList);