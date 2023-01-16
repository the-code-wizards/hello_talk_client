import React from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../components/Shared/Navbar/Navbar'

const Level = () => {
     const router = useRouter()
  const { id } = router.query
    console.log(id)

    return (
        <div>
            <Navbar/>
        </div>
    );
};

export default Level;