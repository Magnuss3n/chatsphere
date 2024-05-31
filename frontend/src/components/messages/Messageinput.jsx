import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const Messageinput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    }
    return (
        <form className="relative px-4 my-3" onSubmit={handleSubmit}>
            <div className=" relative w-full">
                <input type="text" className="border text-md rounded-lg block w-full p-2.5 bg-gray-200 border-gray-500 text-black"
                    placeholder="Message.."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} />

                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    {loading ? <div className="loading loading-spinner"></div> : <ion-icon name="send" style={{ fontSize: ' 21px', color: "#000080" }} ></ion-icon>}
                </button>
            </div>
        </form >
    )
}

export default Messageinput




// const Messageinput = () => {
//     return (
//         <form className="px-4 my-3">
//             <div className="w-full">
//                 <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-6000 text-white"
//                     placeholder="Send a message" />

//                 <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
//                     <ion-icon name="send"></ion-icon>
//                 </button>
//             </div>
//         </form>
//     )
// }

// export default Messageinput