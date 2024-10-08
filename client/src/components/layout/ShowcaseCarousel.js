import React, { useState, useEffect, useRef } from 'react';
import './ShowcaseCarousel.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ShowcaseCarousel = ({ title, children, width }) => {
    const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 (skip duplicated last item)
    const containerRef = useRef(null);
    const cardWidth = parseInt(width, 10);
    const containerWidth = 3.2 * cardWidth;

    const prevIndex = currentIndex - 1 < 0 ? children.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex + 1 > children.length - 1 ? 0 : currentIndex + 1;

    const extendedChildren = [
        React.cloneElement(children[children.length - 1]),
        ...children,
        React.cloneElement(children[0]),
    ];

    const scrollLeft = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const scrollRight = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

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

    useEffect(() => {
        if (currentIndex === 0) {
            setTimeout(() => {
                setCurrentIndex(children.length);
            }, 300);
        }
        if (currentIndex === extendedChildren.length - 1) {
            setTimeout(() => {
                setCurrentIndex(1);
            }, 300);
        }
    }, [currentIndex, children.length, extendedChildren.length]);

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
                    {extendedChildren.map((child, index) => (
                        <div
                            key={`carousel-item-${index}`}
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
                            {child}
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
