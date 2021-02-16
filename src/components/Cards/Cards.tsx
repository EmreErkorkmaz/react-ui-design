import CardItem from './CardItem/CardItem';
import styles from './Cards.module.scss';

const Cards = () => {
    return (
        <div className={styles['cards']}>
            <h1>Check out these EPIC Destinations!</h1>
            <div className={styles['cards__container']}>
                <div className={styles['cards__wrapper']}>
                    <ul className={styles['cards__items']}>
                        <CardItem 
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem 
                        src="images/img-2.jpg"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services"
                        />
                        <CardItem 
                        src="images/img-4.jpg"
                        text="Experience Football on Blah blah Mountains"
                        label="Sport"
                        path="/products"
                        />
                        <CardItem 
                        src="images/img-8.jpg"
                        text="Ride through the Sahara Desert on a guided camel tour"
                        label="Adrenaline"
                        path="/sign-up"
                        />
                        <CardItem 
                        src="images/img-2.jpg"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
