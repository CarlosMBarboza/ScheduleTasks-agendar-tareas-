import { useState } from "react";

export const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            setTitle("");
        }
        createTodo(title);
        setTitle("");
    };
    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="bg-white flex gap-4 items-center rounded-md overflow-hidden  p-4"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full text-gray-400 outline-none"
                type="text"
                placeholder="New tasks "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};
