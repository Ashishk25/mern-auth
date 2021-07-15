import GoogleLogin from 'react-google-login';


const responseFail = (response) => {
  console.log(response);
}

const GoogleBtn = (props) => {
    return <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_KEY}
    buttonText="Login with Google"
    onSuccess={props.callback}
    onFailure={responseFail}
    cookiePolicy={'single_host_origin'}
  />
}

export default GoogleBtn;