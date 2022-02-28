import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories, refetch } = useRepositories();
  const navigate = useNavigate();
  const [repositoryNodes, setRepositoryNodes] = useState([]);

  useEffect(() => {
    const repositoryNodesList = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];
    setRepositoryNodes(repositoryNodesList);
  }, [repositories]);

  return <RepositoryListContainer 
            repositories={repositoryNodes} 
            navigate={navigate} 
            refetchRepositories={refetch}
          />;
};

export default RepositoryList;