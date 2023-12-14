import { useState } from 'react';
import './App.css';

function App() {
    const [ourValue, setOurValue] = useState('');

    const buttonClicked = (btnName) => {
        let exactValue = ourValue + btnName;
        setOurValue(exactValue);
    }

    const handleOnChange = (e) => {
        e.preventDefault();
    }

    const handleOnClear = () => {
        setOurValue('');
    }

    const handleOnBackspace = () => {
        let newValue = ourValue.slice(0, ourValue.length - 1);
        setOurValue(newValue);
    }

    /*  const displayResult = () => {
       let result = eval(ourValue);
       setOurValue(result);
     } */

    const displayResult = () => {
        try {

            let result = eval(ourValue);

            // Check if the result is NaN or infinite
            if (isNaN(result) || !isFinite(result)) {
                throw new Error('Invalid operation');
            }

            setOurValue(result);
        } catch (error) {
            setOurValue('Error');
        }
    };

    return ( <
        >
        <
        section className = "container" >
        <
        main className = "calculatorSection" >
        <
        div className = "inputSection" >
        <
        input type = "text"
        className = "calcPart"
        value = { ourValue }
        onChange = { handleOnChange }
        /> < /
        div > <
        div className = "buttonSection" >
        <
        button className = "btn"
        onClick = {
            () => buttonClicked('9')
        } > 9 < /button> <
        button className = "btn"
        onClick = {
            () => buttonClicked('8')
        } > 8 < /button> <
        button className = "btn"
        onClick = {
            () => buttonClicked('7')
        } > 7 < /button> <
        button className = "btn"
        onClick = { handleOnBackspace } > C < /button> <
        button className = "btn"
        onClick = { handleOnClear } > AC < /button> <
        button className = "btn"
        onClick = {
            () => buttonClicked('6')
        } > 6 < /button> <
        button className = "btn"
        onClick = {
            () => buttonClicked('5')
        } > 5 < /button> <
        button className = "btn"
        onClick = {
            () => buttonClicked('4')
        } > 4 < /button> <
        button className = "btn"
        onClick = {
            () => buttonClicked(' + ')
        } > + < /button> <
        button className = "btn"
        onClick = {
            () => buttonClicked(' - ')
        } > - < /button> <
        button className = "btn"
        onClick = {
            () => buttonClicked('3')
        } > 3 < /button> <
        button className = "btn"
        onClick = {
            () => buttonClicked('2')
        } > 2 < /button> <
        button className = "btn"
        onClick = {
            () => buttonClicked('1')
        } > 1 < /button> <
        button className = "btn"
        onClick = {
            () => buttonClicked(' * ')
        } > * < /button> <
        button className = "btn"
        onClick = {
            () => buttonClicked(' / ')
        } > /</button >
        <
        button className = "btn"
        onClick = {
            () => buttonClicked('0')
        } > 0 < /button> <
        button className = "btn"
        onClick = {
            () => buttonClicked('0' + '0')
        } > 00 < /button> <
        button className = "btn"
        onClick = {
            () => buttonClicked('.')
        } > . < /button> <
        button className = "btn"
        onClick = {
            () => buttonClicked(' % ')
        } > % < /button> <
        button className = "btn"
        onClick = { displayResult } >= < /button> < /
        div > <
        /main> < /
        section > <
        />
    );
}

export default App;