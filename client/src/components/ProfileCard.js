

const ProfileCard = (props) => {
    return (
        <div class="mb3">
            <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 ">
            <div class="tc">
            <p class="b">PROFILE</p>
            <img src={props.data.picture} class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
            <h1 class="f3 mb2">{props.data.name}.</h1>
            <h2 class="f5 fw4 gray mt0">{props.data.email}</h2>
            <button type="button" class="btn btn-primary" onClick= {props.logout}>Logout</button>
            </div>
            </article>
        </div>
    )
}
 export default ProfileCard;