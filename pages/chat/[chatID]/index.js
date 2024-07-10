import React from "react";
import { useRouter } from "next/router";
import ChatSite from "@/components/UI/ChatSite";

const index = () => {
  const router = useRouter();
  return <ChatSite id={router.query.chatID} />;
};

export default index;
