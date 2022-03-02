import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {

    const { data, loading, refetch, networkStatus, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables,
        options: {
            awaitRefetchQueries: true
        },
        notifyOnNetworkStatusChange: true,
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    
        if (!canFetchMore) {
          return;
        }
    
        fetchMore({
          variables: {
            after: data.repositories.pageInfo.endCursor,
            ...variables
          },
        });
      };

    return { 
        repositories: data?.repositories,
        fetchMore: handleFetchMore,
        loading, 
        refetch, 
        networkStatus,
        ...result,
    };
};

export default useRepositories;