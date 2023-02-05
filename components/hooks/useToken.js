import { useState, useEffect } from 'react';

const useToken = (user, age) => {
    console.log(user);
    const [token, setToken] = useState('');

    useEffect(() => {
        const username = user?.user?.displayName;
        const email = user?.user?.email;
        const currentUser = {
            email: email,
        };
        if (email) {
            fetch(`https://hello-talk-webserver.vercel.app/profile/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user?.user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }

    }, [user]);

    return [token];
}

export default useToken;