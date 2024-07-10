import React, { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import ChatSiteCard from "./ChatSiteCard";

const ChatSite = ({ id }) => {
  const [chat, setChat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(id);
    if (!id) {
      setError("Invalid ID");
      setLoading(false);
      return;
    }

    const fetchChat = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("chats")
          .select("*")
          .eq("id", id)
          .single();
        if (error) {
          setError(error.message);
        } else {
          setError(null);
          setChat(data);
          console.log(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChat();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-black text-white w-screen h-screen flex justify-center items-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black text-white w-screen h-screen flex justify-center items-center">
        <div className="text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white w-screen min-h-screen flex flex-col items-center justify-evenly">
      <div className="w-full h-1/5 flex flex-col text-center justify-around mt-2 mb-2">
        <h1 className="text-3xl">Your Chat</h1>
      </div>
      <div className="w-4/5 flex flex-col items-center justify-center gap-4 overflow-x-hidden">
        {chat ? (
          <>
            <ChatSiteCard
              id={chat.id}
              user_id={chat.user_id}
              message={chat.message}
              created_at={new Date(chat.created_at).toLocaleString()}
              response={chat.response}
            />
          </>
        ) : (
          <p>No chat found</p>
        )}
      </div>
    </div>
  );
};

export default ChatSite;
