import { onStateChange, setState } from './state.mjs'

const KEY = 'cw'

setState(localStorage.getItem(KEY) ?? '')

onStateChange((value) => {
  localStorage.setItem(KEY, value)
})

addEventListener('storage', ({ key, newValue }) => {
  if (key === KEY) setState(newValue)
})
