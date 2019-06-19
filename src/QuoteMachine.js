import React, {
    Component
} from 'react'

export default class QuoteMachine extends Component {
    render() {
        return (<div id="quote-box">
            <h1>Random Quote Machine</h1>
            <div>
                <p id="text"></p>
                <button></button>
            </div>
        </div>
        )
    }
}