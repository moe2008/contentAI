import React from "react";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

const ProfileSettings = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(user);
  }, [user]);

  return (
    <Card className="w-96 flex justify-evenly">
      <List>
        <ListItem>
          <ListItemPrefix>
            <Avatar
              variant="circular"
              alt="candice"
              src="https://docs.material-tailwind.com/img/face-1.jpg"
            />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Moritz Dierker
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {userData && userData.email}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {userData && userData.created_at}
            </Typography>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Typography variant="h6" color="blue-gray">
              Change Password
            </Typography>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <Typography variant="h6" color="blue-gray">
              Change Email
            </Typography>
          </div>
        </ListItem>
      </List>
    </Card>
  );
};

export default ProfileSettings;
