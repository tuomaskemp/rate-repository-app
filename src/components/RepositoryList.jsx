import { useNavigate } from 'react-router-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories, refetch, fetchMore } = useRepositories({ first: 8 });
  const navigate = useNavigate();

  const onEndReach = () => {
    fetchMore();
  };

  return <RepositoryListContainer 
            repositories={repositories} 
            navigate={navigate} 
            refetchRepositories={refetch}
            onEndReach={onEndReach}
          />;
};

export default RepositoryList;