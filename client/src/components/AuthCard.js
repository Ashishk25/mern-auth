import GoogleBtn from "./GoogleBtn";
import FacebookBtn from "./FacebookBtn";

const AuthCard = (props) => {
    return (
        <div class="ml3">
            <article class=" h-100  mw8 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class=" tc flex flex-column">
                    <div class="b">LogIN</div>
                    <div class=" mt4 mb4">
                        <GoogleBtn callback={props.callback.google} />
                    </div>
                    <div >
                        <FacebookBtn callback={props.callback.facebook} />
                    </div>
                </div>
            </article>
        </div>
    )
}
export default AuthCard;