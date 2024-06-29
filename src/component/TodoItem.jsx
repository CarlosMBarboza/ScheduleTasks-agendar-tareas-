import { CrossIcon } from "../component/icons/CrossIcon"

export const TodoItem = ({todo}) => {
  return (
    <article className="flex gap-4 border-b   p-4 items-center">
              <button className="inline-block h-5 w-5 rounded-full flex-none border-2"></button>
              <p className="text-gray-600 grow">{todo.title}</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>
  )
}
