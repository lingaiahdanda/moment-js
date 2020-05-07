const LocaleSupport = require('./LocaleSupport');

class Formatter
{
    constructor(container, Format, lang) 
    {
        this.container = container;
        this.format = Format ? Format : "YYYY-MM-DD HH:mm:ss.SSS Z";
        this.lang = lang;
        if(LocaleSupport[this.lang]['localFormats'].hasOwnProperty(this.format))
        {
            this.format = LocaleSupport[this.lang]['localFormats'][this.format];
        }
    }

    formatDateTime()
    {
        var data = {};
        var container = (this.container).moment;
        var format = this.format;
        Object.keys(container).forEach(function (key)
        {
            while(format.includes(key)){
                let ind = format.indexOf(key);
                format = format.replace(new RegExp(key), '````````'.substring(0, key.length));
                data[ind] = {'len': key.length, 'val': container[key].toString()};
            }
        })

        var index = 0;
        var result = "";
        Object.keys(data).forEach(function (pos) {
            let len = data[pos]['len'];
            result += format.substring(index, parseInt(pos)) + data[pos]['val'];
            index = parseInt(pos) + len;
        })
        result += format.substring(index, format.length);

        return result;
    }
}

module.exports = Formatter;