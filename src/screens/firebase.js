import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, get, onValue, update, remove } from 'firebase/database'; // Importando remove
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAaQ2F9uGHm_Z6jnahYeOjxnEgDqlXbeZg",
    authDomain: "tec-serv-468b7.firebaseapp.com",
    projectId: "tec-serv-468b7",
    storageBucket: "tec-serv-468b7.appspot.com",
    messagingSenderId: "577413763329",
    appId: "1:577413763329:web:3709be19efba59de7b0b00"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

// Exportando os módulos do Firebase
export {
    auth,
    database,
    storage,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    ref,
    set,
    get,
    onValue,
    update,
    remove // Exportando a função remove
};
