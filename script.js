let inputValue = document.getElementById('user-input')


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
            inputValue.innerText = eval(inputValue.innerText)
        }
        else if(!isNaN(lastValue)) {
            inputValue.innerText += e.target.innerText
        }

    })

})
console.log(eval(2*2*4))

