import API from '../API'

const UserActions = {
  login: API.login,
  register: API.register,
  getProfile: API.getProfile,
  logout: API.logout
}

export default UserActions;
