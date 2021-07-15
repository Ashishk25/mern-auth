const crrTime = new Date().toLocaleTimeString();
const crrDate = new Date().toLocaleDateString();

const DateTime = () => {
    return(<div>
        <article class="mw5  center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div class="tc">
            <h1 class="f3 mb2">Current Date</h1>
            <h2 class="f5 fw4 gray mt0">{crrDate}</h2>
            </div>
        </article>
        <article class="mw5  center bg-white br3 pa3 pa4-ns ba b--black-10">
            <div class="tc">
            <h1 class="f3 mb2">CurrentTime</h1>
            <h2 class="f5 fw4 gray mt0">{crrTime}</h2>
            </div>
        </article>
        </div>
    );
}
export default DateTime;