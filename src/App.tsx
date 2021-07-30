import React from "react";
import "./App.css";
import Post from "./components/Post";
import WarningComponent from "./components/WarningComponent";

function App() {
  return (
    <div className="container">
      <div className="profile">
        <div className="profileImgContainer">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
            alt="Imagem de perfil"
          />
        </div>
        <div className="description">
          <p>Juan Nascimento</p>
          <strong>@nascijuanzito</strong>
          <p>Front-end developer</p>
        </div>
        <div> Dados </div>
      </div>

      <div className="post">
        <div>escreva uma publicação</div>
        <Post isPrivate />
        <Post />
      </div>

      <div className="avisos">
        <WarningComponent title="Eficiencia">
          <div>
            <div>Atividades</div>
            <div>Projetos</div>
          </div>
          <div>total</div>
          <div>
            <div>Atividades</div>
            <div>Projetos</div>
            <div>Total</div>
          </div>
        </WarningComponent>
        <WarningComponent title="Aniversariantes">
          <div>listas de anv</div>
        </WarningComponent>
        <WarningComponent title="Pendencias">
          <div>Lista de pendencias</div>
        </WarningComponent>
      </div>
    </div>
  );
}

export default App;
