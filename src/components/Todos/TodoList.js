import Todo from './Todo';

function TodoList({ todos, deleteTodo }) {
  return todos.length === 0 ? (
    <h2>To do is Empty...</h2>
  ) : (
    todos.map((todo, index) => (
      <Todo todo={todo} key={index} index={index} deleteTodo={deleteTodo} />
    ))
  );
}

export default TodoList;
