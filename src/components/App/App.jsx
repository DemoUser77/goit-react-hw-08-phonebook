import React, { lazy } from 'react';
import { Navigate, Route, Routes} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { selectIsRefreshing } from 'redux/auth/auth-selectors';
import  Layout  from 'components/Layout';
import  PrivateRouter  from 'components/PrivateRoute';
import  RestrictedRoute  from 'components/RestrictedRoute';


const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
   const isRefreshing = useSelector(selectIsRefreshing);
 
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);



  return ( isRefreshing ? (
    <b>Refreshing user</b>) :(
    
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path='/register'
            element={<RestrictedRoute redirectTo='/login' component={<Register />} />} />
          
          <Route
            path='/login'
            element={<RestrictedRoute redirectTo='/contacts' component={<Login />} />} />
          
          <Route
            path='/contacts'
            element={<PrivateRouter redirectTo='/login' component={<Contacts />} />} />
          
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    )
  )

};



