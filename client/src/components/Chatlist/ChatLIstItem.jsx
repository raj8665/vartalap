import React from "react";
import Avatar from "../common/Avatar";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";

function ChatListItem({ data, isContactPage = false }) {
  const [{userInfo,currentChatUser},dispatch]=useStateProvider();
  const handleContactClick=()=>{
    // if(currentChatUser?.id===data?.id){
      dispatch({type:reducerCases.CHANGE_CURRENT_CHAT_USER,user:{...data}})
      dispatch({type:reducerCases.SET_ALL_CONTACTS_PAGE})
    // }
  }
  return (
    <div
      className={`flex border-cursor-pointer border-b-2 border-slate-300 items-center hover:bg-slate-300`}
      onClick={handleContactClick}
    >
      <div className="min-w-fit px-5 pyt-3 pb-1">
        <Avatar type="lg" image={data?.profilePicture}/>
      </div>
      <div className="min-h-full flex flex-col justify-center mt-3 pr-2 w-full">
        <div className="flex-justify-between">
          <div>
            <span className="text-black">{data?.name}</span>
          </div>
        </div>
        <div className="flex border-b border-conversation-border pb-2 pt-1 pr-2">
          <div className="flex justify-between w-full">
            <span className="text-slate-500 line-clamp-1 text-sm">{data?.about || ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
