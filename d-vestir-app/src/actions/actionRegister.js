import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const registroEmailPasswordNombre = (email, password, name) => {

    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {

                await updateProfile(auth.currentUser, { displayName: name })
                dispatch(registerSincrono(user.email, user.uid, user.displayName))

                Swal.fire({
                    title: '¡Registro exitoso!',
                    text: 'Bienvenido.',
                })

            })
            .catch(e => {
                console.log(e)

                Swal.fire({
                    title: '¡Registro incorrecto!',
                    text: 'Intente nuevamente.',
                })
            })

    }
}

export const registerSincrono = (email, password, name) => {


    return {
        type: types.register,
        payload: {
            email,
            password,
            name
        }
    }
}