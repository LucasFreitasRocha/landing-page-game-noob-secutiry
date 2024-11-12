
import './App.css';
import { FaMobileAlt, FaLaptop } from "react-icons/fa";

function App() {
  return (
    <div className="background">
      <div className="container">
        <div className="computer">
          <div>
            <FaLaptop className="icon-computer" />
          </div>
          <div>
            <p>para baixar a versão para pc</p>
            <a href="https://github.com/tcc-Iago-Lucas/game/releases/download/v_1.0.0_wapi_pc/NoobSecurity.zip" >clique aqui</a>
          </div>
        </div>
        <div className="mobile">
          <div>
            <FaMobileAlt size={200} className='icon-mobile' />
          </div>
          <div>
            <p>para baixar a versão para celular</p>
            <a href="https://github.com/tcc-Iago-Lucas/game/releases/download/v_1.0.0_wapi/NoobSecurity.apk" >clique aqui</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
