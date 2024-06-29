export const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="bg-white mt-8 flex justify-center p-4 rounded-md gap-4">
            <button
                className={`${
                    filter === "all"
                        ? "text-blue-600 hover:text-gray-400"
                        : "text-gray-400 hover:text-blue-600 "
                }`}
                onClick={() => changeFilter("all")}
            >
                All
            </button>
            <button
                className={`${
                  filter === "active"
                      ? "text-blue-600 hover:text-gray-400"
                      : "text-gray-400 hover:text-blue-600 "
              }`}
                onClick={() => changeFilter("active")}
            >
                Active
            </button>
            <button
               className={`${
                filter === "completed"
                    ? "text-blue-600 hover:text-gray-400"
                    : "text-gray-400 hover:text-blue-600 "
            }`}
                onClick={() => changeFilter("completed")}
            >
                Completed
            </button>
        </section>
    );
};
