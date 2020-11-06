import React from 'react';
import firebase from "./sevices/firebaseService"

function App() {
  const messaging = firebase.messaging();
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
  
    })
  return (
    <div className="App">
      <h1>First PWA APP</h1>
     {/* <button onClick={getConfigureNotification}>Config</button> */}
    </div>
  );
}

export default App;
