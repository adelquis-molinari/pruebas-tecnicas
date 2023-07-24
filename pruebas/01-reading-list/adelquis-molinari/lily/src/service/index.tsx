import data from "../../../../books.json";

export function fechDataBooks() {
  const { library } = data;

  return library.map((b) => {
    const { cover, title, ISBN, author, genre, pages, synopsis, year } = b.book;
    return {
      title,
      cover,
      ISBN,
      author,
      genre,
      pages,
      synopsis,
      year,
    };
  });
}
