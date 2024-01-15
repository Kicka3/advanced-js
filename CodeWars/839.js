code = code.split('').filter(c => '><+-.,[]'.includes(c))
let output = '',
   ptr = 0,
   brackets = 0,
   i
const data = [0],
   map = {
      '>': () => {
         ptr++
         if (ptr >= data.length) data.push(0)
      },
      '<': () => ptr--,
      '+': () => (data[ptr] = (data[ptr] + 1) % 256),
      '-': () => (data[ptr] = (data[ptr] - 1) % 256),
      ',': () => {
         data[ptr] = input.charCodeAt(0)
         input = input.slice(1)
      },
      '.': () => (output += String.fromCharCode(data[ptr])),
      '[': () => {
         if (data[ptr]) return
         for (let j = i + 1; j < code.length; j++)
            if (code[j] === '[') brackets++
            else if (code[j] === ']')
               if (brackets) brackets--
               else {
                  i = j
                  break
               }
      },
      ']': () => {
         if (!data[ptr]) return
         for (let j = i - 1; j >= 0; j--)
            if (code[j] === ']') brackets++
            else if (code[j] === '[')
               if (brackets) brackets--
               else {
                  i = j
                  break
               }
      }
   }
for (i = 0; i < code.length; i++) map[code[i]]()
