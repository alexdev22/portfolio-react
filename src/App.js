import Menu from './Menu';
import Introduction from './Introduction';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Tecnologias from './Tecnologias';
import { useState } from 'react';
import { BiUpArrow } from 'react-icons/bi';
function App() {
  const [scrollY, setScrollY] = useState(false);

  const checkScroll = () => {
    document.addEventListener('scroll', () => {
      return window.scrollY > 400 ? setScrollY(true) : setScrollY(false);
    });
  };

  checkScroll();

  return (
    <>
      <Menu />
      <main>
        <Introduction />
        <Portfolio />
        <Tecnologias />
        <Contact />
        {scrollY && (
          <div
            className="back-to-top"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <BiUpArrow />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
