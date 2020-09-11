import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { StyledTitle, StyledForm, StyledRepositories } from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  // const [repositories, setRepositories] = useState();

  // function handleAddRepository() {

  // }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <StyledTitle>Explore repositórios no Github</StyledTitle>
      <StyledForm>
        <input placeholder="Digite o nome do repositório" />
        <button>Pesquisar</button>
      </StyledForm>

      <StyledRepositories>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/53819717?s=460&u=287971358ea3307a32f7a6769ead871996ec33cb&v=4"
            alt="Caio Rosa"
          ></img>
          <div>
            <strong>CaioRosa/discord-interface</strong>
            <p>Easy peasy highly scalable ReactJS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </StyledRepositories>
    </>
  );
};

export default Dashboard;
