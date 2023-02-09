import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import logo from "./ASSETS/Logo1.svg"
import styles from "./scss/header.scss"
import HeaderMob from './HeaderMob';


const useMedia = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
  
      const listener = () => setMatches(media.matches);
      media.addListener(listener);
  
      return () => {
        media.removeListener(listener);
      };
    }, [query, matches]);
  
    return matches;
  };
  
  const DesktopComponent = () => {
    return (
        <div>
        <header>
         <figure>
             <a href="/">
                 <img src={logo} alt="" />
             </a>
         </figure>
         <Nav />
         <button className='header_button'>Связаться</button>
         </header> 
     </div>
    );
  };
  
  const MobileComponent = () => {
    return (
      <HeaderMob />
    );
  };
  
  const Header = () => {
    const isMobile = useMedia('(max-width: 900px)');
  
    return isMobile ? <MobileComponent /> : <DesktopComponent />;
  };
  
  export default Header;