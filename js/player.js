
class Jukebox {
    constructor(albums) {
        this.albums = [];
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }

    play = function(aIndex) {
            if ( aIndex < this.albums.length)
            {
                this.albums[aIndex].play();
            }
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

// CREATE AN ARRAY OF EMPLOYEES
let selectList = document.getElementById("inputChoose");
let playAlbum  = document.getElementById("playAlbum");
let showAlbum  = document.getElementById("showAlbum");

let favoriteAlbum = document.getElementById("favoriteAlbum");

let albumList = [
    ['Operation Ivy', 'Energy'],
    ['Blink 182', 'Dude Ranch' ],
    ['New Found Glory', 'Sticks and Stones' ]
   
];

var jbox = new Jukebox(); 

var myParent = document.body;

//Create array of options to be added
//Create and append the options

for(let albumIndex in albumList){
    var option = document.createElement("option");
    option.value = albumIndex;
    option.text = albumList[albumIndex][0]+'-'+albumList[albumIndex][1];
    selectList.appendChild(option);
    let newAlbum = new Album(albumList[albumIndex][0],albumList[albumIndex][1]);
    jbox.addAlbum(newAlbum);
    
    
}


playAlbum.onclick = function() {
        jbox.play([selectList.options[selectList.selectedIndex].value])
}

showAlbum.onclick = function () {
    favoriteAlbum.innerHTML = `Your favorite album is: ${jbox.favoriteAlbum()}`;
}