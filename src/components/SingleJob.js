import React from 'react';
import { useToast } from '@chakra-ui/react';

const SingleJob = ({ job, log }) => {
    const toast = useToast();

    const onApplyHandler = () => {
        if (log) {
        } else {
            toast({
                title: 'You are not Logged In.',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return (
        <div className='cont__left__singleJob'>
            <section style={{ width: '40%', height: '100%', display: 'flex', margin: '10px', justifyContent: 'center', flexDirection: 'column' }}>
                <span>* {job.title}</span>
                <span>* {job.description}</span>
                <span>* {job.requiredSkills}</span>
            </section>
            <section style={{ width: '10%', height: '100%', display: 'flex', margin: '10px', justifyContent: 'center', flexDirection: 'column' }}>
                <span>{job.experience}</span>
            </section>
            <section style={{ width: '15%', height: '100%', display: 'flex', margin: '10px', justifyContent: 'center', flexDirection: 'column' }}>
                <span>{job.company}</span>
            </section>
            {log &&
                <a href={`${job.link}`}>
                    <button className='btn__apply'>
                        Apply
                    </button>
                </a>
            }
            {
                !log &&
                <button className='btn__apply' onClick={onApplyHandler}>
                    Apply
                </button>

            }
        </div>
    );
};

export default SingleJob;
