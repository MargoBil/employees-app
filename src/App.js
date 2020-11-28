import React, {useEffect} from 'react';
import {getUsers} from './redux/users/operations';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersSelector} from './redux/users/selectors';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector);
  console.log(users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return <><p>hello</p></>;
}

export default App;
