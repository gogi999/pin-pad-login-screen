import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const PinCodeInput = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [count, setCount] = useState(0);
    const [pin, setPin] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [numLimit, setNumLimit] = useState(false);

    let buffer = [];
    buffer.push(<p key="p">Max number of pin digits is 4!</p>);

    const addDigit = (digit) => {
        if (pin.length < 4) {
            setPin(pin + digit);
        } else if (pin.length >= 4) {
            setNumLimit(true);
        }
    }

    const clear = () => {
        setPin('');
        setIsHidden(true);
        setNumLimit(false);
    }

    const enter = () => {
        setIsHidden(false);
        setNumLimit(false);

        if (pin === '1234') {
            setPin('OK');
        } else {
            setPin('ERROR');
            setCount(count + 1);
            if (count >= 2) {
                setPin('LOCKED');
                setIsDisabled(true);
                setTimeout(() => {
                    setIsDisabled(false);
                    setCount(0);
                    setPin('');
                }, 30000);
            }
        }
    }

    return (
        <div className="container">
            <header>
                Pin-Pad
            <div className="pinNumberMax">{numLimit && buffer}</div>
            </header>
            <Display text={pin} isHidden={isHidden} numLimit={numLimit} key="d" />
            <Button key={1} caption="1" action={addDigit} disabled={isDisabled} />
            <Button key={2} caption="2" action={addDigit} disabled={isDisabled} />
            <Button key={3} caption="3" action={addDigit} disabled={isDisabled} />
            <br />
            <Button key={4} caption="4" action={addDigit} disabled={isDisabled} />
            <Button key={5} caption="5" action={addDigit} disabled={isDisabled} />
            <Button key={6} caption="6" action={addDigit} disabled={isDisabled} />
            <br />
            <Button key={7} caption="7" action={addDigit} disabled={isDisabled} />
            <Button key={8} caption="8" action={addDigit} disabled={isDisabled} />
            <Button key={9} caption="9" action={addDigit} disabled={isDisabled} />
            <br />
            <Button key="c" caption="clear" action={clear} disabled={isDisabled} />
            <Button key={0} caption="0" action={addDigit} disabled={isDisabled} />
            <Button key="e" caption="enter" action={enter} disabled={isDisabled} />
        </div>
    )
}

export default PinCodeInput;
