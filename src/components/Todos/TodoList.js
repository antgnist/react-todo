import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>To do is Empty...</h2>}
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
