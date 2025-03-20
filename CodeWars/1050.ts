function mobileKeyboard(str){
    const keyPass = {
        '1': 1, '2': 1, '3': 1,
        '4': 1, '5': 1, '6': 1,
        '7': 1, '8': 1, '9': 1,
        '*': 1, '0': 1, '#': 1,
        'a': 2, 'b': 3, 'c': 4,
        'd': 2, 'e': 3, 'f': 4,
        'g': 2, 'h': 3, 'i': 4,
        'j': 2, 'k': 3, 'l': 4,
        'm': 2, 'n': 3, 'o': 4,
        'p': 2, 'q': 3, 'r': 4, 's': 5,
        't': 2, 'u': 3, 'v': 4,
        'w': 2, 'x': 3, 'y': 4, 'z': 5,
    }

    let totalPass = 0;

    for(let char of str.toLowerCase()) {
        totalPass += keyPass[char]
    }
    return totalPass;
}