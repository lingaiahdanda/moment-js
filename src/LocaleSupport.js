var localeSupport = 
{
    'parseRegex' : 
    {
        'dddd': '(\\w+)',
        'ddd': '(\\w{3})',
        'A':'(\\w{2})',
        'a': '(\\w{2})',
        'YYYY' : '(\\d{4})',
        'YY' : '(\\d{2})',
        'Y': '(\\d+)',
        'Q': '([1-4])',
        'MMMM': '(\\w+)',
        'MMM' : '(\\w{3})',
        'MM' : '(0[1-9]|[1-2][0-9]|3[0-1])',
        'M' : '([1-9]|[1-2][0-9]|3[0-1])',
        'DDDD' : '(\\d{3})',
        'DDD': '(\\d{1,3})',
        'DD': '(\\d{2})',
        'Do': '(\\d{1,2}[a-z]{2})',
        'D': '(\\d{1,2})',
        'X': '(\\d{10})',
        'x': '(\\d{13})',
        'GGGG': '(\\d{4})',
        'GG': '(\\d{2})',
        'WW': '(\\d{2})',
        'W': '(\\d{1,2})',
        'E': '([1-7])',
        'HH': '(\\d{2})',
        'H': '(\\d+)',
        'hh': '(\\d{2})',
        'h': '(\\d+)',
        'kk': '(\\d{2})',
        'k': '(\\d+)',
        'mm': '(\\d{2})',
        'm': '(\\d{1,2})',
        'SSS': '(\\d{1,3})',
        'ss': '(\\d{2})',
        's': '(\\d+)',
    },
    'en': {
        'localFormats': {
            'LLLL': 'dddd, MMMM D YYYY h:m A',
            'LLL': 'MMMM D,  YYYY h:m A',
            'LL': 'MMMM D, YYYY',
            'L': 'DD/MM/YYYY',
            'llll': 'ddd, MMM D YYYY h:m A',
            'lll': 'MMM D, YYYY h:m A',
            'll': 'MMM D, YYYY',
            'l': 'DD/MM/YYYY',
            'LTS': 'h:m:s A',
            'LT': 'h:m A'
        },
        'monthsShortHand': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        'months': ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'days': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'daysShortHand': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    'hi':{
        'localFormats': {
            'LLLL': 'dddd, DD MMMM YYYY h:m A',
            'LLL': 'DD MMMM YYYY h:m A',
            'LL': 'DD MMMM YYYY',
            'L': 'DD/MM/YYYY',
            'llll': 'ddd, DD MMM YYYY h:m A',
            'lll': 'DD MMM YYYY h:m A',
            'll': 'DD MMM YYYY',
            'l': 'DD/MM/YYYY',
            'LTS': 'h:m:s A',
            'LT': 'h:m A'
        },
        'monthsShortHand': ['जन', 'फ़रव', 'मार्', 'अप्र', 'मई', 'जून', 'जुलाई', 'अग', 'सितम्', 'अकतू', 'नवं', 'दिसम्'],
        'months': ['जनवरी', 'फ़रवरी', 'मार्च ', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अकतूबर', 'नवंबर', 'दिसम्बर'],
        'days': ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरूवार', 'शुक्रवार', 'शनिवार'],
        'daysShortHand': ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरू', 'शुक्र', 'शनि']
    },
    'te':{
        'localFormats': {
            'LLLL': 'dddd, DD MMMM YYYY h:m A',
            'LLL': 'DD MMMM YYYY h:m A',
            'LL': 'DD MMMM YYYY',
            'L': 'DD/MM/YYYY',
            'llll': 'dddd,DD MMM YYYY h:m A',
            'lll': 'DD MMM YYYY h:m A',
            'll': 'DD MMM YYYY',
            'l': 'DD/MM/YYYY',
            'LTS': 'h:m:s A',
            'LT': 'h:m A'
        },
        'monthsShortHand': ['జన', 'ఫిబ్ర', 'మార్', 'ఏప్రి', 'మే', 'జూన్', 'జూలై', 'ఆగ', 'సెప్', 'అక్ట', 'నవ', 'డిస'],
        'months': ['జనవరి', 'ఫిబ్రవరి', 'మార్చి ', 'ఏప్రిల్', 'మే', 'జూన్', 'జూలై', 'ఆగస్టు', 'సెప్టెంబర్', 'అక్టోబర్', 'నవంబర్', 'డిసెంబర్'],
        'days': ['ఆదివారం', 'సోమవారం', 'మంగళవారం', 'బుధవారం', 'గురువారం', 'శుక్రవారం', 'శనివారం'],
        'daysShortHand': ['ఆది', 'సోమ', 'మంగళ', 'బుధ', 'గురు', 'శుక్ర', 'శని']
    }
}
module.exports = localeSupport;