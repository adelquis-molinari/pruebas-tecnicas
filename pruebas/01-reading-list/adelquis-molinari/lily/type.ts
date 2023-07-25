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


export interface PropsBook {
  ISBN: string;
  title: string;
  cover: string;
  isFavorite: boolean;
}


export interface favoriteBooksState {
  storeBooks: Book[]
  favoriteBooksIds: string[];
  addFavoriteBook: (ISBN: string) => void;
  removeFavoriteBook: (ISBN: string) => void;
}

