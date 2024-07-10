import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

import { supabase } from "@/supabaseClient";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { user } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password]);

  useEffect(() => {
    if (user) {
      router.push("/app"); // Redirect to /app if user is already logged in
    }
  }, [user]);

  const signIn = async () => {
    const {  error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) console.error("Error signing in:", error.message);
    else {
      router.push("/app");
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white" className="text-purple-500">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Email"
            type="emailw"
            size="lg"
            color="purple"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            color="purple"
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            color="gray"
            className="text-purple-500"
            fullWidth
            onClick={signIn}
            loading={isButtonDisabled}
          >
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="purple"
              className="ml-1 font-bold"
              onClick={() => router.push("/signup")}
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default index;
