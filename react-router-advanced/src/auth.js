export const auth = {
  isAuthenticated: false, // change to true to simulate login
  login() {
    this.isAuthenticated = true;
  },
  logout() {
    this.isAuthenticated = false;
  },
};
