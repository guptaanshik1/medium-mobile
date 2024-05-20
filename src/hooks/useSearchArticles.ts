import useQuery from './api/useQuery';

const useSearchArticles = (query?: string) => {
  const searchParams = {query: query || ''};

  const {
    data: articlesSearchData,
    isLoading: isArticlesLoading,
    error: articlesSearchError,
  } = useQuery('/search/articles', {}, searchParams);

  return {articlesSearchData, isArticlesLoading, articlesSearchError};
};

export default useSearchArticles;
