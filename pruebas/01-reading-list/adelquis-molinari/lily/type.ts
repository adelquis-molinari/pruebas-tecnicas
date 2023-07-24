export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: AuthorBook;
}

export interface AuthorBook {
  name: string;
  otherBooks: string[];
}