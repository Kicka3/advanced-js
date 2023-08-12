const encode = (str) => str.split('').map(v=>/[a-z]/gi.test(v)?v.toLowerCase().charCodeAt()-96:v).join('')
