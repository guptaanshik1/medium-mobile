export type TPathVariables = Record<string, string> | undefined;
export type TSearchParams = Record<string, string> | undefined;

export const getFullUrl = (
  url: string,
  pathVariables: TPathVariables,
  queryParams: TSearchParams,
) => {
  let fullUrl: string = '';

  if (pathVariables) {
    fullUrl = Object.keys(pathVariables).reduce((acc, curr) => {
      return acc.replace(`:${curr}`, encodeURIComponent(pathVariables[curr]));
    }, url);
  }

  if (queryParams) {
    const searchParams = new URLSearchParams();

    Object.entries(queryParams).forEach(([key, value]) =>
      searchParams.append(key, value),
    );
    fullUrl += `?${searchParams.toString()}`;
  }

  return fullUrl;
};

/***
 pathVariables: { postId: postId, userId: userId }
  queryParams: { search="native", sort="asc" }
  
  /post/:postId/user/:userId?search="native"&sort="asc"
 */
