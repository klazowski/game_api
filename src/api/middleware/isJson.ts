import { Request } from 'express';

const isJson = (request: Request): boolean => {
  const requestType: string | undefined = request.get('content-type');
  if (requestType === 'application/json') return true;
  return false;
};

export { isJson };
