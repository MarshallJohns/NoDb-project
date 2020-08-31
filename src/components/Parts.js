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
        return (
            <div className='parts'>
                {this.props.parts.map(element => {
                    return <Part
                        key={element.id}
                        data={element}
                        addToCart={this.props.addToCart} />

                })}
            </div>
        )
    }
}

