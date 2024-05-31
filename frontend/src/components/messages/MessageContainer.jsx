import Messages from "./Messages.jsx"
import Messageinput from "./Messageinput.jsx"
import { TiMessages } from 'react-icons/ti';
import { IoMdHappy } from "react-icons/io";
import useConversation from "../../zustand/useConversation.js";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext.jsx";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation()

    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    return (
        <div className="md:min-w-[450px] flex flex-col">
            {!selectedConversation ? (<NoChatSelected />) : (
                <>
                    {/* Header */}
                    <div className="bg-gray-950 border-radius rounded-lg border-white border-x border-y px-4 py-2 mb-2">
                        <span className="label-text"> To :  </span>
                        <span className="text-white font-bold">{selectedConversation.fullName}</span>
                    </div>
                    <Messages />
                    <Messageinput />
                </>
            )}
        </div >
    )
}

export default MessageContainer


const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Wagwan  🙏 {authUser.fullName} </p> <IoMdHappy className="h-11 w-11" />
                <p> Pull a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6x1 h-11 w-11 text-center' />
            </div>
        </div>
    )
}

