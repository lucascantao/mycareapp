import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import styles from '../styles/Modal.module.css';

export default function Modal({ imc, func }) {

    function classification(value) {

        if (value < 18.5) {
            return "Baixo Peso";
        } else {
            if (value >= 25) {
                return "Sobrepeso";
            }
        }

        return "Peso normal";

    }

    return (
        <div className={styles.container}>

            <span>
                <h1>{imc}</h1>
                <p> {classification(imc)} </p>
            </span>

            <button onClick={func}>
                <ThumbUpIcon fontSize={'large'} />
            </button>
        </div>
    )
}
