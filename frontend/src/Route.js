import React from 'react';
import { Navigate, useRoutes} from 'react-router-dom';
import HomePage from './views/HomePage'; 
import ExplorePage from './views/ExplorePage'; 
import MessagePage from './views/MessagePage'; 
import ProfilePage from './views/ProfilePage';
import ReelsPage from './views/ReelsPage';

export default function Routes() {
  return useRoutes([
    // {
    //   path: '/login',
    //   element: <LoginPage/>,
    //   // children:[
    //   //   {
    //   //     path: '/home', 
    //   //     element: <HomePage/>,
    //   //     children:[
    //   //       {path: '/explore', element: <ExplorePage/>},
    //   //       {path: '/bookmarks', element: <BookmarkPage/>}
    //   //     ]
    //   //   },
    //   // ]
    // },
    {
      path: '/', 
          element: <HomePage/>,
          children:[
            {path: '/explore', element: <ExplorePage/>},
            {path: '/message', element: <MessagePage/>},
            {path: '/profile', element: <ProfilePage/>},
            {path: '/reel', element: <ReelsPage/>}
          ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}