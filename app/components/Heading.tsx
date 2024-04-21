import {FC, ReactNode} from 'react';

interface PropsType {
    children: ReactNode
}

const Heading: FC<PropsType> = ({children}: PropsType) => {
    return (
        <h1 className={`font-bold text-3xl pb-3 font-orbitron`}>
            {children}
        </h1>
    )
};

export default Heading;
