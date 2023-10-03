// add following script to your <head> section of index.html
// <script src="https://accounts.google.com/gsi/client" async defer></script>
// https://developers.google.com/identity/gsi/web/guides/display-button#javascript

// https://console.cloud.google.com/apis/dashboard?pli=1
// create a project
// OAuth : OAuth Key, external, Project=Experiment, AppName=Experiment
// OAuth : Application_type=Web application
// OAuth : Authorized JS origins= http://localhost:5555  http://localhost
// Go to OAuth consent screen---> edit APP --> save and continue ---> scopes
// ---> Add or remove scopes --> 
// --> select two scopes ---> /auth/userinfo.email,  .../auth/userinfo.profile

const handleCredentialResponse = (response) => {
  console.log("Encoded JWT ID token: " + response.credential);
  console.log("response " + response);
  for (var key in response){
    console.log( key + ": " + response[key]);
  }
}

const login = (parent) => {

  CLIENT_ID = "312380408298-dh9h2jmuvt86ahcvooka3e2akdei2qd6.apps.googleusercontent.com";
  init_params = { client_id: CLIENT_ID, callback: handleCredentialResponse };
  button_params = { theme: "outline", size: "large" };
  
  google.accounts.id.initialize(init_params);
  google.accounts.id.renderButton( parent,  button_params);
}


window.onload = () => {
  login(document.getElementById("buttonDiv"))
}
