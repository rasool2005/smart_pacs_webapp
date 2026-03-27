
export const getApiBaseUrl = () => {
  const hostname = window.location.hostname;
  // If we're on localhost or 127.0.0.1, use localhost. 
  // Otherwise use the current hostname (useful for mobile devices hitting the server).
  const host = (hostname === 'localhost' || hostname === '127.0.0.1') 
    ? '127.0.0.1' 
    : hostname;
  return `http://${host}:8000/api`;
};

export const API_BASE_URL = getApiBaseUrl();
