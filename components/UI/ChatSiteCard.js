import React from "react";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

const ChatSiteCard = (props) => {
  return (
    <Card className="w-full max-w-[42rem] flex-col sm:flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full sm:w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/internet-network-technology/artificial-intelligence-ai-icon.png"
          alt="card-image"
          className="h-full w-full object-cover p-4"
        />
      </CardHeader>
      <CardBody className="overflow-hidden">
        <Typography
          variant="h6"
          color="gray"
          className="mb-4 uppercase overflow-hidden"
          style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
        >
          Message: {props.message}
        </Typography>
        <Typography
          color="gray"
          className="mb-8 font-normal overflow-hidden"
          style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
        >
          Response: {props.response}
        </Typography>
        <Typography
          color="gray"
          className="mb-8 font-normal overflow-hidden"
          style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
        >
          ID: {props.id}
        </Typography>
        <Typography
          color="gray"
          className="mb-8 font-normal overflow-hidden"
          style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
        >
          Created: {props.created_at}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default ChatSiteCard;
