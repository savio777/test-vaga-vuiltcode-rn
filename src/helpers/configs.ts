export const configsApi = (accessToken: string | undefined) => {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
};
