import './footer.scss'
import GooglePlay from '../../img/googlePlay.png'
import AppStore from '../../img/appStore.png'
import Facebook from '../../img/facebook.png'
import Twitter from '../../img/twitter.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="wrapper">
                <div className="left">
                    <div className="links">
                        <span>About Disney+ Hotstar</span>
                        <span>Terms Of Use</span>
                        <span>Privacy Policy</span>
                        <span>FAQ</span>
                        <span>Feedback</span>
                        <span>Careers</span>
                    </div>
                    <div className="disclamer">
                        <span>© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming  logos are service marks</span>
                        <br style={{ marginBottom: '5px' }} />
                        <span> of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</span>
                    </div>
                </div>
                <div className="right">
                    <div className="socials">
                        <img src={Facebook} alt="facebook" />
                        <img src={Twitter} alt="twitter"/>
                    </div>
                    <div className="store">
                        <img src={GooglePlay} alt="Google Play"/>
                        <img src={AppStore} alt="App Store"/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer