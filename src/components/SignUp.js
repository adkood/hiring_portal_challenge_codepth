import {
    Box,
    Button,
    Flex,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";

import useSignUp from "../apis/useSignup";

import { useDispatch } from "react-redux";
import { modalActions } from "../store";
import { useSelector } from "react-redux";
import useLogin from "../apis/useLogin";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sign = useSelector((state) => state.modal.isSignup);
    const dispatch = useDispatch(); 

    const {signUp} = useSignUp();
    const {login} = useLogin();

    const OverlayTwo = () => (
        <ModalOverlay
            bg="none"
            backdropFilter="auto"
            backdropInvert="1%"
            backdropBlur="1px"
        />
    );

    const onSignupClickHandler = () => {
        if (email && password) {
            signUp(email, password);
            dispatch(modalActions.changeRender());
        }
        setEmail("");
        setPassword("");
    }
    const onLoginClickHandler = () => {
        if (email && password) {
            login(email, password);
            dispatch(modalActions.changeRender());
        }
        setEmail("");
        setPassword("");
    }

    const ontoggle = () => {
        dispatch(modalActions.signupToggle());
    }

    return (
        <Modal isCentered isOpen={sign} onClose={ontoggle}>
            <OverlayTwo />
            <ModalContent bgColor="transparent" position="fixed" left="0">
                <ModalBody>
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        width="100vw"
                        height="100vh"
                        flexDirection="column"
                    // bgColor="blue"
                    >
                        <Flex
                            width="35%"
                            height="30%"
                            bgColor="white"
                            borderRadius="8px"
                            flexDirection={"column"}
                            alignItems="center"
                            p={"4"}
                        >
                            <Box className="container" width="94%" height="60%">
                                <Input
                                    type="text"
                                    placeholder="Enter email"
                                    name="email"
                                    marginBottom={"15px"}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    required
                                />
                                <Input
                                    type="password"
                                    placeholder="Enter Password"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    name="psw"
                                    required
                                />
                            </Box>

                            <Flex
                                className="container"
                                width="100%"
                                height="30%"
                                justifyContent={"center"}
                                alignItems="center"
                                m={"4"}
                            >
                                <Button
                                    borderStyle="none"
                                    type="button"
                                    width="33%"
                                    bgColor="blue.300"
                                    height={"70%"}
                                    margin={"2px"}
                                    borderRadius="10px"
                                    onClick={onLoginClickHandler}
                                >
                                    Login
                                </Button>
                                <Button
                                    borderStyle="none"
                                    borderRadius="10px"
                                    width="33%"
                                    height={"70%"}
                                    bgColor="green.300"
                                    type="submit"
                                    margin={"2px"}
                                    onClick={onSignupClickHandler}
                                >
                                    SignUp
                                </Button>
                                <Button
                                    borderStyle="none"
                                    type="button"
                                    width="33%"
                                    bgColor="red.300"
                                    height={"70%"}
                                    margin={"2px"}
                                    borderRadius="10px"
                                    onClick={ontoggle}
                                >
                                    Cancel
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default Signup;