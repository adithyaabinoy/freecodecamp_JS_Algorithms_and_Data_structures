function repeatStr(str, num) {
    let newStr = "";
    for(let i = 0; i <= num; i++) {
        newStr += str;
    }
    return newStr;
}
let repeatedString = repeatStr("abc", 3);
console.log(repeatedString);