import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
import { todolist } from './todolist.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <form id='new-task-form'>
      <input type="text" id='new-task-title' >
      <button type="submit">Add</button>
    </form>
    <ul id='list'> 
    </ul>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
todolist();
