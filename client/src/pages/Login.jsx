import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({
    prn: "",
    password: "",
  });

  // Function to handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", user);
    // You can add validation or API call here
  };

  return (
    <section>
      <main>
        <div className="section-login">
          <div className="container grid grid-two-cols">
            {/* Image Section */}
            <div className="login-image">
            </div>

            {/* Login Form Section */}
            <div className="login-form">
              <h1 className="main-heading mb-3">Login Form</h1>

              <form onSubmit={handleSubmit}>
                {/* PRN Input */}
                <div>
                  <label htmlFor="prn">PRN</label>
                  <input
                    type="text"
                    name="prn"
                    placeholder="Enter your PRN"
                    id="prn"
                    required
                    autoComplete="off"
                    value={user.prn}
                    onChange={handleInput}
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    id="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
