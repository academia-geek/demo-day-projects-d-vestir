import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { google, facebook } from '../firebase/firebaseConfig';
import { types } from "../types/types";
import Swal from 'sweetalert2';

// Logout
export const logout = () => {
    return(dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(res => {
            dispatch(logoutSincrono())

            Swal.fire({
                title:'¡Sesión finalizada!',
                text:'Te estaremos esperando.',
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const logoutSincrono = () => {
    return {
        type: types.logout
    }
}

export const loginFacebook = () => {

    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, facebook)
            .then(({ user }) => {
                dispatch(loginSincrono(user.uid, user.displayName))

                Swal.fire({
                    title: 'Inicio Exitoso',
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}


export const loginEmailPassword = (email, password) => {
    

    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                dispatch(loginSincrono(user.uid, user.displayName))

                Swal.fire({
                    title:'¡Bienvenido!',
                })

            })
            .catch(error => {
                console.log(error);

                Swal.fire({
                    title:'¡El usuario no exite!',
                    text:'Intente nuevamente o regístrese',
                })

            })
    }
}

export const loginGoogle = () => {

    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(loginSincrono(user.uid, user.displayName))

                Swal.fire({
                    title:'¡Bienvenido!',
                })
            })
            .catch(error => {
                console.log(error);

                Swal.fire({
                    title:'¡El usuario no exite!',
                    text:'Intente nuevamente o regístrese',
                })
            })
    }
}

export const loginSincrono = (id, displayname) => {

    return {
        type: types.login,
        payload: {
            id,
            displayname
        }
    }
}