import React, { useEffect, useRef } from 'react';
import image from '../assets/image.png';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

function Banner() {
  const paragraphRef = useRef(null); // Create a reference for the paragraph

  useEffect(() => {
    // Split text into words for animation
    const paragraph = paragraphRef.current;
    const words = paragraph.textContent.split(' ').map(word => `<span class="word">${word}</span>`).join(' ');
    paragraph.innerHTML = words; // Replace content with spans around each word

    // GSAP word-by-word animation
    gsap.fromTo(paragraph.querySelectorAll('.word'),
      { opacity: 0, y: 20 }, // starting state
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'power2.out' } // stagger animation per word
    );
  }, []);

  return (
    <div className='max-w-screen-2xl h-screen bg-slate-900 flex flex-col items-center justify-center'>
      <p ref={paragraphRef} className='text-white text-center font-serif mt-6 font-bold text-2xl'>
       Welcome to the Git and Github Workshop
      </p>
      <img src={image} alt="Centered" className="w-auto max-w-xs animate-spin-horizontal" /> {/* Improved image class */}
      
      <p ref={paragraphRef} className='text-white text-center font-serif mt-6 font-semibold'>
        "Empowering Collaboration, Driving Innovation – Unlock the Power of Open Source with Git & GitHub"
      </p>

      <div className='mt-6'>
        <Link to="/InfoBoxcom">
          <button className="btn btn-primary">Introduction to Git and GitHub</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
