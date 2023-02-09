import React from 'react';
import img from "./assets/gallaryImg.svg"
// eslint-disable-next-line no-unused-vars
import styles from './Gallery.scss'
function Gallary() {
    return (
        <div className='bg'>
            <div className='main'>

    
                <h4>Наши услуги</h4>
                <h1>Мы специализируемся</h1>

                <div className='gallary'>
                    

                    <div className="grid-container">
                        <div className="grid-item-blue">
                            <p>Бухгалтерское  обслуживание</p>
                            <button>Подробнее</button>
                        </div>

                        <div className="grid-item">
                            <p>Бухгалтерское  обслуживание</p>
                            <button>Подробнее</button>
                        </div>  

                        <div className="grid-item">
                            <p>Бухгалтерское  обслуживание</p>
                            <button>Подробнее</button>
                        </div>

                        <div className="grid-item">
                            <p>Бухгалтерское  обслуживание</p>
                            <button>Подробнее</button>
                        </div>
                        <div className="grid-item">
                            <p>Бухгалтерское  обслуживание</p>
                            <button>Подробнее</button>
                        </div>
                        <div className="grid-item">
                            <p>Бухгалтерское  обслуживание</p>
                            <button>Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallary;