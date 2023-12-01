import React from 'react'
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';
let content;
let isLoggedIn = false;

function Ketxuat() {
    return (
        
        <div>
        {isLoggedIn ? (
          <AdminPanel />
        ) : (
          <LoginForm />
        )}
      </div>
          
        
      );
}

export default Ketxuat