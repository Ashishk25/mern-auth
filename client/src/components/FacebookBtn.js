import FacebookLogin from 'react-facebook-login';
import React, { Component } from 'react';


    
const   componentClicked = (response) => {
        console.log("fb btn clilcked");
}

const FacebookBtn = (props) => {

    return (<FacebookLogin
        appId="347412233422413"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={props.callback}
    />)

}


export default FacebookBtn;
//<div style= {{
//     width: '400px',
//     margin: 'auto',
//     background: '#f4f4f4',
//     padding: '20px'
// }}>
//     <img src={this,this.state.picture} alt={this.state.name} />
//     <h1>Welcome {this.state.name}</h1>
//     <h3>Email: {this.state.email}</h3>
// </div>