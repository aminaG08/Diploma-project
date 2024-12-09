import React, { useState } from 'react';

export default function Steps() {
  const challenges = [
    'Say hello to a stranger.',
    'Make eye contact with someone for 5 seconds.',
    'Ask a colleague or classmate about their weekend.',
    'Give someone a compliment.',
    'Attend a small social gathering.',
    'Introduce yourself to someone new.',
    'Speak up during a group discussion.',
    'Order food or coffee in person.',
    'Smile at 3 people you encounter today.',
    'Call a friend or family member for a chat.',
    'Focus on your breathing when you feel anxious.',
    'Practice saying positive affirmations to yourself every day.'
  ];

  const [currentChallenge, setCurrentChallenge] = useState('');

  const generateChallenge = () => {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    setCurrentChallenge(challenges[randomIndex]);
  };

  return (
    <div className='steps'>
      <div className='steps__container'>
        <h2 className='steps__title'>
          Generate challenge of today
        </h2>
        <div className='steps__wrapper'>
          <button className='steps__button' onClick={generateChallenge}>
            Generate Challenge
          </button>
          {currentChallenge && (
            <p className='steps__challenge'>
              Today's Challenge: {currentChallenge}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
