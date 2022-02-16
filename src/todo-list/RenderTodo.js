import React from "react";

function RenderTodo(props) {
  const { todosList, setTodosList } = props;
  const removeTodo = (id) => {
    const filteredTodo = todosList.filter((item) => item.id !== id);

    setTodosList(filteredTodo);
  };
  return (
    <div>
      {todosList.map((item) => (
        <div>
          <div key={item.id}>{item.name}</div>
          <button
            style={{ background: "red" }}
            onClick={() => removeTodo(item.id)}
          >
            REMOVE
          </button>
        </div>
      ))}
    </div>
  );
}

export default RenderTodo;


