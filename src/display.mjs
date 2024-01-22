import { onStateChange } from './state/index.mjs'

const display = document.getElementById('display')

onStateChange((value) => {
  display.innerText = value 
})

