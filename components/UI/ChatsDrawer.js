import {
  Drawer,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import React from "react";
import ChatHistoryList from "./ChatHistoryList";
import { supabase } from "@/supabaseClient";
import Credits from "./Credits";

const ChatsDrawer = (props) => {
  const signOut = async () => {
    await supabase.auth.signOut();
  };
  return (
    <Drawer open={props.open} onClose={props.close}>
      <div className="mb-6 flex items-center justify-between p-4">
        <Typography variant="h5" color="blue-gray">
          Menu
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={props.close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <div className="flex flex-col w-full h-full items-center">
        <Credits />
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Your History
        </Typography>
        <ChatHistoryList />
      </div>
      <div className="flex w-full justify-evenly absolute bottom-5">
        <Button size="sm" color="black">
          <a href="/profileSettings">Settings</a>
        </Button>
        <Button size="sm" color="purple" onClick={signOut}>
          Logout
        </Button>
      </div>
    </Drawer>
  );
};

export default ChatsDrawer;
