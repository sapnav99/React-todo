import './todoitem.css';
export default function TodoItem({
    todo,
    onEditClick,
    onDeleteClick
  }) {
    return (
      <div className="col-6 d-flex justify-content-center align-items-center gap-4 ">
        <ul className="table">
        <li key={todo.id} className='list'>
        {todo.text}
        
        <button onClick={() => onEditClick(todo)} className="btn btn-secondary  gap-5 ">Edit</button>
        <button onClick={() => onDeleteClick(todo.id)} className="btn btn-danger  ">Delete</button>   
      </li>
        </ul>
      
      </div>
    );
  }
  