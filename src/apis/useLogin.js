import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useToast } from "@chakra-ui/react";

const useLogin = () => {
    const auth = getAuth();
    const toast = useToast();

    const login = async (email, password) => {
        try {
            const cred = await signInWithEmailAndPassword(auth, email, password);
            console.log('user:', cred.user);
            
            toast({
                title: 'Login successful.',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        } catch (err) {
            console.error(err);

            toast({
                title: 'Invalid credentials. Please try again.',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return {login};
};

export default useLogin;
