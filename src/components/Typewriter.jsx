import React, { useState, useEffect } from 'react'

function Typewriter({text,delay}) {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        if(currentIndex < text.length){
            const timeout = setTimeout(()=>{
                setCurrentText(prevtext => prevtext+text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            },110);
            
            return ()=>clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

  return (
    <span>{currentText}</span>
  )
}

export default Typewriter