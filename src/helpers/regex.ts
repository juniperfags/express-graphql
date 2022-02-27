const authRegex = (bearerToken: string) => {
  const regex = new RegExp(/^Bearer\s.{1,}$/);

  return regex.test(bearerToken);
};

export const getAuthToken = (
  bearerToken: string | undefined
): string | undefined => {
  return bearerToken
    ? authRegex(bearerToken)
      ? bearerToken.slice(0, 7)
      : undefined
    : undefined;
};
