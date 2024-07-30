// src/data.js
import audio1 from './assets/audio1.mp3';
import audio2 from './assets/audio2.mp3';
import audio3 from './assets/audio3.mp3';
import audio4 from './assets/audio4.mp3';
import audio5 from './assets/audio5.mp3';
import audio6 from './assets/audio6.mp3';
import audio7 from './assets/audio7.mp3';
import audio8 from './assets/audio8.mp3';
import audio9 from './assets/audio9.mp3';


function chillHop() {
  return [
    {
      name: "Welcome To Hell ",
      cover: "https://usercontent.jamendo.com/?type=album&id=568513&width=300&trackid=2176441",
      artist: "Kerry",
      audio: audio1,
      color: ["#333", "#ffff"],
      id: "welcome-to-hell",
      active: true,
    },
    {
      name: "Rock milcry",
      cover: "https://usercontent.jamendo.com/?type=album&id=452261&width=300&trackid=1879171",
      artist: "LED Neon",
      audio: audio2,
      color: ["#333", "#ffff"],
      id: "rock-with-beats",
      active: false,
    },
    {
      name: "Kasima mason",
      cover: "https://usercontent.jamendo.com/?type=album&id=455221&width=300&trackid=1886257&height=300",
      artist: "Jack White",
      audio: audio3,
      color: ["#333", "#ffff"],
      id: "mystic",
      active: false,
    },
    {
      name: "MARONO MAJOR",
      cover: "https://usercontent.jamendo.com/?type=album&id=515169&width=300&trackid=2016794",
      artist: "MISSY MORGAN",
      audio: audio4,
      color: ["#333", "#ffff", "#fff"],
      id: "mostly-vibes",
      active: false,
    },
    {
      name: "BURN ",
      cover: "https://usercontent.jamendo.com/?type=album&id=326129&width=300&trackid=1860716",
      artist: "BESSON & SA",
      audio: audio5,
      color: ["#333", "#ffff", "#fff"],
      id: "BURN",
      active: false,
    },
    {
      name: "Tropic MIKE ",
      cover: "https://usercontent.jamendo.com/?type=album&id=262036&width=300&trackid=1847557",
      artist: "jack white",
      audio: audio6,
      color: ["#333", "#ffff"],
      id: "tropic",
      active: false,
    },
    {
      name: "HANGIN OUT ",
      cover: "https://usercontent.jamendo.com/?type=album&id=448067&width=300&trackid=1870094",
      artist: "jack white",
      audio: audio7,
      color: ["#444", "#222", "#fff"],
      id: "HANGIN-OUT",
      active: false,
    },
    {
      name: "FLOWERS OF SEPTEMBER ",
      cover: "https://usercontent.jamendo.com/?type=album&id=196979&width=300&trackid=1800917",
      artist: "jack white",
      audio: audio8,
      color: ["#333",  "#222", "#fff"],
      id: "PHYLITIC-JOSH",
      active: false,
    },
    {
      name: "PHYSICALITY ",
      cover: "https://usercontent.jamendo.com/?type=album&id=289890&width=300&trackid=1791799",
      artist: "jack white",
      audio: audio9,
      color: ["#000", "#fff"],
      id: "PHYSICALITY",
      active: false,
    }
  ];
}

export default chillHop;
