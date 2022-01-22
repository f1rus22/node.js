const EventEmitter= require('events')

const timerTypes=[
    {
        type: 'hour',
        payload: Number(process.argv[2])
    },
    {
        type: 'day',
        payload: Number(process.argv[3])
    },
    {
        type: 'month',
        payload: Number(process.argv[4])
    },
    {
        type: 'year',
        payload: Number(process.argv[5])
    }
]


class Timer {
    constructor(params){
        this.typeOfTime=params.type;
        };
    timer(remaningTime) {
        let self = this;
        this.remaningTime = remaningTime;
        setTimeout(function() {
                console.log(remaningTime);
            if (remaningTime > 0) {
                self.timer(remaningTime - 1); 
            } else if(remaningTime == 0){
                console.log(remaningTime + " timer end")
            }
        }, 1000);
    };
}

let hourTimer = new Timer('hour');

let dayTimer = new Timer('day');

let monthTimer = new Timer('month');

let yearTimer = new Timer('year');



class Handler {
    static hour(payload){
        hourTimer.timer(payload);
    }
    static day(payload){
        dayTimer.timer(payload);
    }
    static month(payload){
        monthTimer.timer(payload);
    }
    static year(payload){
        yearTimer.timer(payload);
    }
}

class MyEmmtter extends EventEmitter{};

const emitterObject = new MyEmmtter();

emitterObject.on('hour', Handler.hour);

emitterObject.on('day', Handler.day);

emitterObject.on('month', Handler.month);

emitterObject.on('year', Handler.year);

const run  = async () => {
    emitterObject.emit(timerTypes.type, timerTypes.payload);
    
}

run();