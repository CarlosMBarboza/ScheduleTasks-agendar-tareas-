

export const TodoCreate = ({createTodo}) => {
  return (
    <form className="bg-white flex gap-4 items-center rounded-md overflow-hidden  p-4">
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input className="w-full text-gray-400 outline-none" type="text" placeholder="New tasks " />
    </form>
  )
}

