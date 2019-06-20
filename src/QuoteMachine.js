import React, {
    Component
} from 'react'

export default class QuoteMachine extends Component {

    constructor(props) {
        super(props);
        this.newQuote = this.newQuote.bind(this);
        this.state = {
            quotes: [{
                quote: "I couldn't be more chuffed if I were a badger at the start of the mating season.",
                author: "Ian Holloway"
            },
            {
                quote: "Please don't call me arrogant, but I'm European champion and I think I'm a special one.",
                author: "Jose Mourinho"
            },
            {
                quote: "I wouldn't say I was the best manager in the business. But I was in the top one.",
                author: "Brian Clough"
            },
            {
                quote: "My greatest challenge is not what's happening at the moment, my greatest challenge was knocking Liverpool right off their f*****g perch. And you can print that.",
                author: "Sir Alex Ferguson"
            },]
        }
    }

    componentWillMount() {
        this.quote = this.state.quotes[Math.floor(Math.random() * 4)];
        console.log(this.quote);
    }
    newQuote = () => {
        this.quote = this.state.quotes[Math.floor(Math.random() * 4)];
        this.forceUpdate();
        console.log(this.quote);
    }

    render() {
        return (<div id="quote-box">
            <h1 id="title">Random Football Quotes</h1>
            <div>
                <p id="text">{this.quote.quote}</p>
                <p id="author">{this.quote.author}</p>
                <section className="buttons">
                    <button onClick={this.newQuote} className="btn" id="new-quote">New Quote</button>
                    <a className="btn" href={`https://www.twitter.com/intent/tweet?text=${this.quote.quote}+-+${this.quote.author}`} id="tweet-quote">Tweet Quote</a>
                </section>
            </div>
        </div>
        )
    }
}