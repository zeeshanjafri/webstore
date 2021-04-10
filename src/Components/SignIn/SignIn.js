import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from 'react-dom';


function SignIn() {
    return(
        <div>
        <h2>Sign In</h2>
        
        {/* sign in form */}
        <form>
            <label>Username:  
                <input type="text" name="username" />
            </label>
                <input type="submit" value="Submit" />
        </form>
        
        <form>
            <label>Password: {     }
                <input type="text" name="password" />
            </label>
                <input type="submit" value="Submit" />
        </form>



        </div>
      );

}
  
export default SignIn;