import './style.css'
import kojiPeko from '/Kojima+Pekora.png'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Anthony Nguyen</h1>
    <img src="${kojiPeko}" class="meme"/>
    
    <p class="read-the-docs">
      Kojima has good tastes in oshi's.
    </p>

    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
