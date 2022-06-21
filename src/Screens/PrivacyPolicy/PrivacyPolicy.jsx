import React from 'react'
import BannerSecondary from '../../Components/BannerSecondary/BannerSecondary'
import privacyPolicy from '../../JSON DB/privacyPolicy'
import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  return (
    <main className="privacy-policy">
        <BannerSecondary 
            title="Privacy Policy"
            description="A statement about Kalpatru policy on content displayed in the website and users’ personal details"
            image="privacy policy.png"
        />
        <div className="privacy-wrapper container-padding">
            <h1 className="section-title">Attention Investors!</h1>
            <p className="section-para">
                We, at Kalpatarumulti.com, acknowledge and accept that the personal details that you 
                impart to us, is to be kept in strict confidentiality and to use the information only in the 
                manner which would be beneficial to our customers. We consider our relationship with 
                you as invaluable and strive to respect and safeguard your right to privacy.
                <br /> <br />
                We shall protect the personal details received from you with the same degree of care, 
                but no less than a reasonable degree of care, to prevent the unauthorized use, 
                dissemination, or publication of these information as we protect our own confidential 
                information of a like nature.
                <br /> <br />
                We shall use the personal information to improve our service to you and to keep you 
                updated about our new product or information that may be of interest to you. The 
                information collected from you would be used in the right spirit and context in which it 
                is intended to be used. Your information would be used by us to process your trading 
                request and to carry out the settlements of your obligations
                <br /><br />
                We would ensure that we collect personal information only to the extent it is necessary 
                to administer our services in the best possible manner and what is required under the 
                various regulations of Indian Laws. To ensure high quality services and high degree of 
                value addition to you, we may combine the information given by you on the web or 
                through other channels.
                <br /><br />
                Under certain circumstances we may be required to share the information given by you 
                with the third parties, where we feel they can contribute to add value and improve the 
                quality of services imparted by us to you. We shall take all reasonable steps to ensure that 
                the confidentiality of your information is maintained by imposing strict confidentiality 
                standards on all the third parties with whom we part these information. In all circumstances 
                we shall ensure that your personal information is protected by strict confidentiality 
                agreement. We shall not allow any third parties to retain your personal information longer 
                than what is warranted by the nature of services rendered.
                <br /><br />
                We would also impart your personal information wherever it is required to be disclosed under 
                law to any of the governmental agency or regulatory bodies.
                <br /><br />
                We ensure that the personal information given to us by you on the web is placed in the 
                secured portion of our web-site. We use the most advanced encryption technology, 
                Secure Socket Layer (SSL), to ensure that the information transmitted between you and
                 us across the Internet is safe and cannot be accessed by any outsider. SSL has been 
                universally accepted on the World Wide Web for authenticated and encrypted communication 
                between clients and servers.
                <br /><br />
                To ensure security of access to the personal information and transaction details, the 
                access to the secured zone of our website is restricted by the unique login ID and 
                Password selected by you. You should be very careful in handling the ID and password 
                and you should ensure that you do not reveal it to anybody, nor do you keep it in writing. 
                You should keep changing your password periodically.
                <br /><br />
                To ensure safety of your trading access, our technology automatically logs you out of the 
                site if no activity is registered for 30 minutes. However you should ensure that each time 
                you leave your terminal you log yourself out. This prevents someone else from accessing 
                your account if you leave your computer and your session has not "timed out"
                <br /><br />
                To enable us serve you better, it is necessary that your personal information available with 
                us is updated and accurate. Our web-site enables you to update your personal information. 
                You can also send us an e-mail at Customer Service and we shall ensure that your 
                information is updated and protected from any misuse or unauthorised revelation.
                <br /><br />
                <b>KALPATARU MULTIPLIER LTD.</b> welcomes your comments regarding this privacy statement. 
                If you believe that <b>KALPATARU MULTIPLIER LTD.</b> has not adhered to this privacy statement, 
                please contact <b>KALPATARU MULTIPLIER LTD.</b> by email at info@kalpatarumulti.com, and we 
                will use commercially reasonable efforts to promptly determine and remedy the problem.
            </p>
        </div>

        <ul className="privacy-list">
            {
                privacyPolicy.map((item,index) => (
                    <li key={index}>
                        <img src="/icons/privacy/privacy.png" className='privacy-icon' alt="" />
                        <span className='section-para'>{item}</span>
                    </li>
                ))
            }
        </ul>
    </main>
  )
}
