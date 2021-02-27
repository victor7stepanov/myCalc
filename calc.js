let input = document.querySelector('#input')
const num0 = document.querySelector('#num0')
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const num3 = document.querySelector('#num3')
const num4 = document.querySelector('#num4')
const num5 = document.querySelector('#num5')
const num6 = document.querySelector('#num6')
const num7 = document.querySelector('#num7')
const num8 = document.querySelector('#num8')
const num9 = document.querySelector('#num9')
const clearAll = document.querySelector('#clearAll')
const clearSym = document.querySelector('#clearSym')
const floatBtn = document.querySelector('#float')
const neg = document.querySelector('#neg')
const add = document.querySelector('#add')
const calc = document.querySelector('#calc')
const div = document.querySelector('#div')
const mul = document.querySelector('#mul')
const sub = document.querySelector('#sub')
const formInput = document.querySelector('#input')


sub.addEventListener('click', () => {
    if (input.value === '') formInput.placeholder = 'Введите выражение!'
        else input.value = input.value + '-'
})

div.addEventListener('click', () => {
    if (input.value === '') formInput.placeholder = 'Введите выражение!'
        else input.value = input.value + '/'
})

mul.addEventListener('click', () => {
    if (input.value === '') formInput.placeholder = 'Введите выражение!'
        else input.value = input.value + '*'
})

add.addEventListener('click', () => {
    if (input.value === '') formInput.placeholder = 'Введите выражение!'
        else input.value = input.value + '+'
})

calc.addEventListener('click', () => {
    if (input.value === '') formInput.placeholder = 'Введите выражение!'
        else input.value = eval(input.value)
    if (input.value === 'Infinity') input.value = 'Ошибка! Нажми на C'
})

neg.addEventListener('click', () => {
    let valArray = Array.from(input.value)
    if (valArray[0] !== '-') input.value = '-' + input.value
    else input.value = input.value.slice(1)
})

floatBtn.addEventListener('click', () => {
    if (input.value === '') formInput.placeholder = 'Начало с разделителя!'
        else input.value = input.value + '.'
})

clearAll.addEventListener('click', () => {
    formInput.placeholder = 'Готов к вычислениям!'
    input.value = ''
})

clearSym.addEventListener('click', () => {
    input.value = input.value.substring(0, input.value.length-1)
})

num1.addEventListener('click', () => {
    if (input.value !== '0') input.value = input.value + 1
})

num2.addEventListener('click', () => {
    if (input.value !== '0') input.value = input.value + 2
})

num3.addEventListener('click', () => {
    if (input.value !== '0') input.value = input.value + 3
})

num4.addEventListener('click', () => {
    if (input.value !== '0') input.value = input.value + 4
})

num5.addEventListener('click', () => {
    if (input.value !== '0') input.value = input.value + 5
})

num6.addEventListener('click', () => {
    if (input.value !== '0') input.value = input.value + 6
})

num7.addEventListener('click', () => {
    if (input.value !== '0') input.value = input.value + 7
})

num8.addEventListener('click', () => {
    if (input.value !== '0') input.value = input.value + 8
})

num9.addEventListener('click', () => {
    if (input.value !== '0') input.value = input.value + 9
})

num0.addEventListener('click', () => {
    if (input.value !== '0' || input.value !== '-0') input.value = input.value + 0
})