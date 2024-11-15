import { FaMobileAlt, FaLaptop } from "react-icons/fa";
import "./HowToInstall.css";
import Step from "../step/Step.js";

function HowToInstall() {
  return (
    <div className="howToInstall background-white">
      <div className="computer">
        <FaLaptop className="icon-computer" />
        <p>para baixar a versão para computador</p>
        <a href="https://github.com/tcc-Iago-Lucas/game/releases/download/v_1.0.0_wapi_pc/NoobSecurity.zip" >clique aqui</a>
        <div >
          <p>Para instalar para computador é so seguir esses passos:</p>
          <Step title="passo 1" text="Baixe a versão para computador" srcImg="/install/computer/step_1.png" altImg="imagem que clica no link para baixar" />
          <Step title="passo 2" text="Selecione a pasta onde quer salvar o arquivo compactado" srcImg="/install/computer/step_2.png" altImg= "diretorio" />
          <Step title="passo 3" text="Após baixar e selecionar a pasta, descompacte" srcImg="/install/computer/step_3.png" altImg="descompactar zip" />
          <Step title="passo 4" text="Entre na pasta descompactada e clique no game.exe" srcImg="/install/computer/step_4.png" altImg="clique no game.exe" />
          <Step title="passo 5" text="escolha novo jogo e jogue!" srcImg="/install/computer/step_5.png" altImg="clique novo jogo e jogue!" />
        </div>

      </div>
      <div className="mobile">
        
          <FaMobileAlt size={200} className='icon-mobile' />
          <p>para baixar a versão para celular</p>
          <a href="https://github.com/tcc-Iago-Lucas/game/releases/download/v_1.0.0_wapi/NoobSecurity.apk" >clique aqui</a>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis semper enim, nec rhoncus sem tincidunt sit amet. Duis porttitor ligula eu arcu pulvinar, non ornare justo pharetra. Maecenas sed purus cursus, molestie sem ac, facilisis enim. Sed mattis, arcu vel viverra congue, augue quam pretium felis, eu sodales turpis elit condimentum elit. Suspendisse euismod consequat mauris, quis aliquet urna gravida ac. Mauris euismod, augue vel pharetra imperdiet, velit nunc consequat lacus, eu mattis dui mauris in ante. Donec condimentum mattis rutrum. Phasellus eget ornare ante, a ultrices libero. Cras iaculis sagittis nibh at gravida. Vivamus imperdiet tincidunt nulla sit amet sodales. Etiam mauris est, malesuada a lacus sed, elementum fringilla est. Aenean at leo et arcu auctor lacinia sit amet eget nisl. Morbi sed arcu id mi consequat interdum eget eget eros. In volutpat ex ut justo fermentum lacinia.

Suspendisse cursus nunc sed condimentum tristique. Cras sodales, massa at rutrum fringilla, nisl felis gravida felis, et pellentesque justo tortor non augue. Curabitur et nisl ultricies, tincidunt neque nec, vehicula lectus. Vestibulum in ex eget augue ornare molestie eu eu justo. Nunc nulla diam, egestas posuere arcu ac, cursus molestie odio. Maecenas fermentum sit amet mauris sed rhoncus. Fusce posuere molestie bibendum. Vivamus luctus accumsan ligula, id ullamcorper eros varius vitae.

In lobortis eleifend fringilla. Suspendisse ultrices, orci eu congue gravida, tortor massa pulvinar nisi, a dictum magna risus quis ante. Duis suscipit facilisis pretium. Proin est diam, ullamcorper non blandit sed, lobortis in velit. Vestibulum et turpis et arcu sagittis ultricies. Sed tempus, sapien quis efficitur consequat, neque massa porttitor dolor, quis pretium arcu tortor quis ex. Vestibulum facilisis lectus et felis euismod, vel hendrerit eros placerat. Etiam dictum eget diam id tristique. Cras at feugiat est, id bibendum enim. Nulla lobortis ante dui, egestas pharetra velit congue et. In hac habitasse platea dictumst. Donec ornare ullamcorper nisl, vitae facilisis nulla. Aenean scelerisque placerat arcu, non ultrices ligula varius sed.

Sed vel orci nisi. Morbi ac dolor quam. Donec hendrerit feugiat lacus, eget blandit ante faucibus sit amet. Cras cursus risus sem, cursus tincidunt leo lacinia vel. Nulla aliquam sodales sodales. Aenean lacinia nibh a sem finibus tincidunt. Curabitur viverra orci a arcu malesuada sollicitudin. Nam sed ullamcorper metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin et gravida metus. Vestibulum metus ex, viverra quis nunc a, porttitor dignissim ante.

Vestibulum non mollis dui. Nullam pellentesque eu nulla non elementum. In hac habitasse platea dictumst. Phasellus consequat quam et velit viverra porttitor. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam est sapien, feugiat in bibendum eu, tempus quis sem. Duis ullamcorper, diam dictum luctus interdum, ex massa aliquet urna, et sollicitudin enim quam a leo. Praesent a erat ac libero tincidunt congue sit amet at felis. Duis condimentum metus non dolor facilisis, quis ornare enim suscipit.</p>
        </div>
      </div>
    </div>
  )
}

export default HowToInstall