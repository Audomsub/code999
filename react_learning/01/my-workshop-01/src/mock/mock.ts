export type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
};

export const books: Book[] = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { id: 5, title: "Moby-Dick", author: "Herman Melville", year: 1851 },
  { id: 6, title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
  { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { id: 8, title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866 },
  { id: 9, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  { id: 10, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
];
