import React from 'react'

export default function Statistics() {
  return (
    <div id='statistics' className='statistics'>
        <div className='statistics__container'>
            <h2 className='statistics__title'>Did you know that?</h2>
            <div className='statistics__wrapper'>
                <div className='statistics__wrapper-block'>
                    <h3 className='statistics__wrapper-block-title'>1</h3>
                    <p className='statistics__wrapper-block-subtitle'>
                        People with social anxiety fear negative evaluation and often worry about being judged by others.
                    </p>
                </div>
                <div className='statistics__wrapper-block'>
                    <h3 className='statistics__wrapper-block-title'>2</h3>
                    <p className='statistics__wrapper-block-subtitle'>
                        Social anxiety can cause physical symptoms like sweating, trembling, and a racing heart.
                    </p>
                </div>
                <div className='statistics__wrapper-block'>
                    <h3 className='statistics__wrapper-block-title'>3</h3>
                    <p className='statistics__wrapper-block-subtitle'>
                        Many individuals with social anxiety avoid social situations, which can lead to isolation.
                    </p>
                </div>
                <div className='statistics__wrapper-block'>
                    <h3 className='statistics__wrapper-block-title'>4</h3>
                    <p className='statistics__wrapper-block-subtitle'>
                        People with social anxiety often engage in excessive self-criticism after social interactions.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
