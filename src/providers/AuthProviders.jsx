import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    EmailAuthProvider,
    reauthenticateWithCredential,
    updatePassword,
    deleteUser,
} from "firebase/auth";
import app from "../firebase/firebase.confiq";
import { createContext, useEffect, useState } from "react";
import usePublicApi from "../hooks/usePublicApi";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const publicApi = usePublicApi();

    const createFitPulseUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateFitPulseUserProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => {})
            .catch((error) => {});
    };

    const signInFitPulseUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signOutFitPulseUser = () => {
        return signOut(auth);
    };

    const updateUserPassword = async (oldPassword, newPassword) => {
        const credential = EmailAuthProvider.credential(
            user.email,
            oldPassword
        );
        await reauthenticateWithCredential(user, credential);

        // If reauthentication is successful, update the user's password
        await updatePassword(user, newPassword);

        return { modifiedCount: 1 };
    };

    const fitpulseUser = auth.currentUser;
    const deleteFitPulseUser = () => {
        return deleteUser(fitpulseUser);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                const userEmail = { email: currentUser.email };
                const jwtResponse = await publicApi.post("/jwt", userEmail);
                const token = jwtResponse.data.token;
                if (token) {
                    localStorage.setItem("token", token);
                }
            }
        });

        return () => {
            return unsubscribe;
        };
    });

    const authInfo = {
        user,
        loading,
        createFitPulseUser,
        updateFitPulseUserProfile,
        signInFitPulseUser,
        signOutFitPulseUser,
        signInWithGoogle,
        updateUserPassword,
        deleteFitPulseUser,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;
