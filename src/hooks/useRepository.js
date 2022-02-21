import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (repositoryId) => {
    const [repository, setRepository] = useState();

    const { data, loading, refetch } = useQuery(GET_REPOSITORY, {
        fetchPolicy: 'cache-and-network',
        variables: { repositoryId: repositoryId }
    });

    useEffect(() => {
        if (!loading) {
            setRepository(data.repository);
        }
    }, [loading]);

    return { repository, loading, refetch };
};

export default useRepository;