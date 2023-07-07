import React, { Component, useState } from 'react';

export default function FrequencySelectorFunction() {
    const [targetFrequency, setTargetFrequency] = useState('146.520');
    const [step, setStep] = useState('0.01');

    function getFrequency() {
        return targetFrequency;
    }

    return (
        <>
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
                <input name="targetFrequency" type="number" placeholder="146.520" step={step} min="1" value={targetFrequency} onChange={e => setTargetFrequency(e.target.value)} />
            </div>
        </>);
}

export class FrequencySelector extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<FrequencySelectorFunction />);
    }
}