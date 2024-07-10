import { supabase } from "@/supabaseClient";


export const saveChat = async (message, response, user) => {
  
  if (!user) {
    console.error("User is not logged in");
    return;
  }

  const { data, error } = await supabase
    .from("chats")
    .insert([{ user_id: user, message: JSON.stringify(message), response }]);

  if (error) {
    console.error("Error saving chat:", error.message);
  } else {
    console.log("Chat saved:", data);
  }
};
