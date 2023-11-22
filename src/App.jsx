import RightImgDesktop from "./assets/illustration-sign-up-desktop.svg";
import RightImgMobile from "./assets/illustration-sign-up-mobile.svg";
import SuccessCorrect from "./assets/icon-list.svg"
import "./app.css";
import { useState } from "react";
export default function App() {
  
  const [emailVal, setEmailVal] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [successModal, setSuccessModal] = useState(false)

  function handleSignupEmail(e){
    setEmailVal(e.target.value)
  }
  function validateEmail (email){
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  function signupNewsletter(e){
    e.preventDefault()
    if(validateEmail(emailVal)){
      setSuccessModal(true)
      setIsEmailValid(true)
    } else {
      setSuccessModal(false)
      setIsEmailValid(false)
    }
  }
  return (
    <>
    <div className={`signup--container ${successModal ? "close--animate" :''}`}>
      {/* <!-- Sign-up form start --> */}
      <div className="signup--left">
        <form onSubmit={signupNewsletter} className="signup--left__form">
          <h1 className="signup--left__heading">Stay updated!</h1>
          <p className="signup--left__subheading">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <div className="email--input__info">
            <label htmlFor="signup--left__email">Email address</label>
            {!isEmailValid && <span className="input--validation__info">Valid email required</span>}
          </div>
          <input onChange={handleSignupEmail} type="text" id="signup--left__email" className={`${!isEmailValid ? "error--state" : ""}`} placeholder="email@company.com" /><br/>
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </div>
      <div className="right">
      <picture>
        <source media="(max-width: 768px)" srcSet={RightImgMobile} />
        <source media="(min-width: 769px)" srcSet={RightImgDesktop} />
        <img src={RightImgDesktop} alt="Right SIde Image" />
      </picture>
      </div>
      {/* <!-- Sign-up form end --> */}
      {/* <!-- Success message start --> */}

      {/* <!-- Success message end --> */}
      {/* <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Yash Purohit</a>.
      </div> */}
    </div>
    <div className={`success--modal ${successModal ? "open--animate" :'hidden'}`}>
        <img src={SuccessCorrect} alt="Success-Image" />
        <div className="success--modal__heading">Thanks for subscribing!</div>
        <p className="success--modal__info">
          A confirmation email has been sent to
          <b> ash@loremcompany.com</b>. Please open it and click the button inside to
          confirm your subscription.
        </p>
        <button>Dismiss message</button>
      </div>
    </>
  );
}
