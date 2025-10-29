import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library3';
import Clock from './chapter_04/Clock';
//import CommentList from './chapter_05/CommentList';
import CommentList from './chapter_05_js/CommentList';
import NotificationList from './chapter_06/NotificationList';
import NotificationList1 from './chapter_06/NotificationList1';
import NotificationList2 from './chapter_06/NotificationList2';
import NotificationList3 from './chapter_06/NotificationList3';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
    <NotificationList1 />
);
*/

root.render(
  <React.StrictMode>
    <NotificationList3 />
  </React.StrictMode>
);

/*
setInterval( () => {
  root.render(React.createElement(Clock));
},1000);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

