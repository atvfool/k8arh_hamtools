import React, { Component, createRef} from 'react';

export class FrequencySelector extends Component {
    inputRef = createRef();

    constructor(props) {
        super(props)
        this.state = {
            targetFrequency: props.frequency,
            step: '0.01'
        };
    }

    changeStep = (e) => {
        console.log('step', e.target.name, e.target.value);
        this.setState((previous) => { return { ...previous, step: e.target.value }; });
    };

    changeFrequency = (e) => {
        console.log('frequency', e.target.name, e.target.value);
        this.props.onChange(e.target.name, e.target.value);
        this.setState((previous) => { return { ...previous, targetFrequency: e.target.value }; });
    };

    render() {
        return (
            <>
                <div>
                    Frequency Step (kHz):
                    <select name="frequencyStep" value={this.state.step} onChange={e => this.changeStep(e)}>
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
                    Frequency(MHz):
                    <input name="targetFrequency" type="number" placeholder="146.520" step={this.state.step} min="1" value={this.state.targetFrequency} onChange={e => this.changeFrequency(e)} />
                </div>
            </>
        );
    }
}