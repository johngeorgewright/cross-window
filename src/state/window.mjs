import { onStateChange, setState } from './state.mjs'

const KEY = 'cw'

onStateChange((value) => {
  top.postMessage({ type: KEY, value })
})

addEventListener('message', ({ data }) => {
  if (data.type === KEY) setState(data.value)
})
