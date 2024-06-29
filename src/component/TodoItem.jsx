import { IconCross } from "./icons/IconCross";
import { IconCheck } from "./icons/IconCheck";

export const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    const { id, title, completed } = todo;
    return (
        <article className="flex gap-4 border-b   p-4 items-center">
            {/* <button className=>
                <IconCheck/>
              </button> */}
            <button
                className={`h-5 w-5 flex-none rounded-full border-2 ${
                    completed
                        ? "flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "inline-block "
                }`}
                onClick={() => updateTodo (id)}
            >
                {completed && <IconCheck />}
            </button>
            <p className={`text-gray-600 grow ${completed && "line-through"}`}>{title}</p>
            <button className="flex-none" onClick={()=> deleteTodo (id)}>
                <IconCross />
            </button>
        </article>
    );
};
