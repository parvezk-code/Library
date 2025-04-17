class LoginForm extends HTMLElement {
  constructor() {
      super();
      this.render();
      this.setupEventListeners();
  }

  render() {
      this.innerHTML = `
          <div class="form-header">
              <h2>Welcome Back</h2>
              <p>Please enter your credentials to login</p>
          </div>
          <form id="loginForm">
              <div class="form-group">
                  <label for="username">Username or Email</label>
                  <input type="text" id="username" name="username" required placeholder="Enter your username or email">
              </div>
              <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" id="password" name="password" required placeholder="Enter your password">
              </div>
              <div class="remember-forgot">
                  <div class="remember-me">
                      <input type="checkbox" id="remember" name="remember">
                      <label for="remember">Remember me</label>
                  </div>
                  <a href="#" class="forgot-password">Forgot password?</a>
              </div>
              <button type="submit">Login</button>
          </form>
          <div class="signup-link">
              Don't have an account? <a href="#">Sign up</a>
          </div>
      `;
  }

  setupEventListeners() {
      const form = this.querySelector('#loginForm');
      form.addEventListener('submit', (e) => {
          e.preventDefault();
          const username = this.querySelector('#username').value;
          const password = this.querySelector('#password').value;
          const rememberMe = this.querySelector('#remember').checked;
          
          // Dispatch custom event with login data
          this.dispatchEvent(new CustomEvent('login-submitted', {
              detail: { username, password, rememberMe },
              bubbles: true
          }));
      });

      // Forgot password link
      this.querySelector('.forgot-password').addEventListener('click', (e) => {
          e.preventDefault();
          this.dispatchEvent(new CustomEvent('forgot-password', {
              bubbles: true
          }));
      });

      // Sign up link
      this.querySelector('.signup-link a').addEventListener('click', (e) => {
          e.preventDefault();
          this.dispatchEvent(new CustomEvent('signup-requested', {
              bubbles: true
          }));
      });
  }
}

customElements.define('login-form', LoginForm);

// Example usage of event listeners
document.querySelector('login-form').addEventListener('login-submitted', (e) => {
  console.log('Login submitted:', e.detail);
  // Here you would typically make an API call
});

document.querySelector('login-form').addEventListener('forgot-password', () => {
  console.log('Forgot password clicked');
});

document.querySelector('login-form').addEventListener('signup-requested', () => {
  console.log('Sign up requested');
});