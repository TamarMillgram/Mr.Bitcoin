import { userService } from "../../services/userService";

export default {
    state() {
        return {
            user: userService.getLoggedInUser() || userService.getEmptyUser()

        };
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user;
        },
    },
    actions: {
        loadUser({ commit }) {
            commit({ type: "setUser", user: userService.getLoggedInUser() });
        },
        userLogin({ commit }, { username }) {
            const user = userService.signup(username);
            commit({ type: "setUser", user });
        },
        userLogout({ commit }) {
            userService.logout();
            commit({ type: "setUser", user: userService.getEmptyUser() });
        },
    },
    getters: {
        user(state) {
            return state.user;
        },
    },
};