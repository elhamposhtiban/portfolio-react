import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <section className="section-contact">
        <div className="row">
            <div className="contact">
                <div className="contact__form">
                    <form action="#" className="form">
                        <div className=" u-margin-bottom-medium">
                            <h2 className="heading-secondary">
                              Contact Info
                            </h2>
                        </div>
                        <div className="form__group input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                            <FontAwesomeIcon icon={faUser} size="3x" className="form__icon"/>
                            </span>
                          </div>
                            <input type="text" placeholder="full name" id="name" className="form__input" required/>
                            <label htmlFor="name" className="form__label">Full name</label>
                        </div>
                        <div className="form__group input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                            <FontAwesomeIcon icon={faEnvelope} size="3x" className="form__icon"/>
                            </span>
                          </div>
                            <input type="email" placeholder="Email address" id="email" className="form__input" required/>
                            <label htmlFor="email" className="form__label">Email address</label>
                        </div>
                        <div className="form__group input-group u-margin-bottom-medium">
                          <div className="input-group-prepend">
                            <span className=" input-group-text">
                            <FontAwesomeIcon icon={faComment} size="3x" className="form__icon"/>
                            </span>
                        </div>
                        <textarea type="text"  name="message" placeholder="Message" id="message-input" className="form__input" required></textarea>
                            <label htmlFor="message-input" className="form__label"> Message </label>
                        </div>
                        <div className="form__group">
                            <button className="btn btn--pink" type="submit" value="register"> Submit &rarr;</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Contact;