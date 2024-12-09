import React from 'react'

export default function Therapy() {
  return (
    <div id="therapy" className='therapy'>
        <div className='therapy__container'>
            <h2 className='therapy__title causes__title statistics__title'>CBT in Practice: Techniques from Aaron T. Beck</h2>
            <p className='causes__subtitle'>Follow the exercises and recommendations and you will be able to improve your well-being.</p>
            <div className='therapy__blocks'>
                <div className='therapy__block'>
                    <h2 className='therapy__block-title'>Write Down Your Thoughts:</h2>
                    <h3 className='therapy__block-title-small'>1.Record Your Thoughts:</h3>
                    <p className='therapy__block-subtitle'>Whenever you experience social anxiety, write down exactly what you’re thinking and what makes you feel uncomfortable.</p>
                    <h3 className='therapy__block-title-small'>2.Identify Patterns:</h3>
                    <p className='therapy__block-subtitle'>Over time, you'll start noticing recurring negative thought patterns. Identify which thoughts come up the most often.</p>
                </div>
                <div className='therapy__block'>
                    <h2 className='therapy__block-title'>Shift Your Thinking:</h2>
                    <h3 className='therapy__block-title-small'>1.Question Your Thoughts:</h3>
                    <p className='therapy__block-subtitle'>Ask yourself questions to help challenge negative thoughts, like: "Do I have proof of this?" or "Is there another way to see this situation?"</p>
                    <h3 className='therapy__block-title-small'>2.Replace with Positive Thoughts:</h3>
                    <p className='therapy__block-subtitle'>Substitute negative thoughts with more realistic, positive ones. Instead of thinking, "Everyone is judging me," try thinking, "People are likely focused on themselves, not on judging me."</p>
                </div>
                <div className='therapy__block'>
                    <h2 className='therapy__block-title'>Solve Problems:</h2>
                    <h3 className='therapy__block-title-small'>1.Plan Your Actions:</h3>
                    <p className='therapy__block-subtitle'>Outline specific steps you can take to manage challenging situations. Preparing an action plan can reduce feelings of anxiety.</p>
                    <h3 className='therapy__block-title-small'>2.Take Small Steps:</h3>
                    <p className='therapy__block-subtitle'>Start with easier, less stressful situations and gradually work up to more challenging ones. This approach will help you build confidence.</p>
                </div>
            </div>
            <a className='therapy__btn about__btn'>
                Google questionnaire
            </a>
        </div>
    </div>
  )
}
