import { onUpdateState, updateState } from './state.mjs'

const input = document.getElementById('message')

input.addEventListener('keyup', () => {
  updateState(input.value)
})

onUpdateState((value) => {
  input.value = value
})
