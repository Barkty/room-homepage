import styles from './Home.module.css'
//import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
//import 'pure-react-carousel/dist/react-carousel.es.css';
import hero from '../../components/images/desktop-image-hero-1.jpg'
import heroImg from '../../components/images/desktop-image-hero-2.jpg'
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import Carousel, { CarouselItem } from '../../components/carousel/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    
    return (
        <div className={styles.home__wrapper}>
            <Navbar />
            <Carousel>
                <CarouselItem>
                    <div className={styles.home__item}>
                        <div className={styles.carousel__child}>
                            <img src={hero} alt='Design' className={styles.carousel__image}/>
                        </div>
                        <div className={styles.carousel__notes}>
                            <h2 className={styles.item__title}>Discover innovative<br/>ways to decorate</h2>
                            <p className={styles.item__text}>We provide unmatched quality, comfort, <br/>and style for property owners across the country.<br/> Our experts combine form and function in bringing <br/>your vision to life. Create a room in your own <br/>style with our collection and make your property<br/> a reflection of you and what you love.</p>
                            <p className={styles.item__link}><Link to='/'>Shop now <FontAwesomeIcon icon={['fas', 'arrow-right']} className={styles.right}/></Link></p>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className={styles.home__item}>
                        <div className={styles.carousel__child}>
                            <img src={heroImg} alt='Design' className={styles.carousel__image}/>
                        </div>
                        <div className={styles.carousel__notes}>
                            <h2 className={styles.item__title}>We are available<br/> all across the globe</h2>
                            <p className={styles.item__text}>With stores all over the world, it's easy <br/>for you to find furniture for your home or <br/>place of business. Locally, we’re in most major <br/>cities throughout the country. Find the branch <br/>nearest you using our store locator. <br/>Any questions? Don't hesitate to contact us today.</p>
                            <p className={styles.item__link}><Link to='/'>Shop now <FontAwesomeIcon icon={['fas', 'arrow-right']} className={styles.right}/></Link></p>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className={styles.home__item}>
                        <div className={styles.carousel__child}>
                            <img src={hero} alt='Design' className={styles.carousel__image}/>
                        </div>
                        <div className={styles.carousel__notes}>
                            <h2 className={styles.item__title}>Discover innovative<br/>ways to decorate</h2>
                            <p className={styles.item__text}>We provide unmatched quality, comfort, <br/>and style for property owners across the country.<br/> Our experts combine form and function in bringing <br/>your vision to life. Create a room in your own <br/>style with our collection and make your property<br/> a reflection of you and what you love.</p>
                            <p className={styles.item__link}><Link to='/'>Shop now <FontAwesomeIcon icon={['fas', 'arrow-right']} className={styles.right}/></Link></p>
                        </div>
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
    )
}

export default Home;