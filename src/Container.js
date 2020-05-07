 const LocaleSupport = require('./LocaleSupport');

 class Container{
    constructor(timeStamp, offset, lang)
    {
        let time = new Date(timeStamp);
        let year = time.getFullYear();
        let month = time.getMonth();    
        let date = time.getDate();
        let day = time.getDay();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        let milliSec = time.getMilliseconds();

        this.days = LocaleSupport[lang]['days'];
        this.daysShorthand = LocaleSupport[lang]['daysShortHand'];
        this.months = LocaleSupport[lang]['months'];
        this.monthShorthand =  LocaleSupport[lang]['monthsShortHand'];
        

        this.moment = {};

        this.moment['x'] = timeStamp;
        this.moment['X'] = timeStamp/1000;

        offset = offset ? offset.toString() : '+000'
        this.moment['ZZ'] = offset;
        this.moment['Z'] = offset.substring(0, 2) + ':' + offset.substring(2, offset.length);

        let msLength = milliSec.toString().length;
        this.moment['SSS'] = '00'.substring(0, 3-msLength) + milliSec.toString();
        this.moment['SS'] = '0'.substring(0, 2-(milliSec/10).toString().length) + (milliSec/10).toString();
        this.moment['S'] = (milliSec/100).toString();

        this.moment['ss'] = '0'.substring(0, 2-sec.toString().length) + sec.toString();
        this.moment['s'] = sec.toString();

        this.moment['mm'] = '0'.substring(0, 2-min.toString().length) + min.toString();
        this.moment['m'] = min.toString();

        let kHour = hour==0 ? 24 : hour;
        this.moment['kk'] = '0'.substring(0, 2-kHour.toString().length) + kHour.toString();
        this.moment['k'] = kHour.toString();
        let usualHour = kHour >= 12 ? kHour-12 : kHour;
        this.moment['hh'] = '0'.substring(0, 2-(usualHour).toString().length) + usualHour.toString();
        this.moment['h'] = usualHour.toString();
        this.moment['HH'] = '0'.substring(0, 2-hour.toString().length) + hour.toString();
        this.moment['H'] = hour.toString();

        this.moment['a'] = hour>11 ? 'pm' : 'am';
        this.moment['A'] = hour>11 ? 'PM' : 'AM';

        let weekYear = year;
        if(month==0 & date<4 & !(day<date+3)){
            weekYear--;
        }
        else if(month==11 & date>27 & day<date-27){
            weekYear++;
        }
        this.moment['GGGG'] = '0000'.substring(0, 4-weekYear.toString().length) + weekYear.toString();
        this.moment['GG'] = (this.moment['GGGG']).substring(weekYear.toString().length-2, weekYear.toString().length);

        this.moment['gggg'] = '0000'.substring(0, 4-year.toString().length) + year.toString();
        this.moment['gg'] = (this.moment['gggg']).substring(year.toString().length-2, year.toString().length);

        this.moment['YYYY'] = year.toString().length < 5 ?'0000'.substring(0, 4-year.toString().length) + year.toString() : year.toString();
        this.moment['YY'] = year.toString().substring(year.toString().length-2, year.toString().length);
        this.moment['Y'] = year.toString();

        let weekOfYearIso;
        if(weekYear>year){
            weekOfYearIso = 1;
        }
        else {
            let yearStart = new Date(weekYear, 0, 1, 0, 0, 0);
            let startDay = yearStart.getDay() == 0 ? 7 : yearStart.getDay();

            let daysInFirstWeek = 7 - (startDay - 1);
            let daysRemaining = Container.change((timeStamp - yearStart.getTime()) / 1000 - Container.change(daysInFirstWeek, 'days', 'seconds'), 'seconds', 'days');
            weekOfYearIso = startDay <= 4 ? 1 : 0;
            weekOfYearIso += Container.change(daysRemaining, 'days', 'weeks');
        }
        this.moment['WW'] = '0'.substring(0, 2-weekOfYearIso.toString().length) + weekOfYearIso.toString();
        this.moment['Wo'] = weekOfYearIso.toString() + Container.getPrefix(weekOfYearIso);
        this.moment['W'] = weekOfYearIso.toString();

        let weekOfYear = 1;
        let yearStart = new Date(year, 0, 1, 0, 0, 0);
        let startDay = yearStart.getDay();

        let daysInFirstWeek = 7 - (startDay);
        let daysRemaining = Container.change((timeStamp - yearStart.getTime()) / 1000 - Container.change(daysInFirstWeek, 'days', 'seconds'), 'seconds', 'days');
        weekOfYear += Container.change(daysRemaining, 'days', 'weeks');

        this.moment['ww'] = '0'.substring(0, 2-weekOfYear.toString().length) + weekOfYear.toString();
        this.moment['wo'] = weekOfYear.toString() + Container.getPrefix(weekOfYear);
        this.moment['w'] = weekOfYear.toString();

        this.moment['E'] = day+1;

        this.moment['e'] = day;

        this.moment['dddd'] = this.days[day];
        this.moment['ddd'] = this.daysShorthand[day];
        this.moment['dd'] = this.daysShorthand[day].substring(0,2);
        this.moment['do'] = day.toString() + Container.getPrefix(day);
        this.moment['d'] = day;

        yearStart = new Date(year, 0, 1, 0, 0, 0);
        let dayOfYear = Container.change((timeStamp-yearStart.getTime())/1000, 'seconds', 'days', true) + 1;
        this.moment['DDDD'] = '00'.substring(0, 3-dayOfYear.toString().length) + dayOfYear.toString();
        this.moment['DDDo'] = dayOfYear.toString() + Container.getPrefix(dayOfYear);
        this.moment['DDD'] = dayOfYear;

        let monthStart = new Date(year, month, 1, 0, 0, 0);
        let dayOfMonth = Container.change((timeStamp-monthStart.getTime())/1000, 'seconds', 'days', true)+1;
        this.moment['DD'] = '0'.substring(0, 2-dayOfMonth.toString().length) + dayOfMonth.toString();
        this.moment['Do'] = dayOfMonth.toString() + Container.getPrefix(dayOfMonth);
        this.moment['D'] = dayOfMonth;

        let quater = 4;
        if(month<4)
        {
            quater=1
        }
        else if(month<7)
        {
            quater=2
        }
        else if(month<10)
        {
            quater=3
        }
        this.moment['Qo'] = quater.toString() + Container.getPrefix(quater);
        this.moment['Q'] = quater;

        let monthToShow = month+1;
        this.moment['MMMM'] = this.months[month];
        this.moment['MMM'] = this.monthShorthand[month];
        this.moment['MM'] = '0'.substring(0, 2- monthToShow.toString().length) + monthToShow.toString();
        this.moment['Mo'] = monthToShow.toString() + Container.getPrefix(monthToShow);
        this.moment['M'] = monthToShow;
    }

    static change(val, type1, type2, terminate){

        let divideFactors = {
            'seconds':1000,
            'minutes': 1000* 60,
            'hours': 1000*60*60,
            'days': 1000*60*60*24,
            'weeks': 1000*60*60*24*7
        }

        if(terminate){
            return Math.floor((val*divideFactors[type1]) / divideFactors[type2]);
        }

        return Math.ceil((val*divideFactors[type1]) / divideFactors[type2]);
    }

    static getPrefix(x)
    {
        let oPrefix = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th',];

        if(x>10 && x<20){
            return "th";
        }

        return oPrefix[x%10]
    }

}

module.exports = Container;