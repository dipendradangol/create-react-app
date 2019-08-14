import React from 'react';
import ReactDOM from 'react-dom';
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
class HelloMessage extends React.Component{
    render(){
        return (
            <div class ='btn'>
                <h1>Hello from react component></h1>
            </div>
        )
    }
}

ReactDOM.render(
    <HelloMessage/>, //helloMessage, <h1>Hello world</h1>
    document.getElementById('root')
);



// JSX = javascript as XML to create react elements


