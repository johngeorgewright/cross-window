const STORAGE_KEY = 'cw'

let state = localStorage.getItem(STORAGE_KEY) ?? ''

const listeners = [
  (value) => { state = value },
  (value) => localStorage.setItem(STORAGE_KEY, value),
]

addEventListener('storage', (event) => {
  if (event.key === STORAGE_KEY) updateState(event.newValue)
})

export function onUpdateState(listener) {
  listeners.push(listener)
  listener(state)
}

export function updateState($state) {
  if ($state !== state)
    for (const listener of listeners) listener($state)
}
