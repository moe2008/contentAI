import { useState, useEffect } from "react";
import { supabase } from "@/supabaseClient";
import { useAuth } from "@/context/AuthContext";

export const useFetchCredits = () => {
  const [credits, setCredits] = useState(0);
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      const fetchCredits = async () => {
        const { data, error } = await supabase
          .from("credits")
          .select("credits")
          .eq("user_id", user.id)
          .single();
        if (error) {
          console.error("Error fetching credits:", error.message);
        } else {
          setCredits(data.credits);
        }
      };

      fetchCredits();

      const subscription = supabase
        .channel(`public:credits:user_id=eq.${user.id}`)
        .on(
          "postgres_changes",
          {
            event: "UPDATE",
            schema: "public",
            table: "credits",
            filter: `user_id=eq.${user.id}`,
          },
          (payload) => {
            setCredits(payload.new.credits);
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(subscription);
      };
    }
  }, [user, credits]);

  return { credits, setCredits };
};
