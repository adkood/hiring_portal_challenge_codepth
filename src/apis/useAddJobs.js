import { useState } from 'react';
import db from '../fireBaseConn';
import { addDoc, collection } from 'firebase/firestore';
import { useToast } from '@chakra-ui/react';

const useAddJobs = () => {
    const toast = useToast();

    const addJob = async (company, title, desc, skills, exp, link) => {
        const collRef = collection(db, 'jobs');

        console.log(company,title,desc,skills,exp);

        try {
            const res = await addDoc(collRef, {
                company,
                title,
                description: desc,
                requiredSkill: skills,
                experience: exp,
                link,
            });

            console.log(res);

            toast({
                title: 'Job added to the pool.',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        } catch (err) {
            console.error(err);

            toast({
                title: 'Something went wrong, please try again later.',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        } 
    };

    return { addJob };
};

export default useAddJobs;
