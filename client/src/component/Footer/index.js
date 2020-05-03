import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf, faEnvelope, faPhone  } from '@fortawesome/free-solid-svg-icons'
import Resume from "../../assets/images/Resume.pdf"

const Footer = () => {
    return (
        <footer className="footer">
        <div className="row">
            <div className="col-1-of-3">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item"> <a href="https://github.com/elhamposhtiban" className="footer__link"><FontAwesomeIcon icon={faGithub} size="3x" className="media-link"/></a> </li>
                        <li className="footer__item"> <a href="https://www.linkedin.com/in/elham-poshtiban-2a40a4149/" className="footer__link"><FontAwesomeIcon icon={faLinkedin} size="3x" className="media-link"/></a> </li>
                        <li className="footer__item"> <a href={Resume} className="footer__link"><FontAwesomeIcon icon={faFilePdf} size="3x" className="media-link"/></a> </li>
                        <li className="footer__item"> <a href="mailto:elham.poshtiban@gmail.com" className="footer__link"><FontAwesomeIcon icon={faEnvelope} size="3x" className="media-link"/></a> </li>
                        <li className="footer__item"> <a href="tel:2814259682" className="footer__link"><FontAwesomeIcon icon={faPhone} size="3x" className="media-link"/></a> </li>
                    </ul> 
                </div>
            </div>
            <div className="col-2-of-3">
                <p className="footer__copyright">
                     copyright&copy;by Elham Poshtiban.
                     <br/>
                      you are 100% allowed to use this webpage for both personal and commercial use but NOT to claim it as your own design.A credit to author, Elham poshtiban, is of course highly appreciated!
                </p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;