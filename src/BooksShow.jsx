export function BooksShow(props) {
  return (
    <div id="books-show">
      <h1>Book Info</h1>
      <p>Title: {props.book.title}</p>
      <p>Author: {props.book.author}</p>
      <p>Description: {props.book.description}</p>
      <p>Language: {props.book.language}</p>
    </div>
  );
}
