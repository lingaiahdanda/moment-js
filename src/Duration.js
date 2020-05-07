const Container = require('./Container');

class Duration
{
    constructor(time, units)
    {
        this.time = time;
        this.units = units;
        this.timeParser();
    }

    getTimeStamp(val, type1, type2,)
    {

        var types = {
            'seconds':1000,
            'minutes': 1000* 60,
            'hours': 1000*60*60,
            'days': 1000*60*60*24,
            'weeks': 1000*60*60*24*7
        }
        return (val*types[type1]) / types[type2];
    }

    timeParser()
    {
        this.timeStamp = 0;
        if(this.time.constructor === ([]).constructor){
            this.timeStamp += this.getTimeStamp(this.time[0], this.time[1], 'seconds') * 1000;
        }
        else{
            this.timeStamp += this.getTimeStamp(this.time, this.units, 'seconds') * 1000;
        }
    }



    asMilliseconds(){
        return this.timeStamp;
    }

    asMinutes(){
        return this.getTimeStamp(Math.ceil(this.timeStamp/1000), 'seconds', 'minutes');
    }

    asSeconds(){
        return Math.ceil(this.timeStamp/1000);
    }

    asHours(){
        return this.getTimeStamp(Math.ceil(this.timeStamp/1000), 'seconds', 'hours')
    }

    asDays(){
        return this.getTimeStamp(Math.ceil(this.timeStamp/1000), 'seconds', 'days')
    }

    asWeeks(){
        return this.getTimeStamp(Math.ceil(this.timeStamp/1000), 'seconds', 'weeks')
    }

    as(units)
    {
        if(units=="milliseconds"){
            return this.timeStamp;
        }
        return this.getTimeStamp(Math.ceil(this.timeStamp/1000), 'seconds', units);
    }

    add(time, units)
    {
        if(time.constructor === ([]).constructor){
            this.timeStamp += this.getTimeStamp(time[0], time[1], 'seconds') * 1000;
        }
        else{
            this.timeStamp += this.getTimeStamp(time, units, 'seconds') * 1000;
        }
    }

    subtract(time, units)
    {
        if(time.constructor === ([]).constructor){
            this.timeStamp -= this.getTimeStamp(time[0], time[1], 'seconds') * 1000;
        }
        else{
            this.timeStamp -= this.getTimeStamp(time, units, 'seconds') * 1000;
        }
    }
}

module.exports = Duration;