
import ProfilePage from "./components/ProfilePage";
import Header from './components/Header';
import Footer from './components/Footer';
import DateTime from './components/DateTime';

import style from './style.css'

function App() {
  return (
    <div className= {style}>
      <Header /> 
      <div class="flex justify-center">
        <DateTime />
        <ProfilePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
