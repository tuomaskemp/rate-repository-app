import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    const [repositories, setRepositories] = useState();

    const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network'
    });

    useEffect(() => {
        if (!loading) {
            setRepositories(data.repositories);
        }
    }, [loading]);

    return { repositories, loading, refetch };
};

export default useRepositories;