import React, { useState } from 'react';
import './Home/Home.css';
import Dummy from './helper/Dummydata';
import UpdatePopup from './update/UpdatePopup';

const BookList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bookContainer'>
      <div className='bookList'>
        {Dummy.map((book, index) => (
          <div key={index} className='bookItem'>
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
                onClick={handleOpenModal}
                className='bg-secondary text-black hover:bg-black hover:text-white uppercase'
              >
                Update
              </button>
              <button className='hover:bg-black hover:text-white bg-primary uppercase'>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && <UpdatePopup onClose={handleCloseModal} />}
    </div>
  );
};

export default BookList;
