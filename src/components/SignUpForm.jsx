import { useState } from "react";

export default function SignUpForm({token, setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);



  async function handleSubmit(event) {
    event.preventDefault();
    try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password})
        })
        const result = await response.json();
        setToken(result.token)
        console.log(result);
        } catch (setError) {
            console.error(setError);
        }     
    }
    return (
    <>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            
      <form onSubmit={handleSubmit}>
                
        <label id = "bar1">
                    Username:                            <input
            value={username}
            onChange={(e) => setUsername(e.target.value)} required minLength="8"
            id = "bar1"
          />
                  
        </label>
                
        <label>Password:                                   <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} required
          />    

        </label>
                <button>Submit</button>
              
      </form>
          
    </>
  );
}
