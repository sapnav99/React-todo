export default function EditForm({
    currentTodo,
    setIsEditing,
    onEditInputChange,
    onEditFormSubmit
  }) {
    return (
      <div>
      <form onSubmit={onEditFormSubmit}>
        <h2>Edit Todo</h2>
        <label htmlFor="updateTodo" className="m-3">Update todo: </label>
        <input
          name="updateTodo"
          type="text"
          placeholder="Update todo"
          value={currentTodo.text}
          onChange={onEditInputChange}
        />
        <button type="submit" onClick={onEditFormSubmit} className='btn btn-info m-3'>
          Update
        </button>
        <button onClick={() => setIsEditing(false)} className='btn btn-warning m-3'>Cancel</button>
      </form>
      </div>
    );
  }
  