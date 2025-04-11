import React from 'react'

const login = () => {
  return (
    <>
    <div class="login-container">
    <h2>Login</h2>
    <form id="loginForm">
      <input type="text" id="username" placeholder="Username" required />
      <div class="input-wrapper">
        <input type="password" id="password" placeholder="Password" required />
        <span class="toggle-password" onclick="togglePassword()">Show</span>
      </div>
      <button type="submit">Login</button>
    </form>
    </div>

    <script>
        
    </script>
    </>
  )
}

export default login