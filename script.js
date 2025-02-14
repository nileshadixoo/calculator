let inputValue = document.getElementById('user-input')
console.log(inputValue.innerText.includes('%'));



const numbers = document.querySelectorAll('.key-number').forEach((item) => {
    item.addEventListener('click', (e) => {
        if (inputValue.innerText === 'NaN') {
            inputValue.innerText = ''
        }
        if (inputValue.innerText === '0') {
            inputValue.innerText = ''
        }
        inputValue.innerText += e.target.innerText
    })

})

const calculate = document.querySelectorAll('.operation').forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        let lastValue = inputValue.innerText.substring(inputValue.innerText.length - 1, inputValue.innerText.length);

        if (!isNaN(lastValue) && e.target.innerText === 'AC') {
            inputValue.innerText = '0'
        }
        else if(!isNaN(lastValue) && e.target.innerText === 'Del'){
            inputValue.innerText= inputValue.innerText.substring(0,inputValue.innerText.length-1)
            if(inputValue.innerText==0) inputValue.innerText= '0'
        }
        else if(!isNaN(lastValue) && e.target.innerText === '='){
            // inputValue.innerText = eval(inputValue.innerText)
            // if(inputValue.innerText.includes('+')){
            //     let res = (inputValue.innerText.split('+'));
            //     console.log(res);
                
            //     inputValue.innerText = (parseInt(res[0])+parseInt(res[1]))
            //     console.log(inputValue.innerText);
                

            // }
            // else if(inputValue.innerText.includes('-')){
            //     let res = (inputValue.innerText.split('-'));
            //     inputValue.innerText = (res[0]-res[1])

            // }
            // else if(inputValue.innerText.includes('/')){
            //     let res = (inputValue.innerText.split('/'));
            //     inputValue.innerText = (res[0]/res[1])

            // }
            // else if(inputValue.innerText.includes('*')){
            //     let res = (inputValue.innerText.split('*'));
            //     inputValue.innerText = (res[0]*res[1])

            // }
            // else if(inputValue.innerText.includes('%')){
            //     let res = (inputValue.innerText.split('%'));
            //     inputValue.innerText = (res[0]%res[1])

            // }
            function tokenize(s) {
                // --- Parse a calculation string into an array of numbers and operators
                const r = [];
                let token = '';
                for (const character of s) {
                    if ('^*/+-'.includes(character)) {
                        if (token === '' && character === '-') {
                            token = '-';
                        } else {
                            r.push(parseFloat(token), character);
                            token = '';
                        }
                    } else {
                        token += character;
                    }
                }
                if (token !== '') {
                    r.push(parseFloat(token));
                }
                return r;
            }
            
            function calculate(tokens) {
              
                const operatorPrecedence = [{'^': (a, b) => Math.pow(a, b)},
                           {'*': (a, b) => a * b, '/': (a, b) => a / b},
                           {'+': (a, b) => a + b, '-': (a, b) => a - b}];
                let operator;
                for (const operators of operatorPrecedence) {
                    const newTokens = [];
                    for (const token of tokens) {
                        if (token in operators) {
                            operator = operators[token];
                        } else if (operator) {
                            newTokens[newTokens.length - 1] = 
                                operator(newTokens[newTokens.length - 1], token);
                            operator = null;
                        } else {
                            newTokens.push(token);
                        }
                    }
                    tokens = newTokens;
                }
                if (tokens.length > 1) {
                    console.log('Error: unable to resolve calculation');
                    return tokens;
                } else {
                    return tokens[0];
                }
            }
            inputValue.innerText = calculate(tokenize(inputValue.innerText))
            
            

            
        }
        else if(!isNaN(lastValue)) {
            inputValue.innerText += e.target.innerText
        }

    })

})
console.log(eval(2*2*4))

