import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { StyledHeader, StyledRepositoryInfo, StyledIssues } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <StyledHeader>
        <img src={logoImg} alt="Github Explorer" />

        <Link to="/">
          <FiChevronLeft size={16} /> Voltar
        </Link>
      </StyledHeader>

      <StyledRepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong>reponame</strong>
            <p>description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>number</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>number</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>number</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </StyledRepositoryInfo>

      <StyledIssues>
        <Link to="/repository/${repository.full_name">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </StyledIssues>
    </>
  );
};

export default Repository;
