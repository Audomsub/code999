export const books: Book[] =  [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Moby-Dick", author: "Herman Melville" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "The Odyssey", author: "Homer" },
    { title: "Brave New World", author: "Aldous Huxley" }
  ];

  export type Book = {
    title: string;
    author: string;
  }
export default books;  