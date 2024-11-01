const debtEl = document.getElementById('debt')! as HTMLElement
const resultEl = document.getElementById('result')! as HTMLElement
const resultSectionEl = document.querySelector<HTMLElement>('.section-result')!

const state = {
  get debt(): number {
    return +debtEl.innerHTML
  },
  set debt(value: number) {
    debtEl.innerHTML = String(value)
  },
  get result(): number {
    return +resultEl.innerHTML
  },
  set result(value: number) {
    resultSectionEl.classList.remove('hidden')
    resultEl.innerHTML = String(value)
  },
}

document.getElementById('increase')?.addEventListener('click', (event) => {
  event.preventDefault()
  state.debt += 1
})

document.getElementById('roll')?.addEventListener('click', (event) => {
  event.preventDefault()
  state.result = Math.ceil(100 * Math.random())

  if (state.result <= state.debt) {
    state.debt = Math.ceil(Number(debtEl.innerHTML) / 2)
  }
})
