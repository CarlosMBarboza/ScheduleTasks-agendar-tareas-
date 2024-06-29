import { useState } from "react"
import { Header } from "./component/Header"
import { TodoComputed } from "./component/TodoComputed"
import { TodoFilter } from "./component/TodoFilter"
import { TodoList } from "./component/TodoList"
import { TodoCreate } from "./component/TodoCreate"

const initialState =[
  {
    id: 1,
    title: "Learn React",
    completed: true,
  },
  {
    id: 2,
    title: "Learn Vite",
    completed: false,
  },
  {
    id: 3,
    title: "Learn Tailwind",
    completed: false,
  },
  {
    id: 4,
    title: "Learn Svelte",
    completed: false,
  },
  {
    id: 5,
    title: "Learn Vue",
    completed: false,
  }
]

function App() {
const [todos, setTodos] = useState(initialState)

const createTodo = (title)=>{
  const newTodo = {
    id: Date.now(),
    title,
    completed: false,
  }
  setTodos([...todos, newTodo])
}

  return (
    <>
      <div className="bg-[url('./images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300">
        <div className="container mx-auto px-4 pt-8">
          <Header />

          <TodoCreate createTodo={createTodo} />

          <main className="mt-8 bg-white rounded-md">
            <TodoList todos={todos}/>

            <TodoComputed />

          </main>

          <TodoFilter />

          <footer className="text-center">Drag and drop to reorder list</footer>
        </div>
      </div>
    </>
  )
}

export default App
