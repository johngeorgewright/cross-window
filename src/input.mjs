import { onStateChange, setState } from './state/index.mjs'

const input = document.getElementById('message')

input.addEventListener('keyup', () => {
  setState(input.value)
})

onStateChange((value) => {
  input.value = value
})
