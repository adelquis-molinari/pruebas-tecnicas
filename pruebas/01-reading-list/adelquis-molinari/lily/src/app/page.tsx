import { library } from "../../books.json";
import { CardBook } from "@/component/CardBook";

export default async function Home() {
  const books = library;
  // console.log(data.library);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {books.map((b) => {
        return (
          <li key={b.book.ISBN}>
            <CardBook book={b.book} />
          </li>
        );
      })}
      <h1>Lily</h1>
    </main>
  );
}
