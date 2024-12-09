import React from 'react'
import socialmedia from '../../images/Causes/causes-socialmedia-icon.png'
import nosport from '../../images/Causes/causes-nosport-icon.png'
import fastfood from '../../images/Causes/causes-fastfood-icon.png'
import nosocialmedia from '../../images/Causes/causes-lesssm-icon.png'
import sport from '../../images/Causes/causes-sport-icon.png'
import healthyfood from '../../images/Causes/causes-healthyfood-icon.png'


export default function Causes() {
  return (
    <div id="recomendations" className='causes'>
        <div className='causes__container'>
            <h2 className='causes__title statistics__title'>Recomendations</h2>
            <p className='causes__subtitle'>Small Steps, Big Changes: Your Path to Less Stress and Better Health</p>
            <div className='causes__wrapper'>
              <div className='causes__wrapper-block'>
                <img className='causes__wrapper-block-img' src={socialmedia} width={40} height={40} about='social media'/>
                <h2 className='causes__wrapper-block-title'>Social Media</h2>
                <p className='causes__wrapper-block-subtitle'>Social media has been proven to lead to isolation and cause anxiety.</p>
              </div>
              <div className='causes__wrapper-block'>
                <img className='causes__wrapper-block-img' src={nosport} width={40} height={40} about='no sport'/>
                <h2 className='causes__wrapper-block-title'>Small Sport Activity</h2>
                <p className='causes__wrapper-block-subtitle'>Lack of physical activity worsens the condition</p>
              </div>
              <div className='causes__wrapper-block'>
                <img className='causes__wrapper-block-img' src={fastfood} width={40} height={40} about='fast food'/>
                <h2 className='causes__wrapper-block-title'>Unhealthy Diet</h2>
                <p className='causes__wrapper-block-subtitle'>When a person experiences stress, he begins to eat fast food, which has a negative effect.</p>
              </div>
            </div>
            <p className='causes__replace'>REPLACE IT TODAY</p>
            <div className='causes__wrapper'>
              <div className='causes__wrapper-block'>
                <img className='causes__wrapper-block-img' src={nosocialmedia} width={40} height={40} about='fast food'/>
                <h2 className='causes__wrapper-block-title'>Less social media use</h2>
                <p className='causes__wrapper-block-subtitle'>Limit screen time on social media or use blockers.</p>
              </div>
              <div className='causes__wrapper-block'>
                <img className='causes__wrapper-block-img' src={sport} width={40} height={40} about='fast food'/>
                <h2 className='causes__wrapper-block-title'>Sport Activity</h2>
                <p className='causes__wrapper-block-subtitle'>Engage in physical activity.Start small if you haven't done any sports before.</p>
              </div>
              <div className='causes__wrapper-block'>
                <img className='causes__wrapper-block-img' src={healthyfood} width={40} height={40} about='fast food'/>
                <h2 className='causes__wrapper-block-title'>Healthy Diet</h2>
                <p className='causes__wrapper-block-subtitle'>Replace soda, chips, sweets and fast food with balanced and healthy food.</p>
              </div>
            </div>
        </div>
    </div>
  )
}
