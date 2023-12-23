import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useToast } from "@chakra-ui/react";

const useSignUp = () => {
    const auth = getAuth();
    const toast = useToast();

    const signUp = async (email, password) => {
        try {
            const cred = await createUserWithEmailAndPassword(auth, email, password);
            console.log('user:', cred.user);

            toast({
                title: 'Account created successfully.',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        } catch (err) {
            console.error(err);

            toast({
                title: 'Error creating account. Please try again.',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return {signUp};
};

export default useSignUp;
