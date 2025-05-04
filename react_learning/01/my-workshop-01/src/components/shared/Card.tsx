import React from 'react';
import { Book } from '../../mock/mock';

type CardProps = {
  book: Book;
};

const Card = ({book} : CardProps) => {
  return (
    <div className="border p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300 w-70">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year:</strong> {book.year}</p>
    </div>
  );
};

export default Card;
