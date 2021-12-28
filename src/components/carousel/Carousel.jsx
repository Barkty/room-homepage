import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Children, cloneElement, useEffect, useState } from 'react';
import styles from './Carousel.module.css';

export const CarouselItem = ({ children, width}) => {
    return (
        <div className={styles.carousel__item} style={{ width: width}}>
            {children}
        </div>
    )
}

const Carousel = ({ children}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = Children.count(children) - 1;
        } else if (newIndex >= Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1);
        }, 1000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    });

    return (
        <div className={styles.carousel}>
            <div className={styles.carousel__inner} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {Children.map(children, (child, index) => {
                    return cloneElement(child, { width: '100%' })
                })}
            </div>
            <div className={styles.carousel__indicators}>
                <button onClick={() => {
                    updateIndex(activeIndex - 1);
                }}>
                    <FontAwesomeIcon icon={['fas', 'chevron-left']}/>
                </button>
                <button onClick={() => {
                    updateIndex(activeIndex + 1);
                }}>
                    <FontAwesomeIcon icon={['fas', 'chevron-right']}/>
                </button>
            </div>
        </div>
    )
}

export default Carousel;