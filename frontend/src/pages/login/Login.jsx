import useLogin from '../../hooks/useLogin.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin()
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 max-auto rounded-[25px] '>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-t-2 border-l-2 border-r-2 border-b-2'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    LOGIN
                    <span className='text-yellow-300 pl-2 font-semibold'> Chatsphere </span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2 pt-8">
                            <span className=' label-text text-lg'>Username</span>
                            <ion-icon name="mail-outline"></ion-icon>
                        </label>

                        <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10 '
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />

                    </div>
                    <div>
                        <label className="label p-2 pt-8">
                            <span className=' label-text text-lg'>Password</span>
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </label>
                        <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Link to="/signup" className='text-sm hover:underline hover:text-blue-400 mt-4 inline-block'>
                        {"Don't"} have an account?
                    </Link>
                    <div>
                        <button className='btn btn-block text-lg brightness-200 bg-gray-950 border-orange-50 mt-3 hover:border-none hover:bg-yellow-950' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login


// const Login = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 max-auto rounded-[25px] '>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-t-2 border-l-2 border-r-2 border-b-2'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     LOGIN
//                     <span className='text-yellow-300 pl-2 font-semibold'> Chatsphere </span>
//                 </h1>
//                 <form>
//                     <div>
//                         <label className="label p-2 pt-8">
//                             <span className=' label-text text-lg'>Username</span>
//                             <ion-icon name="mail-outline"></ion-icon>
//                         </label>

//                         <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10 ' />

//                     </div>
//                     <div>
//                         <label className="label p-2 pt-8">
//                             <span className=' label-text text-lg'>Password</span>
//                             <ion-icon name="lock-closed-outline"></ion-icon>
//                         </label>
//                         <input type="text" placeholder='Enter password' className='w-full input input-bordered h-10' />
//                     </div>
//                     <a href="#" className='text-sm hover:underline hover:text-yellow-600 mt-5 inline-block'>
//                         {"Don't"} have an account?
//                     </a>
//                     <div>
//                         <button className='btn btn-block text-lg brightness-200 bg-gray-950 border-orange-50 mt-3 hover:border-none hover:bg-yellow-950'>
//                             Login
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login