import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/supabaseClient";
const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkMark, setCheckMark] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (email && password && checkMark) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password, checkMark]);

  const signUp = async () => {
    try {
      const { error, data } = await supabase.auth.signUp({ email, password });
      if (error) {
        throw error;
      }
      const { error: insertError } = await supabase
        .from("users")
        .insert([{ id: data.user.id, email }]);
      if (insertError) {
        throw insertError;
      }
      router.push("/app");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card color="gray" variant="gradient" shadow={true} className="p-4">
        <Typography variant="h4" color="purple">
          Sign Up
        </Typography>
        <Typography color="white" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="custom-placeholder focus:!border-purple-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="white" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-purple-500 custom-placeholder"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography variant="h6" color="white" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-purple-500 custom-placeholder"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Checkbox
            color="purple"
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors text-purple-500 hover:text-purple-600"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            onChange={(e) => setCheckMark(e.target.value)}
          />
          <Button
            className="mt-6"
            fullWidth
            color="purple"
            onClick={signUp}
            loading={isButtonDisabled}
          >
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-purple-500 hover:text-purple-600"
            >
              Sign In
            </a>
          </Typography>
          {error && <h1>{error}</h1>}
        </form>
      </Card>
    </div>
  );
};

export default index;
