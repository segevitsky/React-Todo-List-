  // const initTodos = [
  //   { id: 1, task: "Learn Next.js", completed: false },
  //   { id: 2, task: "Wash Halva", completed: true },
  //   { id: 3, task: "Make an awesome portfolio", completed: false }
  // ];


  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]) 
  //this [todos] array is not necasery here but it is best practice so it wouldnt rerender for each piece of state


  