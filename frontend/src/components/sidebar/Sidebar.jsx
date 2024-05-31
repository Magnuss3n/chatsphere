import SearchInput from "./SearchInput"
import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"

const Sidebar = () => {
    return (
        <div className="border-r-800 rounded-lg border-radius border-white p-4 flex flex-col border-y border-x">
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default Sidebar


// const Sidebar = () => {
//     return (
//         <div className="border-r-800 rounded-lg border-radius border-white p-4 flex flex-col border-y border-x">
//             <SearchInput />
//             <div className="divider px-3"></div>
//             <Conversations />
//             <LogoutButton />
//         </div>
//     )
// }

// export default Sidebar
