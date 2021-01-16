import logo from './logo.svg';
import './App.css';

import ProfilPhoto from './componet/Profile/ProfilPhoto';
import FullName from './componet/Profile/FullName';
import Address from './componet/Profile/Address';

function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <FullName/>
      <Address/>

    </div>
  );
}

export default App;
