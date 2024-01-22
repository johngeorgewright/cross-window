const STORAGE_KEY = 'cw'

let state = localStorage.getItem(STORAGE_KEY) ?? ''

const listeners = []

onUpdateState((value) => {
  if (value !== state) {
    state = value
    localStorage.setItem(STORAGE_KEY, value)
  }
})

addEventListener('storage', (event) => {
  if (event.key === STORAGE_KEY) updateState(event.newValue)
})

export function onUpdateState(listener) {
  listeners.push(listener)
  listener(state)
}

export function updateState(state) {
  for (const listener of listeners) listener(state)
}
