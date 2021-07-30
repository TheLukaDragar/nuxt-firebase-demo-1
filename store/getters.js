export default {
  isLoggedIn: (state) => {
    try {
      return state.authUser.uid !== null
    } catch {
      return false
    }
  },
  UserInfo: (state) => {
    try {
      return state.authUser
    } catch {
      return false
    }
  },
}
