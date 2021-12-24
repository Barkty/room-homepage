import styles from './Home.module.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import hero from '../../components/images/desktop-image-hero-1.jpg'
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <div className={styles.home__wrapper}>
            <Navbar />
            <CarouselProvider totalSlides={3} naturalSlideHeight={35} naturalSlideWidth={100} className={styles.carousel__provider}>
                <Slider>
                    <Slide index={0} className={styles.slide__item}>
                        <div className={styles.slide__parent}>
                            <div className={styles.slide__child1}>
                                <img src={hero} alt='Hero' className={styles.slide__img}/>
                            </div>
                            {/* <div className={styles.slide__child}>
                                <div className={styles.container}>
                                    <h2 className={styles.container__title}>Discover innovative ways to decorate</h2>
                                    <p>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
                                    <p className={styles.container__shop}><Link to='/shop'>Shop now</Link></p>
                                </div>
                            </div> */}
                        </div>
                    </Slide>
                    <Slide index={1}>
                        <div className={styles.slide__parent}>
                            <div className={styles.slide__child}>
                                <img src={hero} alt='Hero' className={styles.slide__img}/>
                            </div>
                            <div className={styles.slide__child}></div>
                        </div>
                    </Slide>
                    <Slide index={2}>
                        <div className={styles.slide__parent}>
                            <div className={styles.slide__child}>
                                <img src={hero} alt='Hero' className={styles.slide__img}/>
                            </div>
                            <div className={styles.slide__child}></div>
                        </div>
                    </Slide>
                </Slider>
            </CarouselProvider>
        </div>
    )
}

export default Home;