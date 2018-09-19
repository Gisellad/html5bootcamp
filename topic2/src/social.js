import { EventEmitter } from "event.js";
import { Movie } from "movie.js";
import { Actor } from "actor.js";
import { Logger } from "logger.js";

let social = {
  share:function (friendName) {
    console.log("${friendName} shared ${this.title}");
  },
  like:function (friendName) {
    console.log("${friendName} liked ${this.title}");
  },
}

const Chihiro = new Movie("Sen to chihiro no kamikakushi", "2001" , "2 hours and 5 minutes");
const myneighbor = new Movie("My neighbor totoro", "1988", "1 hours and 40 minutes");
const MononokeHime = new Movie("Mononoke Hime", "1997", "2 hours and 15 Minutes")
let logg = new Logger();
myneighbor.on("play", logg.log);
myneighbor.play();
let extend = Object.assign(MononokeHime, social);
extend.like('Mononoke ');
let extended = Object.assign(Chihiro, social);
extended.share('Travel with Chihiro ');
