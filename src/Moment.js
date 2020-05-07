const LocaleSupport = require('./LocaleSupport');
const Formatter = require('./Formatter');
const Comparator = require('./Comparator');
const Parser = require('./Parser');
const Duration = require('./Duration');

class Moment
{
    constructor(date, format, lang) 
    {
        this.date = date;
        this.format = format;
        this.lang = lang || 'en';

        this.parsingTime();
    }

    parsingTime()
    {
        this.Parser = new Parser(this.date, this.format, this.lang,);
        this.momentContainer = this.Parser.parseMoment();
    }


    Format(givenFormat)
    {
        return (new Formatter(this.momentContainer, givenFormat, this.lang)).formatDateTime();
    }


    fromNow()
    {
        let curr_moment = new Parser(new Date(), null, this.lang)
        let comparator = new Comparator(this.momentContainer.moment, curr_moment.parseMoment().moment);
        let res = comparator.compareTwoDates();
        if(res[0]==0){
            return "equal"
        }else  if(res[0]==1){
            return res[1] + " " + res[2] + (res[1]>1 ? "s" : "") + " ago";
        }else{
            return "in " + res[1] + " " + res[2] +(res[1]>1 ? "s" : "");
        }
    }

    from(b)
    {
        let comparator = new Comparator(this.momentContainer.moment, b.momentContainer.moment);
        let res = comparator.compareTwoDates();
        if(res[0]==0){
            return "Equal"
        }else  if(res[0]==1){
            return res[1] + " " + res[2] + (res[1]>1 ? "s" : "") + " ago";
        }else{
            return "in " + res[1] + " " + res[2] +(res[1]>1 ? "s" : "");
        }
    }

    to(b)
    {
        let comparator = new Comparator(this.momentContainer.moment, b.momentContainer.moment);
        let res = comparator.compareTwoDates();
        if(res[0]==0){
            return "equal"
        }else  if(res[0]==1)
        {
            return res[1] + " " + res[2] + (res[1]>1 ? "s" : "") + " ago";
        }else{
            return "in " + res[1] + " " + res[2] +(res[1]>1 ? "s" : "");
        }
    }

    


    diff(reft, units)
    {
        var referenceTime = reft;
        var comparator = new Comparator(this.momentContainer.moment, referenceTime.momentContainer.moment);
        return [Math.abs(comparator.DiffInFormats(units)), units]
    }

    valueOf(){
        return this.momentContainer.moment['x'];
    }

    unix(){
        return this.momentContainer.moment['X']
    }

    daysInMonth()
    {
        let validDatesOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if(this.momentContainer.moment['M'] == 2)
        {
            let year = this.momentContainer.moment['Y'];
            if((year%4==0 && year%100!=0) || year%400==0){
                return 29
            }
        }
        return validDatesOfMonth[this.momentContainer.moment['M']-1]
    }

    asJavaScriptDate()
    {
        let res = this.momentContainer.moment;
        return new Date(res['Y'], res['M']-1, res['D'], res['H'], res['m'], res['s'], res['SSS'])
    }

    toArray(){
        let arr = this.momentContainer.moment;
        return [arr['Y'], arr['M']-1, arr['D'], arr['H'], arr['m'], arr['s'], arr['SSS']];
    }

    toJSON(){
        return this.momentContainer.moment;
    }

    toISOString(){
        return this.Format();
    }

    toObject(){
        return this.momentContainer.moment;
    }

    asString(){
        return this.Format("ddd MMM D YYYY HH:mm:ss ZZ");
    }

    isBefore(reft, units)
    {
        let referenceTime = reft;        
        let comparator = new Comparator(this.momentContainer.moment, referenceTime.momentContainer.moment);
        if(comparator.DiffInFormats(units) > 0)
        {
            return true;
        }
        return false;
    }

    isSameOrBefore(reft, units)
    {
        let referenceTime = reft;
        let comparator = new Comparator(this.momentContainer.moment, referenceTime.momentContainer.moment);
        if(comparator.DiffInFormats(units) >= 0){
            return true;
        }
        return false;
    }

    isAfter(reft, units)
    {
        let referenceTime = reft;
        let comparator = new Comparator(this.momentContainer.moment, referenceTime.momentContainer.moment);
        if(comparator.DiffInFormats(units) < 0){
            return true;
        }
        return false;
    }

    isSameOrAfter(reft, units){
        let referenceTime = reft;
        let comparator = new Comparator(this.momentContainer.moment, referenceTime.momentContainer.moment);
        if(comparator.DiffInFormats(units) <= 0){
            return true;
        }
        return false;
    }

    isBetween(reft1, reft2, units)
    {
        let referenceTime1 = reft1;
        let referenceTime2 = reft2;
        let Comparator1 = new Comparator(this.momentContainer.moment, referenceTime1.momentContainer.moment);
        let Comparator2 = new Comparator(this.momentContainer.moment, referenceTime2.momentContainer.moment);
        if((Comparator1.DiffInFormats(units) < 0 && Comparator2.DiffInFormats(units)>0 ) || Comparator1.DiffInFormats(units)>0 && Comparator2.DiffInFormats(units)<0){
            return true;
        }
        return false;
    }


    isLeapYear()
    {
        let year = this.momentContainer.moment['Y'];
        if((year%4==0 && yeare%100!=0) || year%400==0){
            return true;
        }
        return false;
    }

    

}

module.exports = Moment;