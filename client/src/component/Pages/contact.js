import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <section class="section-contact">
        <div class="row">
            <div class="contact">
                <div class="contact__form">
                    <form action="#" class="form">
                        <div class=" u-margin-bottom-medium">
                            <h2 class="heading-secondary">
                              Contact Info
                            </h2>
                        </div>
                        <div class="form__group input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                            <FontAwesomeIcon icon={faUser} size="3x" className="form__icon"/>
                            </span>
                          </div>
                            <input type="text" placeholder="full name" id="name" class="form__input" required/>
                            <label for="name" class="form__label">Full name</label>
                        </div>
                        <div class="form__group input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                            <FontAwesomeIcon icon={faEnvelope} size="3x" className="form__icon"/>
                            </span>
                          </div>
                            <input type="email" placeholder="Email address" id="email" class="form__input" required/>
                            <label for="email" class="form__label">Email address</label>
                        </div>
                        <div class="form__group input-group u-margin-bottom-medium">
                          <div class="input-group-prepend">
                            <span class=" input-group-text">
                            <FontAwesomeIcon icon={faComment} size="3x" className="form__icon"/>
                            </span>
                        </div>
                        <textarea type="text"  name="message" placeholder="Message" id="message-input" class="form__input" required></textarea>
                            <label for="message-input" class="form__label"> Message </label>
                        </div>
                        <div class="form__group">
                            <button class="btn btn--pink" type="submit" value="register"> Submit &rarr;</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Contact;