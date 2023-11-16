const addTask = (titleInput: string) => {
   let newTask = {id: v1(), title: titleInput, isDone: false}
   setTasks([newTask, ...tasks])
}
