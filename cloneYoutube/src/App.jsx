import { useState, useEffect } from "react";
import Menu from './components/Menu/Menu';
import CardVideos from './components/cardVideos/cardVideos';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1310); 

  // Atualiza isDesktop no resize
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1310);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
      <main
        style={{
          marginLeft: isDesktop && menuOpen ? '250px' : '0',
          width: isDesktop && menuOpen ? 'calc(100% - 250px)' : '100%',
          transition: 'margin-left 0.3s ease, width 0.3s ease'
        }}
      >
        <CardVideos />
      </main>
    </>
  )
}

export default App;
