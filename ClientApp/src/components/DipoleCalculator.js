import React, { Component, useRef, useState } from 'react';
import { FrequencySelector } from "./FrequencySelector";

export default function DipoleCalculatorFunction() {
    const [targetFrequency, setTargetFrequency] = useState('146.520');
    const [legLength, setLegLength] = useState();
    const [step, setStep] = useState('0.01');
    const freqRef = useRef(FrequencySelector)

    function calculate(freq) {
        //freqRef.current.getFrequency();
        setTargetFrequency(freq);
        setLegLength(468 / freq);
    }

    return (
        <div>
            <h1>Dipole Calculator</h1>
            
            <p>A simple dipole calculator, enter what frequency you're targetting and see what length you need to make the legs to get close to resonance.</p>
            <p>The forumla for calculating in feet is 468/frequency</p>
            <div>
                <div>
                    Frequency Step (kHz):
                    <select value={step} onChange={e => setStep(e.target.value)}>
                        <option value="0.0025">2.5k</option>
                        <option value="0.005">5.0k</option>
                        <option value="0.00625">6.25k</option>
                        <option value="0.01">10.0k</option>
                        <option value="0.0125">12.5k</option>
                        <option value="0.02">20.0k</option>
                        <option value="0.025">25.0k</option>
                        <option value="0.05">50.0k</option>
                    </select>
                </div>

                <div>
                    Frequency(Hz):
                    <input name="targetFrequency" type="number" placeholder="146.520" step={step} min="1" value={targetFrequency} onChange={e => calculate(e.target.value)} />
                </div>
                {/*<freqRef.current onChange={e=>calculate(e.target.value)} />*/}
                <div>
                    Leg Length(ft):
                    {legLength}
                </div>
            </div>
        </div>
    );
    
}

export class DipoleCalculator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {<DipoleCalculatorFunction />}
            </>
        );
    }
}