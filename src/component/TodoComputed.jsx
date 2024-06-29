

export const TodoComputed = ({ completedItemsLeft,  clearCompleted }) => {
  return (
    <section className=" flex justify-between   p-4 items-center">
      <span className="text-gray-400">{ completedItemsLeft} item left</span>
      <button className="text-gray-400" onClick={ clearCompleted }>Clear Completed</button>
    </section>
  )
}
