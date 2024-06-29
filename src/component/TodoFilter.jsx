

export const TodoFilter = () => {
  return (
    <section className="bg-white mt-8 flex justify-center p-4 rounded-md gap-4">
      <button className="text-blue-600">All</button>
      <button className="hover:text-blue-600">Active</button>
      <button className="hover:text-blue-600">Completed</button>
    </section>
  )
}
