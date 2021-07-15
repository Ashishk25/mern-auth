import logo from '../logo192.png';

const Header = () => {
    return (<div>
        <header>
            <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
            <a class="navbar-brand " href="#">
            <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top me-2" />
                Mern Task
            </a>
             </div>
            </nav>
        </header></div>
    )
}
 export default Header;