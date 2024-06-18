import { Welcome, Home, Chat } from "./sections";

const App = () => {
  return (
    <section>
      <section className="flex justify-center items-center">
        <Welcome />
      </section>

      <Home />

      <Chat />
    </section>
  );
};

export default App;
