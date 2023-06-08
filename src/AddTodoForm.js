//import { Link } from "react-router-dom";
import './addtodo.css';
export default function AddTodoForm({
    todo,
    onAddFormSubmit,
    onAddInputChange
  }) {
    return (
      <div>       
<div className='col-6 bg-white p-3 rounded w-50'>
      <form onSubmit={onAddFormSubmit}>
        <h2>Add Todo</h2>
        <label htmlFor="todo" className="m-10">Create todo: </label>
        <div className="input-group mb-3">
        <input className="form-control border border-secondary border-3 text-center"
          name="todo"
          type="text"
          placeholder="Create new todo"
          value={todo}
          onChange={onAddInputChange}
        />
        <div className="input-group-append">
        <button className="btn btn-success w-20 m-1">Add Task</button>
        </div>
        </div>
      </form>
      </div>
      </div>
    );
  }
  