import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, searchKeyword) => {
    const [repositories, setRepositories] = useState();

    const { data, loading, refetch, networkStatus } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: { orderBy, orderDirection, searchKeyword },
        options: {
            awaitRefetchQueries: true
        },
        notifyOnNetworkStatusChange: true,
    });

    useEffect(() => {
        if (!loading) {
            setRepositories(data.repositories);
        }
    }, [loading]);

    return { repositories, loading, refetch, networkStatus };
};

export default useRepositories;