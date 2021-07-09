import Menu from './Menu';
import Introduction from './Introduction';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    <>
      <Menu />
      <main>
        <Introduction />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
