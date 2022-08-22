const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

input.addEventListener('input', event => {
	span.textContent = event.target.value

	if (event.target.value === '') {
		span.textContent = 'Anonymous'
	}
})