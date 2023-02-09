import React from "react";
import styles from "./Contact.scss";
import phone from './phone.png'
import email from './Post.png'

function Contact(props) {
  return (
    <div className="contact">
      <div className="main-block">
        <h1>Связь с нами</h1>
        <p>
          У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!
        </p>

        <div>
          <section className="contact_data">
            <div>
                <img className="phone-img" src={phone} alt="" />
                <span className="phone_num">+7 (111) 222-33-44</span>
            </div>

            <div className="email-block">
                <img className="email-img" src={email} alt="" />
                <span className="email">order@bu-one.ru</span>
            </div>
          </section>

          <section className="message">
            <div className="inputs">
              <h5>Имя</h5>
              <input type="text" placeholder="Иван" />
            </div>
            <div className="inputs">
              <h5>Фамилия</h5>
              <input type="text" placeholder="Иванов" />
            </div>
          </section>

          <section className="message2">
          <div className="inputs">
              <h5>Сообщение</h5>
              <input type="text" placeholder="Ваше сообщение" />
          </div>
            
          </section>

          <button>Отправить сообщение</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
