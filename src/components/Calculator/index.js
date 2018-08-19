import React, {Component} from 'react'

import Screen from '../Screen'
import Button from '../Button'

import {CALC_BUTTONS, BUTTON_TYPES, ACTIONS, OPERATION_TYPES} from '../../constants'

import './style.css'

export default class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            store: 0,
            current: '',
            next: '',
            operation: null,
            isOn: true
        }
    }

    async _handleOperationClick(config){
        let {current, next, operation} = this.state;
        const {operationType} = config;

        if(current && next && operation) await this._handleActionClick(CALC_BUTTONS.calc)

        if(operationType === OPERATION_TYPES.ON_NEXT){
            this.setState({
                current: next ? next : current,
                next: '',
                operation: config
            });
        }else {
            let {current, next} = this.state;
            this.setState({
                current: config.action(parseInt(next || current)),
                next: '',
                operation: null
            })
        }
    }

    _handleNumberClick(config){
        let next = `${this.state.next}${config.value}`
        this.setState({ next });
    }

    _handleActionClick(config){
        switch (config.action) {
            case ACTIONS.GO_OFFLINE: {
                this.setState({
                    isOn: false,
                    store: 0,
                    current: '',
                    next: '',
                    operation: null
                });
                break;
            }
            case ACTIONS.MEMORY_CLEAR: {
                this.setState({store: ''});
                break;
            }
            case ACTIONS.MEMORY_RECALL: {
                let {next, store} = this.state;
                this.setState({next: `${next}${store}`});
                break;
            }
            case ACTIONS.MEMORY_MINUS: {
                let {current, next, store} = this.state;
                this.setState({store: eval(`${store}-${next || current}`)});
                break;
            }
            case ACTIONS.MEMORY_PLUS: {
                let {current, next,  store} = this.state;
                this.setState({store: eval(`${store}+${next || current}`)});
                break;
            }
            case ACTIONS.CLEAR_NEXT: {
                this.setState({next: ''});
                break;
            }
            case ACTIONS.CLEAR_ALL: {
                this.setState({
                    store: 0,
                    current: '',
                    next: '',
                    operation: null
                });
                break;
            }
            case ACTIONS.CALCULATE: {
                let {current, next, operation} = this.state;
                if(current && next && operation){
                    this.setState({
                        current: operation.action(parseInt(current), parseInt(next)),
                        next: '',
                        operation: null
                    })
                } else if(next && operation){
                    this.setState({
                        current: next,
                        next: '',
                        operation:null
                    })
                }
                break;
            }

        }
    }

    async _handleButtonClick(config){
        if(!this.state.isOn) await this.setState({isOn: true})
        switch (config.type) {
            case BUTTON_TYPES.OPERATION:
                this._handleOperationClick(config);
                break;
            case BUTTON_TYPES.NUMBER:
                this._handleNumberClick(config);
                break;
            case BUTTON_TYPES.ACTION:
                this._handleActionClick(config);
                break;
        }
    }

    _renderButtons(){
        const btnKeys = Object.keys(CALC_BUTTONS);
        return btnKeys.map(btnKey => {
            return <Button
                        key={btnKey}
                        id={btnKey}
                        config={CALC_BUTTONS[btnKey]}
                        onClick={_ =>
                            this._handleButtonClick(CALC_BUTTONS[btnKey])}
                        />
        })
    }

    render (){
        console.log(CALC_BUTTONS);
        const {store, current, next, isOn} = this.state;
        return (
            <div className="calculator">
                <Screen
                    current={current}
                    next={next}
                    store={store}
                    isOn={isOn}/>
                <div className="calculator_buttons">
                    <div className="model">SL-300SV</div>
                    {this._renderButtons()}
                </div>
            </div>
        )
    }
}
