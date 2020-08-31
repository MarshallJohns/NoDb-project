import React, { Component } from 'react'
import Part from './Part'
import './Parts.css'


export default class Parts extends Component {
    constructor() {
        super()
        this.state = {
            motherboard: [],
            cpus: [],
            gpus: []
        }

    }





    render() {
        const motherboard = this.props.parts.filter(element => element.partType === 'motherBoard')
        const cpu = this.props.parts.filter(element => element.partType === 'cpu')
        const gpu = this.props.parts.filter(element => element.partType === 'gpu')

        return (
            <div className='parts'>
                <div>
                    <p>Motherboards:</p>
                    {motherboard.map(element => {
                        return <Part
                            key={element.id}
                            data={element}
                            addToCart={this.props.addToCart} />

                    })}
                </div>

                <div>
                    <p>Processors:</p>
                    {cpu.map(element => {
                        return <Part
                            key={element.id}
                            data={element}
                            addToCart={this.props.addToCart} />

                    })}
                </div>
                <hr />
                <div>
                    <p>Graphics Cards:</p>
                    {gpu.map(element => {
                        return <Part
                            key={element.id}
                            data={element}
                            addToCart={this.props.addToCart} />

                    })}
                </div>


            </div>
        )
    }
}

