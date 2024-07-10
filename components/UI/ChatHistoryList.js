import React, { useEffect, useState } from "react";
import { List, ListItem, Card, Button } from "@material-tailwind/react";
import { supabase } from "@/supabaseClient";
import { useAuth } from "@/context/AuthContext";

const ChatHistoryList = () => {
  const { user } = useAuth();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (user) {
      fetchChats();
    }
  }, [user]);

  const fetchChats = async () => {
    const { data, error } = await supabase
      .from("chats")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching chats:", error.message);
    } else {
      setChats(data);
      }
  };

  return (
    <Card className="w-full h-3/5">
      <List className="h-full overflow-y-scroll overflow-x-hidden flex justify-between">
        {chats.map((chat) => (
          <a href={`chat/${chat.id}`} className="text-initial">
            <ListItem className="">
              {chat.message.length > 20
                ? `${chat.message.substring(0, 30).replace(/"/g, "")}...`
                : chat.message}
            </ListItem>
          </a>
        ))}

        <div>
          <Button className="w-full">Load More</Button>
        </div>
      </List>
    </Card>
  );
};

export default ChatHistoryList;
