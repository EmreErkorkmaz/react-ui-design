import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const CLASSES = [styles['btn--primary'], styles['btn--outline']];
const SIZES = [styles['btn--medium'], styles['btn--large']];

export const Button = (props: any) => {
    const {children, type, onClick, buttonStyle, buttonSize} = props;
    const checkButtonStyle = buttonStyle === "btn--primary" ? CLASSES[0] : CLASSES[1];
    const checkButtonSizes = buttonSize === "btn--medium" ?SIZES[0] : SIZES[1];

    return (
        <Link to="/sign-up" className={styles['btn-mobile']}>
            <button
              className={`${styles.btn} ${checkButtonStyle} ${checkButtonSizes}`}
              onClick={onClick}
              type={type}
            >
                {children}
            </button>
        </Link>
    )
}


