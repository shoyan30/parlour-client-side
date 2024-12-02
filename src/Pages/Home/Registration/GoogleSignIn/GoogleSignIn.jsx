import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { Result } from 'postcss';
import { useNavigate } from 'react-router-dom';
import AxiosSecure from '../../../../Hook/AxiosSecure';

const GoogleSignIn = () => {

    const axiosSecure = AxiosSecure()
    const navigate = useNavigate();
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        
        googleSignIn()
            .then(result => {
                console.log(result.user);

                const googleSignInInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosSecure.post('/users', googleSignInInfo)
                .then(res => console.log(res.data))

                navigate('/');
            })
            .catch(error => {
                console.error('Google Sign-In Error:', error);
            })
            .finally();
    };
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary w-full">
                <FaGoogle className="inline-block mr-2" />
                Sign in with Google
            </button>
        </div>
    );
};

export default GoogleSignIn;