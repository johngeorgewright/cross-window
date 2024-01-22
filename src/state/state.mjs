let state = ''

const listeners = []

export function onStateChange(listener) {
  listeners.push(listener)
  listener(state)
}

export function setState(newState) {
  if (newState !== state) {
    console.info('state changed', { from: state, to: newState })
    state = newState
    for (const listener of listeners) listener(newState)
  }
}
