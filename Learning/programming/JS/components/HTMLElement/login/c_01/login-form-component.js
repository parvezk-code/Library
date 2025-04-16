class LoginForm extends HTMLElement {
    connectedCallback() {
      if (this._initialized) return
      this._initialized = true
  
      this.render()
      this.querySelector('form')?.addEventListener('submit', this.handleSubmit.bind(this))
    }
  
    render() {
      this.innerHTML = `
        <form>
          <label>
            Username:
            <input type="text" name="username" required />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
          <br />
          <button type="submit">Login</button>
          <div class="message"></div>
        </form>
      `
    }
  
    handleSubmit(event) {
      event.preventDefault()
      const form = event.target
      const username = form.username.value.trim()
      const password = form.password.value.trim()
  
      const messageEl = this.querySelector('.message')
  
      if (username && password) {
        messageEl.textContent = `Welcome, ${username}!`
        this.dispatchEvent(new CustomEvent('login-success', {
          detail: { username, password },
          bubbles: true,
        }))
        form.reset()
      } else {
        messageEl.textContent = 'Please fill in both fields.'
      }
    }
  }
  
  customElements.define('login-form', LoginForm)
  