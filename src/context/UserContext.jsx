import { createContext } from 'react';

const UserContext = createContext({
  userName: '',
  changeUserName: () => {},
});

export default UserContext;
