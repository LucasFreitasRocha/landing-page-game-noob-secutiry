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
          <p>Para instalar para computador (windows) é so seguir esses passos:</p>
          <Step title="passo 1" text="Baixe a versão para computador" srcImg="/install/computer/step_1.png" altImg="imagem que clica no link para baixar" />
          <Step title="passo 2" text="Selecione a pasta onde quer salvar o arquivo compactado" srcImg="/install/computer/step_2.png" altImg="diretorio" />
          <Step title="passo 3" text="Após baixar e selecionar a pasta, descompacte" srcImg="/install/computer/step_3.png" altImg="descompactar zip" />
          <Step title="passo 4" text="Entre na pasta descompactada e clique no game.exe" srcImg="/install/computer/step_4.png" altImg="clique no game.exe" />
          <Step title="passo 5" text="divirta se jogando!" srcImg="/install/computer/step_5.png" altImg="clique novo jogo e jogue!" />
        </div>

      </div>
      <div className="mobile">
        <FaMobileAlt className='icon-mobile' />
        <p>para baixar a versão para celular</p>
        <a href="https://github.com/tcc-Iago-Lucas/game/releases/download/v_1.0.0_wapi/NoobSecurity.apk" >clique aqui</a>
        <div>
          <p>Para instalar para celular (android) é so seguir esses passos:</p>
          <Step title="passo 1 download apk" text="Baixe a versão para andriod" srcImg="/install/mobile/step_download_mobile.png" altImg="imagem que clica no link para baixar" />
          <Step title="passo 2 permissão" text="Verificar se tem permissão de instalar app de terceiros na finalizaçao do download" srcImg="/install/mobile/step_permission_1.png"
            altImg="permissão de instalação" />
          <Step title="passo 2.1 permissão" text="Ou ir nas configurações do celular e pesquisar 'fontes desconhecidas'" srcImg="/install/mobile/Step_config_permission_1.png"
            altImg="permissão de instalação em configurações do celular" />
          <Step title=" " text=" " srcImg="/install/mobile/Step_config_apply_permission.png"
            altImg="permissão de instalação em configurações do celular 2" />
          <Step title="Passo 3 instalação " text="Após fazer o dowload clique no arquivo baixado e em instalar" srcImg="/install/mobile/step_instalar_1.png"
            altImg="Após fazer o dowload clique no arquivo baixado e  em instalar" />
          <Step title=" " text="O google play protect ira te pergunta se você quer instalar caso ainda não tenha dado permissão, clique em mais detalhes"
            srcImg="/install/mobile/step_instalar_2.png"
            altImg="O google play protect ira te pergunta se você quer instalar caso ainda não tenha dado permissão, clique em mais detalhes" />
          <Step title=" " text="E depois em instale mesmo assim"
            srcImg="/install/mobile/step_instalar_3.png"
            altImg="E depois em instale mesmo assim" />
          <Step title="passo 4 " text="Procure o jogo em seus aplicativos"
            srcImg="/install/mobile/step_abrir_jogo_menu.png"
            altImg="E depois em instale mesmo assim" />
          <Step title="passo 5" text="divirta se jogando !"
            srcImg="/install/mobile/play.png"
            altImg="E depois em instale mesmo assim" />
        </div>
      </div>
    </div>
  )
}

export default HowToInstall