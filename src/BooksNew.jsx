export function BooksNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("book added");
    const params = new FormData(event.target);
    props.onCreateBook(params);
    event.target.reset();
  };

  return (
    <div id="book-new">
      <h1>New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" name="title" />
        </div>
        <div>
          Author: <input type="text" name="author" />
        </div>
        <div>
          Description: <input type="text" name="description" />
        </div>
        <div>
          Language: <input type="text" name="language" />
        </div>
        <div>
          Image: <input type="text" name="image" />
        </div>
        <button type="submit">Add New Book</button>
      </form>
    </div>
  );
}
