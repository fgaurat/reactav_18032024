function getTodo(id) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      const todo = {
        id,
        title: `Todo id : ${id}`,
        completed: false,
      };

      resolve(todo);
    }, 1000);
  });

  return p;
}

// const pTodo = getTodo(1);

// pTodo
//   .then((todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   })
//   .then((todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   })
//   .then((todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   })
//   .then((todo) => {
//     console.log(todo);
//     return getTodo(todo.id + 1);
//   })
 


// const p1 = getTodo(1)
// const p2 = getTodo(2)
// const p3 = getTodo(3)
// const p4 = getTodo(4)

// Promise.all([p1,p2,p3,p4]).then(arr => console.log(arr))


const main = async () =>{
    const t1 = await getTodo(1)
    console.log(t1)
    const t2 = await getTodo(2)
    console.log(t2)
    const t3 = await getTodo(3)
    console.log(t3)

}

main()
