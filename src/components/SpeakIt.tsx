import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const SpeakIt = () => {
  const [text, setText] = useState('This is some test text');
  const [hardVoice, _setVoice] = useState('Google UK English Female')

  useEffect(() => {
    type VoiceObject = {
      [name: string]: string;
    }
    
    const voiceObject: VoiceObject = {};
    
    speechSynthesis.getVoices().forEach((voice: SpeechSynthesisVoice) => {
      const englishVoices = ['en-US', 'en-GB', 'en-AU', 'en-CA', 'en-IE']
      if (englishVoices.includes(voice.lang)) {
        voiceObject[voice.name] = voice.lang;
      }
    });

    console.log(voiceObject);
  }, [])

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'en-US';

      const femaleVoice = speechSynthesis.getVoices().find((voice) => {
        if (voice.lang.slice(0,2) === 'en') {
          console.log(voice)
        }
        if (hardVoice) {
          return voice.name === hardVoice;
        }
        return voice.name.includes('Female');
      });

      console.log(femaleVoice)
  
      if (femaleVoice) {
        msg.voice = femaleVoice;
      }
      speechSynthesis.speak(msg);
    }
  };

  return (
    <div>
      <h1>Speak It!</h1>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <Button variant="contained" onClick={handleSpeak}>Speak it</Button>
    </div>
  );
};

export default SpeakIt;