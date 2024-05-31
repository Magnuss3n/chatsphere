import { useState } from "react"
import toast from 'react-hot-toast';
import { useAuthContext } from "../context/AuthContext";


const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext()


    const signup = async (fullName, username, password, confirmPassword, gender) => {


        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
        if (!success) {
            setLoading(false);
            return;
        }
        setLoading(true);

        try {
            const res = await fetch('/api/auth/signup', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }

            //localstorage
            localStorage.setItem("sphere-user", JSON.stringify(data))
            //context
            setAuthUser(data)

            console.log(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill out all the fields!")
        return false;
    }

    if (password !== confirmPassword) {
        toast.error('Passwords do not match plz check again!')
        return false;
    }

    if (!password || password.length < 6) {
        toast.error('password must be at least 6 characters')
        return false
    }
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!specialCharRegex.test(password)) {
        toast.error('Password must contain at least one special character');
        return false;
    }

    return true;
}