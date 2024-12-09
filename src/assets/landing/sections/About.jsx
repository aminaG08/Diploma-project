import React from 'react'
import logo from '../../images/About/about-logo-icon.svg'

export default function About() {
    const handleClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetPosition = targetElement.offsetTop - 50;
            window.scrollTo({
                top: offsetPosition,
            });
        }
    };  

  return (
    <div className='about'>
        <div className='about__container'>
            <div className='about__left'>
                <h2 className='about__title'>Quite Minds</h2>
                <p className='about__slogan'>'Finding Peace Within and Around You'</p>
                <p className='about__subtitle'>
                    Social anxiety is a widespread issue that affects a large number of people.
                    Our website is designed to help you overcome social anxiety. 
                    Please follow the guidelines and fill out the questionnaire (provided below) 
                    honestly to achieve the best results.
                </p>
                <div className='about__btn-wrapper'>
                    <a href="#therapy" className='about__btn' onClick={handleClick}>
                        go to cognitive therapy
                    </a>
                </div>
            </div>
            <div className='about__right'>
                <p className='about__right-wrapper'>
                    <img src={logo} width={120} height={120} alt='logo'/>
                    Based on T. Beck <br />
                    Cognitive Behavioral Therapy (CBT)
                </p>
                <a className='about__right-who' href='https://beckinstitute.org/about/dr-aaron-t-beck/' target="_blank">
                    Who is T. Beck ?
                </a>
            </div>
        </div>
    </div>
  )
}
