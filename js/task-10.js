function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector(`button[data-create]`);
const btnDestroy = document.querySelector(`button[data-destroy]`);
const inputNumber = document.querySelector(`#controls > input`);
const boxes = document.querySelector('#boxes')

const createBoxes = amount => {
	const elementsToAdd = []
	for (let i = 0; i < amount; i++) {
		const div = document.createElement('div')
		div.style.height = `${30 + 10 * i}px`
		div.style.width = `${30 + 10 * i}px`
		div.style.background = getRandomHexColor()
		elementsToAdd.push(div)
	}
	return elementsToAdd
}


btnCreate.addEventListener('click', () => {
	let boxesToAdd = createBoxes(inputNumber.value)
	boxes.append(...boxesToAdd)
})

const destroyBoxes = () => {
	boxes.innerHTML = ''
}

btnDestroy.addEventListener('click', () => {
	destroyBoxes.call()
})

