import React, { useState, useEffect, useRef } from 'react';
import './ShowcaseCarousel.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdPendingActions } from "react-icons/md";

const ShowcaseCarousel = ({ title, items, itemKeyPrefix, width }) => {
    const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 (skip duplicated last item)
    const containerRef = useRef(null);
    const gap = 20;
    const cardWidth = parseInt(width, 10);
    const containerWidth = 3.2 * cardWidth + 2 * gap;

    // Duplicating items to achieve the infinite loop
    const extendedItems = [items[items.length - 1], ...items, items[0]];

    const prevIndex = currentIndex - 1;
    const nextIndex = currentIndex + 1;

    const scrollLeft = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const scrollRight = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    // Scroll to center the current item and handle wrapping logic
    useEffect(() => {
        const container = containerRef.current;
        const currentCard = container.children[currentIndex];
        const containerCenter = container.offsetWidth / 2;
        const cardCenter = currentCard.offsetLeft + currentCard.offsetWidth / 2;
        const newScrollPosition = cardCenter - containerCenter;

        container.scrollTo({
            left: newScrollPosition,
            behavior: 'smooth',
        });
    }, [currentIndex]);

    // Handle wrapping effect after transition
    useEffect(() => {
        if (currentIndex === 0) {
            // When reaching the duplicated last item, jump to the real last item
            setTimeout(() => {
                setCurrentIndex(items.length);
            }, 300); // Delay to allow smooth transition
        }
        if (currentIndex === extendedItems.length - 1) {
            // When reaching the duplicated first item, jump to the real first item
            setTimeout(() => {
                setCurrentIndex(1);
            }, 300);
        }
    }, [currentIndex, items.length, extendedItems.length]);

    return (
        <div className="scrollable-showcase">
            <h1>{title}</h1>
            <div className="showcase-wrapper">
                <button className="scroll-button left" onClick={scrollLeft}>
                    <IoIosArrowBack size={80} />
                </button>
                <div
                    className="showcase-container"
                    ref={containerRef}
                    style={{
                        width: `${containerWidth}px`,
                    }}
                >
                    {extendedItems.map((item, index) => (
                        <div
                            key={`${itemKeyPrefix}-${index}`}
                            className={`showcase-card ${index === currentIndex
                                    ? 'current'
                                    : index === prevIndex || index === nextIndex
                                        ? 'side'
                                        : ''
                                }`}
                            style={{
                                minWidth: `${width}px`,
                                maxWidth: `${width}px`,
                            }}
                        >
                            <img src={item.image} alt={item.title} className="showcase-image" />
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            {item.products && <p>Products: {item.products.join(', ')}</p>}
                            {item.location && <p>{item.location}</p>}
                            {item.rating && <p>Overall Rating: {item.rating}</p>}
                            {item.vetted !== undefined && (
                                <p>
                                    Vetted:{' '}
                                    {item.vetted ? (
                                        <IoMdCheckmarkCircleOutline size={20} color="green" />
                                    ) : (
                                        <MdPendingActions size={20} />
                                    )}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={scrollRight}>
                    <IoIosArrowForward size={80} />
                </button>
            </div>
        </div>
    );
};

export default ShowcaseCarousel;
