import { onUpdateState } from './state.mjs'

const display = document.getElementById('display')

onUpdateState((value) => {
  display.innerText = value 
})

