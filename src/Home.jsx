import axios from "axios";
import { useEffect, useState } from "react";
import { BooksIndex } from "./BooksIndex";
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

  useEffect(handleIndexBooks, []);

  return (
    <div>
      <BooksIndex books={books} onSelectBook={handleShowBook} />
      <Modal show={isBooksShowVisable} onClose={handleHideBook}>
        <BooksShow book={currentBook} />
      </Modal>
    </div>
  );
}
