class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    };
    emit(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => {
                callback(eventName);
            });
        } else {
            console.log(`The event ${eventName} doesn't exist`);
        }
    };
    off(eventName, callback) {
        let callbacks = this.events[eventName];
        let index = callbacks.indexOf(callback);
        callbacks.splice(index, 1);
    };
}

class Movie extends EventEmitter {
    constructor(title,year,duration){
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this._cast = [];
    }
    play(){
        this.emit('play');
    };
    pause(){
        this.emit('pause');
    };
    resume(){
        this.emit('resume');
    };
    addCast(cast) {
        if (cast instanceof Actor) {
            this._cast.push(cast);
        }
        else if (Array.isArray(cast)) {
            for (let i = 0; i < cast.length; i++) {
                if (cast[i] instanceof Actor) {
                    this._cast.push(cast[i]);
                }
                else {
                    console.log(`${cast[i]} isn't an Actor`);
                }
            }
        }
        else {
            console.log(`${cast} certanly isn't an actor, again`);
        }
    }
}
class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Logger{
    constructor(){};
    log(info){
        console.log(`The ${info} event has been emitted.`);
    }
}
let social = {
    share: function (friendName) {
        console.log(`${friendName} shared ${this.title}`);
    },
    like: function (friendName) {
        console.log(`${friendName} liked ${this.title}`);
    },
}

const Chihiro = new Movie("Sen to chihiro no kamikakushi", "2001" , "2 hours and 5 minutes");
const myneighbor = new Movie("My neighbor totoro", "1988", "1 hours and 40 minutes");
const MononokeHime = new Movie("Mononoke Hime", "1997", "2 hours and 15 Minutes")
let logg = new Logger();
myneighbor.on("play", logg.log);
myneighbor.play();
let extend = Object.assign(MononokeHime, social);
extend.like('Mononoke');
let extended = Object.assign(Chihiro, social);
extended.share('Travel with Chihiro ');
