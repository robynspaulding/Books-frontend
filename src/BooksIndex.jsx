export function BooksIndex(props) {
  return (
    <div id="books-index">
      <h1>All Books</h1>
      {props.books.map((book) => (
        <div key={book.id}>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
          <button onClick={() => props.onSelectBook(book)}> More Info </button>
        </div>
      ))}
    </div>
  );
}
