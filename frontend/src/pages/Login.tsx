import { FormEvent, useState } from "react";
import { Button, Heading, Input, Stack } from "@chakra-ui/react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div
      style={{
        maxWidth: 668,
        margin: "0 auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap={6}>
          <Heading size="lg">Login</Heading>
          <label>
            Username:
            <Input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Button colorScheme="teal" size="md" type="submit">
            Login Now
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Login;
