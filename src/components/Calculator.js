import SpaIcon from '@material-ui/icons/Spa'
import { useState } from "react"
import styles from '../styles/Calculator.module.css';
import Modal from "./Modal";

export default function Calculator() {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const [IMC, setIMC] = useState(0);

    function calculateImc() {
        const imc = weight / (height / 100 * height / 100);
        setTimeout(() => {
            setIMC(imc.toFixed(2));
        }, 100);

    }

    function handleChange(e) {
        const { name, value } = e.target;

        if (name === 'weight')
            setWeight(value);
        else
            setHeight(value);

    }

    function resetModal() {
        setIMC(0)
    }

    return (

        <div className={styles.container}>

            <div>
                <h3>IMC</h3>
                <p>(Índice de Massa Corporal)</p>

            </div>

            <input type='number' name='weight' onChange={handleChange} value={weight} placeholder='Kg' />
            <input type="number" name='height' onChange={handleChange} value={height} placeholder='cm' />

            <button onClick={calculateImc}>
                <SpaIcon fontSize='large' />
            </button>

            {(IMC > 0) && <Modal imc={IMC} func={resetModal} />}
        </div>
    )
}
