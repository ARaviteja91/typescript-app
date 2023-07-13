export function todolist(){
    const list = document.querySelector<HTMLUListElement>('#list')
    const form = document.querySelector<HTMLFormElement>('#new-task-form')
    const input = document.querySelector<HTMLInputElement>('#new-task-title')
    

    type Task = {
        title:string,
        completed:boolean,
    }

    form?.addEventListener("submit",(e)=>{
        
        e.preventDefault();
        if(input?.value == "" || input?.value == null) return
        
        const newTask ={
            title:input.value,
            completed:true
        }

        addListItem(newTask)
        input.value = ""

    })

    function addListItem(task:Task){
        const item = document.createElement('li')
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.addEventListener('change',()=>{
           task.completed  = checkbox.checked
        })
        const label = document.createElement('label')
        label.append(checkbox,task.title)
        item.append(label)
        list?.append(item)
    }
}