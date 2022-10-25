import axios from "axios";
import { useEffect, useState } from "react";
import { BooksIndex } from "./BooksIndex";
import { BooksNew } from "./BooksNew";
import { BooksShow } from "./BooksShow";
import { Modal } from "./Modal";

export function Home() {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState({});
  const [isBooksShowVisable, setIsBooksShowVisable] = useState(false);

  const handleIndexBooks = () => {
    axios.get("http://localhost:3000/books.json").then((response) => {
      console.log(response.data);
      setBooks(response.data);
    });
  };

  const handleShowBook = (book) => {
    setIsBooksShowVisable(true);
    setCurrentBook(book);
  };

  const handleHideBook = (book) => {
    setIsBooksShowVisable(false);
  };

  const handleCreateBook = (params) => {
    axios.post("http://localhost:3000/books.json", params).then((response) => {
      console.log(response.data);
      const newBook = response.data;
      setBooks([...books, newBook]);
    });
  };

  const handleUpdateBook = (id, params) => {
    axios.patch("http://localhost:3000/books/" + id + ".json", params).then((response) => {
      const updatedBook = response.data;
      setCurrentBook(updatedBook);

      setBooks(
        books.map((book) => {
          if (book.id === updatedBook.id) {
            return updatedBook;
          } else {
            return book;
          }
        })
      );
    });
  };

  const handleDestroyBook = (book) => {
    axios.delete("http://localhost:3000/books/" + book.id + ".json").then((response) => {
      console.log("book successfully deleted");
      setBooks(books.filter((b) => b.id !== book.id));
      handleHideBook();
    });
  };

  useEffect(handleIndexBooks, []);

  return (
    <div>
      <BooksNew onCreateBook={handleCreateBook} />
      <BooksIndex books={books} onSelectBook={handleShowBook} />
      <Modal show={isBooksShowVisable} onClose={handleHideBook}>
        <BooksShow book={currentBook} onUpdateBook={handleUpdateBook} onDestroyBook={handleDestroyBook} />
      </Modal>
    </div>
  );
}
