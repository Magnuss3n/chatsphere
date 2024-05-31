import { useState } from 'react';
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    })



    const { loading, signup } = useSignup()

    const handleCheckboxChange = (gender) => {
        setInputs((prevState) => ({
            ...prevState,
            gender: prevState.gender === gender ? "" : gender
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs.fullName, inputs.username, inputs.password, inputs.confirmPassword, inputs.gender);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-95 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-t-2 border-l-2 border-r-2 border-b-2'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    SIGNUP
                    <span className='text-yellow-300 pl-2 font-semibold'> Chatsphere </span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2 pt-8">
                            <span className=' label-text text-md'>Fullname</span>
                            <ion-icon name="person-outline"></ion-icon>
                        </label>
                        <input type="text" placeholder='Your full name' className='w-full input input-bordered h-10 ' autoComplete='on'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-md label-text'>Username</span>
                            <ion-icon name="card-outline"></ion-icon>
                        </label>
                        <input type="text" placeholder=' Enter Username' className='w-full input input-bordered h-10' autoComplete='on'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>
                    <div>
                        <label className="label p-2 pt-2">
                            <span className=' label-text text-md'>Password</span>
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </label>
                        <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' autoComplete='on'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>
                    <div>
                        <label className="label">
                            <span className=' label-text text-md'>Confirm Password</span>
                            <ion-icon name="key-outline"></ion-icon>
                        </label>
                        <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10' autoComplete='on'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to="/login" className='text-sm hover:underline hover:text-yellow-400 mt-4 inline-block'>

                        Already have an account?
                    </Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Signup


// const Signup = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-95 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-t-2 border-l-2 border-r-2 border-b-2'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     SIGNUP
//                     <span className='text-yellow-300 pl-2 font-semibold'> Chatsphere </span>
//                 </h1>
//                 <form >
//                     <div>
//                         <label className="label p-2 pt-8">
//                             <span className=' label-text text-md'>Fullname</span>
//                             <ion-icon name="person-outline"></ion-icon>
//                         </label>
//                         <input type="text" placeholder='Your full name' className='w-full input input-bordered h-10 ' />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-md label-text'>Username</span>
//                             <ion-icon name="card-outline"></ion-icon>
//                         </label>
//                         <input type="text" placeholder=' Enter Username' className='w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className="label p-2 pt-2">
//                             <span className=' label-text text-md'>Password</span>
//                             <ion-icon name="lock-closed-outline"></ion-icon>
//                         </label>
//                         <input type="text" placeholder='Enter password' className='w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className="label">
//                             <span className=' label-text text-md'>Confirm Password</span>
//                             <ion-icon name="key-outline"></ion-icon>
//                         </label>
//                         <input type="text" placeholder='Confirm password' className='w-full input input-bordered h-10' />
//                     </div>

//                     <GenderCheckbox />

//                     <a href="#" className='text-sm hover:underline hover:text-blue-400 mt-4 inline-block'>

//                         Already have an account?
//                     </a>
//                     <div>
//                         <button className='btn btn-block text-lg brightness-200 bg-gray-950 border-orange-50 mt-3 hover:border-none hover:bg-yellow-950'>
//                             Sign Up
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup

