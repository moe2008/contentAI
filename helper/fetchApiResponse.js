import { supabase } from "@/supabaseClient";

export const fetchApiResponse = async (url, params) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const saveChat = async (preview, content, userId) => {
  const { data, error } = await supabase
    .from("chats")
    .insert([{ user_id: userId, message: preview, response: content }]);

  if (error) {
    console.error("Error saving chat:", error.message);
    throw new Error(error.message);
  }

  return data;
};

export const reduceCredits = async (userId) => {
  let { data, error } = await supabase
    .from("credits")
    .select("credits")
    .eq("user_id", userId)
    .single();

  if (error) {
    console.error("Error fetching user credits:", error.message);
    throw new Error(error.message);
  }

  const currentCredits = data.credits;

  const { data: updatedData, error: updateError } = await supabase
    .from("credits")
    .update({ credits: currentCredits - 1 })
    .eq("user_id", userId);

  if (updateError) {
    console.error("Error reducing credits:", updateError.message);
    throw new Error(updateError.message);
  }

  return currentCredits - 1;
};
