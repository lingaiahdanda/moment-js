const Container = require('./Container');

class Comparator 
{
    constructor(first, second) 
    {
        this.first = first;
        this.second = second;

        let firstDiff = (this.first['ZZ'].substring(0,1)=='-' ? -1 : 1 )*(parseInt(this.first['ZZ'].substring(1,2)*100 + parseInt(this.first['ZZ'].substring(2, this.first['ZZ'].length))))* 60 * 1000
        let secondDiff = (this.first['ZZ'].substring(0,1)=='-' ? -1 : 1 )*(parseInt(this.second['ZZ'].substring(1,2)*100 + parseInt(this.second['ZZ'].substring(2, this.second['ZZ'].length))))* 60 * 1000

    
        this.first_gmt  = this.first['x'] - firstDiff;
        this.second_gmt = this.second['x'] - secondDiff;

    }
    compareTwoDates()
    {
        let diffInMs = this.second['x'] - this.first['x'];
        if(diffInMs==0)
        {
            return [0]
        }

        let diff = 0;
        let sign = diffInMs/Math.abs(diffInMs);
        let units = null;

        if(Math.abs(diffInMs)<1000)
        {
            diff = Math.abs(diffInMs);
            units = "milliSecond";
        }

        else if(Math.abs(diffInMs)<1000*60)
        {
            diff = Math.floor(Math.abs(diffInMs)/1000);
            units = "second";
        }

        else if(Math.abs(diffInMs)<1000*60*60)
        {
            diff = Math.floor(Math.abs(diffInMs)/(1000*60));
            units = "minute";
        }

        else if(Math.abs(diffInMs)<1000*60*60*24)
        {
            diff = Math.floor(Math.abs(diffInMs)/(1000*60*60));
            units = 'hour';
        }

        else if(Math.abs(diffInMs)<1000*60*60*24*7)
        {
            diff = Math.floor(Math.abs(diffInMs)/(1000*60*60*24));
            units = 'day'
        }

        else if(Math.abs(diffInMs)<1000*60*60*24*31){
            diff = Math.floor(Math.abs(diffInMs)/(1000*60*60*24*7));
            units = 'week';
        }
        else if(Math.abs(this.first['YYYY'] - this.second['YYYY']) > 1)
        {
            diff = Math.abs(this.first['YYYY'] - this.second['YYYY'])
            units = 'year'
        }
        else if(Math.abs(this.first['YYYY'] - this.second['YYYY']) == 1)
        {
            if(this.first['YYYY']>this.second['YYYY']){
                diff = 12-this.second['M'] + this.first['M'];
                units = 'month';
            }else{
                diff = 12-this.first['M'] + this.second['M'];
                units = 'month';
            }
            if(diff>11){
                diff = 1;
                units = "year";
            }
        }
        else{
            diff = Math.abs(this.first['M'] - this.second['M']);
            units = 'month'
        }
        
        return [sign, diff, units]

    }

    DiffInMilliSeconds()
    {
        return  Math.floor(this.second_gmt) - Math.floor(this.first_gmt);
    }

    DiffInSeconds()
    {
        return  Math.floor(this.second_gmt/1000) - Math.floor(this.first_gmt/1000);
    }

    DiffInMinutes()
    {
        return  Math.floor(this.second_gmt/(1000*60)) - Math.floor(this.first_gmt/(1000*60));
    }


    DiffInHours()
    {
        return  Math.floor(this.second_gmt/(1000*60*60)) - Math.floor(this.first_gmt/(1000*60*60));
    }

    DiffInDays()
    {
        return  Math.floor(this.second_gmt/(1000*60*60*24)) - Math.floor(this.first_gmt/(1000*60*60*24));
    }

    DiffInWeeks()
    {
        return  Math.floor(this.second_gmt/(1000*60*60*24*7)) - Math.floor(this.first_gmt/(1000*60*60*24*7));
    }

    DiffInFormats(units)
    {
        if(!units){
            return Math.floor(this.second_gmt/(1000*60*60*24*7)) - Math.floor(this.first_gmt/(1000*60*60*24*7));
        }
        let unitstoValue = {
            "milliSeconds" : 1,
            "seconds" :1000,
            "minutes": 1000*60,
            "hours": 1000*60*60,
            "days": 1000*60*60*24,
            "weeks": 1000*60*60*24*7,
        }
        return Math.floor(this.second_gmt/unitstoValue[units]) - Math.floor(this.first_gmt/unitstoValue[units]);
    }
}

module.exports = Comparator;