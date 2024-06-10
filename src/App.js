import logo from './logo.svg';
import './App.css';

function App() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log("Enter your email :" +email,"\n","Enter your password : " +password);
  }
  return (
  <div class="color">
    <form onSubmit={handleSubmit}>
          <div class="App">
             <div class='Login'>
                <div class='LoginBox'>
                  <div class='LoginHeader'>
                    Login
                  </div>
                    <div class="input">
                      <input class="email" name="email" placeholder="Enter your email"/><br></br>
                      <input class="password"name="password" placeholder="Enter your password" type="password"/>
                    </div>
                  <div style={{display:"flex",justifyContent:"center"}}>
                  <button class="submitbutton">Login</button>
                   </div>
                </div>
             </div></div>
      </form>
  </div>
  );
}
export default App;