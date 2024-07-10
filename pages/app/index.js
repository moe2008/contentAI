import React, { useState, useEffect } from "react";
import { Button, Alert } from "@material-tailwind/react";
import ContentTabs from "@/components/ContentTabs";
import SocialMediaTab from "@/components/Tabs/SocialMedia/SocialMediaTab";
import { setTabContent } from "@/helper/setTabContent";
import AIOutputEditor from "@/components/UI/AIOutputEditor";
import ChatsDrawer from "@/components/UI/ChatsDrawer";
import ProtectedRoute from "@/components/Helper/ProtectedRoute";
import { useFetchCredits } from "@/helper/useFetchCredits";
import { ParamsProvider, useParams } from "@/context/ParamsContext";
import { setApiRoute } from "@/helper/setApiRoute";
import { saveChat } from "@/helper/saveChat";
import { useAuth } from "@/context/AuthContext";
import { fetchApiResponse, reduceCredits } from "@/helper/fetchApiResponse";

const Index = () => {
  const [answer, setAnswer] = useState(null);
  const [buttonText, setButtonText] = useState("Generate");
  const [content, setContent] = useState(<SocialMediaTab />);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("Social Media Post");
  const { credits, setCredits } = useFetchCredits();
  const { params, clearParams } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    setContent(<SocialMediaTab />);
  }, []);

  const onSubmit = async () => {
    setButtonText("Loading");
    if (credits <= 2) {
      setError("No Credits left");
      setButtonText("Generate");
      return;
    }

    const { url } = setApiRoute(activeTab);
    try {
      const data = await fetchApiResponse(url, params);
      const date =
        new Date().getDay() +
        " " +
        new Date().getMonth() +
        " " +
        new Date().getFullYear();

      const prev = activeTab.replace(/"/g, "");
      const preview = prev + " " + date;
      await saveChat(preview, data.content, user.id);
      setAnswer(data.content);
      setButtonText("Finished");
      setTimeout(() => {
        setButtonText("Generate");
        clearParams();
      }, 3000);
      setCredits(reduceCredits(user.id));
    } catch (error) {
      console.error("Error:", error.message);
      setButtonText("Generate");
    }
  };

  const setTab = (name) => {
    setTabContent(name, setContent, clearParams, setActiveTab);
    setAnswer("");
  };

  const setDrawerOpen = () => {
    setOpen(true);
  };

  const setDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ProtectedRoute>
      <main className="flex items-start justify-center min-h-screen max-w-screen p-2 bg-black">
        <span className="text-white min-h-screen w-full flex flex-col items-center justify-around relative">
          <div className="fixed bottom-0 w-full z-10 sm:w-auto sm:left-0 sm:top-0 sm:bottom-auto">
            <Button
              color="purple"
              onClick={setDrawerOpen}
              className="w-screen md:w-auto"
            >
              Menu
            </Button>
          </div>

          <ChatsDrawer open={open} close={setDrawerClose} />
          <h1 className="text-xl sm:text-2xl">
            What Content would you like to create?
          </h1>
          <ContentTabs setTab={setTab} />
          {content}
          <div className="h-full flex items-center flex-col gap-4 mt-8">
            <Button color="purple" onClick={onSubmit} className="animationBox">
              {buttonText}
            </Button>
            {error && (
              <Alert
                color="red"
                className="h-12"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                }
              >
                {error}
              </Alert>
            )}
          </div>
          <div className="w-full flex justify-center">
            <AIOutputEditor answer={answer} />
          </div>
        </span>
      </main>
    </ProtectedRoute>
  );
};

export default () => (
  <ParamsProvider>
    <Index />
  </ParamsProvider>
);
