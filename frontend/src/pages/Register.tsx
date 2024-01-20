import { Stack, Heading, Input, Button } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    password: "",
  });

  const { email, name, password } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
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
          <Heading size="lg">Create Account</Heading>
          <label>
            Username:
            <Input
              placeholder="Name"
              type="text"
              value={name}
              name="name"
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <Input
              placeholder="Email"
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <Input
              placeholder="Password"
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
            />
          </label>
          <Button colorScheme="teal" size="md" type="submit">
            Create Account
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Register;
