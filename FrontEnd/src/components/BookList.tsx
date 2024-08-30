import React, { useEffect, useState } from 'react';
import './Home/Home.css';
import axios from 'axios';
import UpdatePopup from './update/UpdatePopup';

// Define the Book type or interface
interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
  image: string;
}

const BookList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null); // Added state for selected book ID
  const [books, setBooks] = useState<Book[]>([]);

  const handleOpenModal = (id: number) => {
    setSelectedBookId(id); // Set the selected book ID
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBookId(null); // Clear the selected book ID when closing the modal
  };

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:5271/books/${id}`)
      .then(() => {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get<Book[]>('http://localhost:5271/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Debugging: Check for unique keys
  console.log('Books:', books);

  return (
    <div className='bookContainer'>
      <div className='bookList'>
        {books.map((book) => (
          <div key={book.id} className='bookItem'>
            <div className='bookTitle'>
              <h1 className='font-semibold capitalize'>{book.title}</h1>
            </div>
            <div className='bookImage'>
              <img
                src={book.image}
                alt={book.title}
                className='w-full h-auto'
              />
            </div>
            <div className='bookDetails'>
              <p className='text-justify'>{book.description}</p>
              <h3 className='text-slate-500'>- {book.author}</h3>
              <button
                onClick={() => handleOpenModal(book.id)} // Pass the book ID
                className='bg-secondary text-black hover:bg-black hover:text-white uppercase'
              >
                Update
              </button>
              <button
                className='hover:bg-black hover:text-white bg-primary uppercase'
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedBookId !== null && (
        <UpdatePopup 
          onClose={handleCloseModal} 
          bookId={selectedBookId} // Pass the book ID to UpdatePopup
        />
      )}
    </div>
  );
};

export default BookList;
