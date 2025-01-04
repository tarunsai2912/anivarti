const baseURl = import.meta.env.VITE_REACT_APP_BASE_URL;

export const AUTH_ENDPOINTS = {
  LOGIN: `${baseURl}/auth/login`,
  REGISTER: `${baseURl}/auth/register`,
  ALLUSERS:`${baseURl}/auth/all`,
  DELETEUSER: `${baseURl}/auth/delete`
}
