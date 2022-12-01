import authApi from '@/api/authApi'

// export const myAction = async ({ commit }) => {


// }


export const createUser = async ({ commit }, user ) => {

    const { username, email, password } = user

    try {
        
        const { data } = await authApi.post('users/', { username, email, password })
        const { token, refresh_token } = data

        await authApi.post(':update', { displayName: username, token, refresh_token })
        
        delete user.password
        commit('loginUser', { user, token, refresh_token })

        return { ok: true }

    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }

}


export const signInUser = async ({ commit }, user ) => {

    const { email, password } = user

    try {
        
        const { data } = await authApi.post('login/', { email, password, returnSecureToken: true })
        const { displayName, token, refresh_token } = data
        
        user.username = displayName

        commit('loginUser', { user, token, refresh_token })

        return { ok: true }

    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }

}


export const checkAuthentication = async ({ commit }) => {

    const token         = localStorage.getItem('token')
    const refresh_token = localStorage.getItem('refresh_token')

    if( !token ) {
        commit('logout')
        return { ok: false, message: 'No hay token' }
    }

    try {
        
        const { data } = await authApi.post(':lookup', { token })
        // console.log(data)
        const { displayName, email } = data.users[0]

        const user = {
            username: displayName,
            email
        }

        commit('loginUser', { user, token, refresh_token })

        return { ok: true }

    } catch (error) {
        commit('logout')
        return { ok: false, message: error.response.data.error.message }
    }

}