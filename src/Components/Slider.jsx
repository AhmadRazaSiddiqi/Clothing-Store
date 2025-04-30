import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
	<img src="/cart1.jpg" className='w-screen h-[60vh] object-cover' onDragStart={handleDragStart} role="presentation" />,
	<img src="/cart2.jpg" className=' w-screen h-[60vh] object-cover' onDragStart={handleDragStart} role="presentation" />,
	<img src="/cart3.jpg" className='w-screen h-[60vh] object-cover' onDragStart={handleDragStart} role="presentation" />,
];

export  const Slider = () => <AliceCarousel mouseTracking items={items} autoPlay infinite animationDuration={5000} disableButtonsControls />;