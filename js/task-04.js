let counterValue = 0

const displayCounter = document.querySelector('#value')
const btnDecrement = document.querySelector('button[data-action="decrement"]')
const btnIncrement = document.querySelector('button[data-action="increment"]')

btnDecrement.addEventListener('click', () => {
	counterValue -=1
	displayCounter.textContent = counterValue
})

btnIncrement.addEventListener('click', () => {
	counterValue +=1
	displayCounter.textContent = counterValue
})