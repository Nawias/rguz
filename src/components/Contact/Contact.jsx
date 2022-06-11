import React, {useState} from "react";
import "./Contact.css";
import {AppBody} from "../../App";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSendClick = (e) => {
    setName("");
    setEmail("");
    setMessage("");
    e.preventDefault();
    e.target.blur();
  }
  return (
    <div className="contactComponent">
      <AppBody>
        <div className="panel left-panel">
          <h1>Kontakt</h1>
          <p>Zaintrygowany naszą ofertą? Zadzwoń, napisz lub przyjdź do biura - mamy ciasteczka!</p>
          <p>Możesz skorzystać z formularza kontaktowego lub znaleźć nas tu:</p>
          <p style={{textAlign:"justify"}}>
            <b>Tel.:</b> +48 516 617 242 <br/>
            <b>Email:</b> biuro.rguz@yandex.com <br/>
            <br/>
            ul. Gorzelna 17, 60-169 Poznań
          </p>
          <img src="/img/contact/map.png" alt="Mapa Poznania"/>
        </div>
        <div className="panel right-panel">
          <h1>Napisz do nas!</h1>
          <input type="text" className={"input singleInput"} placeholder={"Imię i Nazwisko..."} value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="email" className={"input singleInput"} placeholder={"Email..."} value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <textarea className={"input multiInput"} placeholder={"Wiadomość..."} value={message} onChange={(e)=>setMessage(e.target.value)}/>
          <input type="button" className={"button"} value="WYŚLIJ" onClick={handleSendClick}/>
        </div>
      </AppBody>
    </div>
  );


}

export default Contact;
