import firebase from "./DataBase/firebase";

var database = firebase.database().ref('/')
// Facebook Login


function signup(email, password) {
    console.log(email, password)
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(res => resolve({ email: res.user.email, uid: res.user.uid }
        )).catch((rej) => reject(rej))
    })
}

function login(email, password) {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(res => resolve(res.user)).catch((rej) => reject(rej))
    })

}

function logout() {
    return new Promise((resolve, reject) => {
        firebase.auth().signOut().then((res) => resolve(res)).catch((err) => reject(err))
    })

}

let LoginAdmin = (email, password, props) => {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                let obj = {
                    email: res.user.email,
                    id: res.user.uid,
                }
                database.child('Admin').set(obj)
                resolve(obj)
            })
            .catch(error => {
                reject(error.code)
                console.log('i am error')

            });

    });
};


export {
    LoginAdmin,
    signup,
    login,
    logout
}