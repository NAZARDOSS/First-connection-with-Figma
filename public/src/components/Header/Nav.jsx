import React, {useState} from 'react';
import nav from "./scss/nav.scss"
function Nav(props) {
    const navigationItems =[ 
    {
        name: 'Главная',
        url: '/main'
    },
    {
        name: 'Услуги',
        url: '/offers'
    },
    {
        name: 'Кейсы',
        url: '/cases'
    },
    {
        name: 'О компании',
        url: '/about'
    },
    {
        name: 'Контакты',
        url: '/contacts'
    }
    ]
    return (
        <div>
            <nav>
                <ul>
                    {navigationItems.map(item => (<li><a href="{item.url}">{item.name}</a></li>))}
                </ul>
            </nav>
        </div>
    );
}

export default Nav;