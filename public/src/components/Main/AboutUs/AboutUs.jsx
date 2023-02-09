import React, {useState, useEffect} from 'react';
import Contact from '../Contact/Contact';
import AboutUsMob from './AboutUsMob';
import styles from './About.scss'
import Footer from '../Contact/Footer';




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
        <div class="container">
                <div class="left-part">
                    <h4>О нас</h4>
                    <h1>Компания</h1>
                    <h1 className='ivanov'>ИвановПром</h1>
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
                </div>
                <div class="right-part">

                    <div class="block-1">
                        <span>90</span>
                        <p>Завершено крупных сделок</p>
                        <button>Подробнее</button>
                    </div>

                    <div class="block-1">
                        <span>90</span>
                        <p>Завершено крупных сделок</p>
                        <button>Подробнее</button>
                    </div>

                    <div class="block-1">
                        <span>90</span>
                        <p>Завершено крупных сделок</p>
                        <button>Подробнее</button>
                    </div>
                    
                    <div class="block-1">
                        <span>90</span>
                        <p>Завершено крупных сделок</p>
                        <button>Подробнее</button>
                    </div>

                </div>
            </div>
    );
  };
  
  const MobileComponent = () => {
    return (
        <div>
        <AboutUsMob />
        <Contact />
        <Footer />
       </div>
    );
  };
  
  const AboutUs = () => {
    const isMobile = useMedia('(max-width: 900px)');
  
    return isMobile ? <MobileComponent /> : <DesktopComponent />;
  };
  
  export default AboutUs;