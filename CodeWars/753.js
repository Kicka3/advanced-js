const changeTaskFilter = (filterValue: FilterValuesType) => {
   let tasksForTodolist = tasks;
   if (filter === 'active') {
      tasksForTodolist = tasks.filter(task => !task.isDone)
   }
   if (filter === 'completed') {
      tasksForTodolist = tasks.filter(task => task.isDone)
   }
   setFilter(filterValue)
}