// /**
//  * @param {string} s
//  * @return {number}
//  */
const romanArray = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const intArray = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
const romanToIntDict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

var romanToInt = function (s) {
    let num = 0;
    let numArray = [];
    let s_split = [];
    while (s.length > 0) {
        // console.log(s);
        let firstTwoLetters = s.substr(0, 2);
        if (romanArray.includes(firstTwoLetters)) {
            s_split.push(firstTwoLetters);
            s = s.substr(2);
        } else {
            s_split.push(s[0]);
            s = s.substr(1);
        }
    }

    // console.log(s_split);

    s_split.map(item => {
        let index = romanArray.indexOf(item);
        numArray.push(intArray[index]);
        // console.log(item, numArray);
    });
    numArray.forEach(item => { num += item });
    console.log('Roman to int 1st attempt:');
    return num;
};

var romanToInt2 = (s) => {

    let num = 0;
    let intCurrent = 0;
    let intNext = 0;

    for (let i = 0; i < s.length; i++) {
        intCurrent = romanToIntDict[s[i]];
        intNext = romanToIntDict[s[i + 1]];
        console.log('current:', intCurrent, 'next:', intNext);
        if (i == s.length - 1) {
            num += intCurrent;
            break;
        }
        if (intCurrent >= intNext) {
            num += intCurrent;
        } else {
            i++;
            num += intNext - intCurrent;
        }
    }

    console.log('Roman to int 2nd attempt:', num);
    return num;
}

var romanToInt3 = (s) => {
    let num = 0;
    let intCurrent = 0;
    let intNext = 0;

    for (let i = 0; i < s.length; i++) {
        intCurrent = romanToIntDict[s[i]];
        intNext = romanToIntDict[s[i + 1]];
        console.log('current:', intCurrent, 'next:', intNext);
        if (intCurrent < intNext) {
            num += intNext - intCurrent;
            i++;
        } else {
            num += intCurrent;
        }
    }

    console.log('Roman to int 3rd attempt:', num);
    return num;
}

var romanToInt4 = (s) => {
    let num = 0;


    for (let i = 0; i < s.length; i+=1) {

        romanToIntDict[s[i]] < romanToIntDict[s[i+1]] ? num -= romanToIntDict[s[i]] : num += romanToIntDict[s[i]];
    }

    console.log('Roman to int 4th attempt:', num);
    return num;
}


//var s = 'MCMXCIV';
var s = 'III';


if (1 <= s.length <= 15) {
    let s_ = s.split("");
    let flag = true;
    s_.forEach(item => {
        if (!romanArray.includes(item)) {
            flag = false;
        }
    });
    if (flag) {
        var result = romanToInt(s);
        if (result > 3999) {
            console.log('Error: not a valid number in the range [1,3999]');
        } else {
            console.log(result);

        }
    } else {
        console.log('Error: S contains string other than Roman letters.');

    }
} else {
    console.log('Error: maximum length 15');
}

romanToInt2(s);
romanToInt3(s);
romanToInt4(s);
