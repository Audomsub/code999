import React from 'react';
import Card from '../components/shared/Card';
import { books } from '../mock/mock';
import '../index.css'

const Workshop = () => {
    return (
      <div className="p-2">
        <h1 className="text-center mb-2">Audomsub Book</h1>
        <div className='flex flex-wrap justify-center gap-3'>
          {books.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Workshop;