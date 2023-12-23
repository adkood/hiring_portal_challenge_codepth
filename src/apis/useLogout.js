import { getAuth, signOut } from "firebase/auth";
import { useToast } from "@chakra-ui/react";

const useLogout = () => {
    const auth = getAuth();
    const toast = useToast();

    const logout = async () => {
        try {
            await signOut(auth);
            toast({
                title: 'Logged out successfully.',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        } catch (err) {
            console.error(err);
            toast({
                title: 'Error logging out. Please try again.',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return logout;
};

export default useLogout;
