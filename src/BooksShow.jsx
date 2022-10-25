export function BooksShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("book updated");
    const params = new FormData(event.target);
    props.onUpdateBook(props.book.id, params);
    event.target.reset();
  };
  return (
    <div id="books-show">
      <h1>Book Info</h1>
      <p>Title: {props.book.title}</p>
      <p>Author: {props.book.author}</p>
      <p>Description: {props.book.description}</p>
      <p>Language: {props.book.language}</p>

      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" name="title" defaultValue={props.book.title}></input>
        </div>
        <div>
          Author: <input type="text" name="author" defaultValue={props.book.author}></input>
        </div>
        <div>
          Description: <input type="text" name="description" defaultValue={props.book.description}></input>
        </div>
        <div>
          Language: <input type="text" name="language" defaultValue={props.book.language}></input>
        </div>
        <div>
          Image url: <input type="text" name="image" defaultValue={props.book.image}></input>
        </div>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}
