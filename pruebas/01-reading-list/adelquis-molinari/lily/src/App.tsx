import { CardBook } from "./components/content/cardBook";
import { Layout } from "./layout";

function App() {
  return (
    <Layout>
      <section className="h-screen flex justify-center gap-3 p-4">
        <CardBook
          cover="https://www.dongee.com/tutoriales/content/images/2022/10/image-83.png"
          title="javascript"
        />
      </section>
    </Layout>
  );
}

export default App;
