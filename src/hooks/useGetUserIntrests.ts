import useQuery from './api/useQuery';

const useGetUserIntrests = (userId: string) => {
  const pathVariables = {userId};

  const {
    data: userIntrestsData,
    isLoading: isUserIntrestsLoading,
    error: userIntrestsError,
  } = useQuery('user/:userId/interests', pathVariables);

  return {userIntrestsData, isUserIntrestsLoading, userIntrestsError};
};

export default useGetUserIntrests;
