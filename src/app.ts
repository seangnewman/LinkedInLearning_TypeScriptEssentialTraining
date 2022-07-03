type TitleName = string ;

interface Books{
  id: number,
  title:TitleName,
  status : BookStatus,  
  completedOn ?: Date
}

enum BookStatus{
  Done = "done", 
  InProgress = "in-progress", 
  ToDo = "todo"
}


const todoItems : Books[] = [
  { id: 1, title: "Learn HTML", status:BookStatus.Done, completedOn: new Date("2021-09-11") },
  { id: 2, title: "Learn TypeScript", status: BookStatus.InProgress },
  { id: 3, title: "Write the best app in the world", status: BookStatus.ToDo},
]



function addTodoItem<T>(todo:string) :Books {
  const id = getNextId(todoItems)

  const newTodo : Books= {
      id,
      title: todo,
      status: BookStatus.ToDo,
  }

  

  todoItems.push(newTodo)

  return newTodo
}

 



function getNextId<T extends {id:number}>(items: T[]) : number{
  return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}



const newTodo= addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))