
import React, { Component } from 'react';
import AuthCard from './AuthCard';
import ProfileCard from './ProfileCard';
import axios from "axios";

class ProfilePage extends Component{
    state ={
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
    }
    saveUser = userdata => {
        axios({
            method: "POST",
            url: "https://mern-auth1712.herokuapp.com/api/googlelogin",
            data: { data: userdata },
        }).then(response => {
            console.log("user verified and saved");
        });
    }
/// arrow func to solve bind() issue
    responseFacebook = response => {
        console.log(response);
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
            account: "facebook"

        });
        this.saveUser(this.state)
    }
    responseGoogle = response => {
        console.log(response);
        this.setState({
            isLoggedIn: true,
            userID: response.profileObj.googleId,
            name: response.profileObj.name,
            email: response.profileObj.email,
            picture: response.profileObj.imageUrl,
            account: "google"

        });
        this.saveUser(this.state)
    }
    logout = () => {
        this.setState({
            isLoggedIn: false,
            userID: '',
            name: '',
            email: '',
            picture: '',
            account: '',
        });
    }

    render() {
        let fbContent;
        const calls ={
            facebook: this.responseFacebook, 
            google: this.responseGoogle,
        };
        if(this.state.isLoggedIn){
            fbContent = (
                <ProfileCard data ={this.state} logout= {this.logout}/>
            )
        }
        else {
            fbContent = (
            <AuthCard  callback ={calls} />
            );
        }
        return (
            fbContent
        )
    }

}


export default ProfilePage;