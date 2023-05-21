import { useContext } from 'react';
import UserContext from '../context/UserContext';

const UserInfo = () => {
  const { userName } = useContext(UserContext);
  return <h1>{userName}</h1>;
};

export default UserInfo;
