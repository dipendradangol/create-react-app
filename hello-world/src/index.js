import React, { component } from 'react';
import { render } from 'react-dom'; 

/* 
const customStyle = {
    'color' : 'yellow',
    'background-color' : 'grey'
    
};
 */
/* 
const helloMessage = <div>
    <img src='./images/death-valley.jpg'></img>
    <h4>Dipendra dangol</h4>
    <div style={ customStyle}>64 likes</div>
    </div>

 */
/* const imgSrc = <img src = './images/lapland'></img>;

const helloMessage = React.createElement(
    'div',
    null,
    [
        React.createElement(
            'img',{
                key: 0,
                src : imgSrc
            },
            null
            
            
        ),
        React.createElement(
            'h4',
            {key : 1},
            'Dipendra Dangol'

        ),
        React.createElement(
            'div',
            {key : 2,
            style : customStyle
            },
            '64 likes'
        )
    ]
); */

/**
 * something
 */

 //

/* class HelloMessage extends React.Component{
    render(){
        console.log(this.props)

        return (
            <div>
                <h1>{this.props.msg}</h1>
                <h1>{this.props.msg2}</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <HelloMessage msg= "Good Morning" msg2= " Good Evening" />, 
    document.getElementById('root')
);
 */


/* 
const greetingMessages = {
    moring : ' Good Morning ',
    afternoon : ' Good Afternoon ',
    evening : ' Good Evening ',
}

const  today = new Date();



class HelloMessage extends React.Component{
    
    fetchGreetingMessage = time => {
        if (time <= 12){
            return this.props.morningMessage;
        } else if (time<= 18) {
            return this.props.afternoonMessage;
        } else {
            return this.props.eveningMessage;
        }
    }
    
    render(){
        return (
            <div>
            <h1>{this.fetchGreetingMessage(this.props.timeNow)}</h1>
            <h1>the time now is {this.props.today}</h1>
            
            </div>
            )
        }
    }

ReactDOM.render(
    <HelloMessage 
        morningMessage = {greetingMessages.morning}
        afternoonMessage = {greetingMessages.afternoon}
        eveningMessage = {greetingMessages.evening}
        //timeNow ={hour}
        //today={now}
     />, 
    document.getElementById('root')
);
    */
   


/* const Movie = ( props ) => {
    return (<div>
        <h2>{props.title}</h2>
        <p><{props.imdb}/p>
        <p><{props.starting}/p>
    </div>)
} */

// excercises

const movieList =[ 
    {
        title: "Twilight",
        imdb : "8",
        starting : " Kristen, robert ",
    },
    {
        title: "Avatar",
        imdb : "7",
        starting : " Jake, Grace",
    },
    {
        title: "Harry potter",
        imdb : "9",
        starting : " emma watson, rupert, tom ",
    },
];

//functional component method
/* function Movie(props) {
    return <div>
        <h2>{props.title}</h2>
        <p>{props.imdb}</p>
        <p>{props.staring}</p>
    </div>
}

function Cinema(props){ //composing component
    console.log(props);
    return <div>
        {props.movies.map( (movie, index) => {
            return <Movie 
                key = {index}
                title = {movie.title} 
                imdb = {movie.imdb}
                staring = {movie.staring}
            />
        })}
    </div>
} */

// class component method

class Movie extends React.Component {
    render(){
        return <div>
            <h2>{this.props.title}</h2>
            <p>{this.props.imdb}</p>
            <p>{this.props.staring}</p>
        </div>
    }
}

class Cinema extends React.Component{ 
    constructor (props) {
        super (props);

        this.state = {
            superpaiva: true,
            open: false
        }

        this.toggleCampaign = this.toggleCampaign.bind(this);
    }

    toggleCampaign(){
        this.state({
            superpaiva:! this.state.superpaiva
        });
    }

    render(){
        console.log(this.props)
    }
    
    render(){
        console.log('The value of this.state.superpaiva is currently');
        console.log(this.state.superpaiva);

        return <div>
            <div> The superpaiva is now up? 
            {this.state.superpaiva ? <span>Yes!</span> :
            <span>NOPE!</span>}
            </div>

        <button onClick={this.toggleCampaign}>update</button>
        
        {this.props.movies.map( (movie, index) => {
            return <Movie 
                key = {index}
                title = {movie.title} 
                imdb = {movie.imdb}
                staring = {movie.staring}
            />
        })}
    </div>
    }
}

render(
    <Cinema movies = {movieList}/>,
    document.getElementById('root')
);