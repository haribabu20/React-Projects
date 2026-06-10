
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const UseAuth = () => useContext(AuthContext);

export default UseAuth;

/*

Initially i just called like this,
  const UseAuth = useContext(AuthContext), but this is wrong

  UseAuth is a component, so it should have a return statement.
  Since it has only one line, we can ignore the return and { } keywords.
*/

