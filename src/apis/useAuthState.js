import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth();

const useAuthState = () => {
    const [log, setLog] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLog(true);
            console.log(user);
        }
    })

    return { log };
};

export default useAuthState;
