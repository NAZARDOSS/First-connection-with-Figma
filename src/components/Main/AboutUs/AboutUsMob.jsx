import React from 'react';
import styles from './AboutMob.scss'

function AboutUsMob() {
    return (
        <div >
            <div class="left-part">
                    <h4>О нас</h4>
                    <h1>Компания</h1>
                    <h1 className='ivanov'>ИвановПром</h1>
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
                </div>

                <div class="about-container">
                    <div class="num">90</div>
                    <div class="grid-item">Завершено крупных сделок</div>
                    <div class="grid-item">
                        <a href="#" class="underlined-link">Все кейсы</a>
                    </div>

                    <div class="num">90</div>
                    <div class="grid-item">Завершено крупных сделок</div>
                    <div class="grid-item">
                        <a href="#" class="underlined-link">Все кейсы</a>
                    </div>

                    <div class="num">90</div>
                    <div class="grid-item">Завершено крупных сделок</div>
                    <div class="grid-item">
                        <a href="#" class="underlined-link">Все кейсы</a>
                    </div>

                    <div class="num-blue">90</div>
                    <div class="grid-item-blue">Завершено крупных сделок</div>
                    <div class="grid-item-blue">
                        <a href="#" class="underlined-link-blue">Все кейсы</a>
                </div>
            </div>
   
        </div>
    );
}

export default AboutUsMob;