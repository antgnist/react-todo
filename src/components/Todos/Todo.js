import style from './Todo.module.css';

function Todo({ todo, index, deleteTodo }) {
  return (
    <div
      onDoubleClick={() => {
        deleteTodo(index);
      }}
      className={style.todo}
    >
      <p className={style.todoText}>{todo}</p>
    </div>
  );
}

export default Todo;
