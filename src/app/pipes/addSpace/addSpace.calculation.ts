const reverseString = (str: string): string => {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i -= 1) {
        newStr += str[i];
    }

    return newStr;
}

const addSpace = (str: string): string => {
    let newStr = '';
    for (let i = 1, len = str.length; i <= len; i += 1) {
        newStr = (i % 3 === 0) ? str[i] + ' ' : str[i];
    }

    return str;
}

export {reverseString, addSpace};
