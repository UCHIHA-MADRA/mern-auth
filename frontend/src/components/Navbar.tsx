import { Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  isUserLoggedIn: boolean;
};

const Navbar = (props: Props) => {
  const { isUserLoggedIn } = props;
  const { pathname } = useLocation();

  return (
    <nav style={{ padding: 24, borderBottom: "1px solid #33333325", marginBottom: 24 }}>
      <Flex justify={"space-between"}>
        <h1>Logo.</h1>
        <ul>
          <Flex gap={4}>
            {isUserLoggedIn ? (
              <li>
                <Link to="/">Dashboard</Link>
              </li>
            ) : (
              <Flex gap={4}>
                {pathname === "/login" && (
                  <li>
                    <Link to="/register">Create Account</Link>
                  </li>
                )}

                {pathname === "/register" && (
                  <li>
                    <Link to="/login">Login to Your Account</Link>
                  </li>
                )}
              </Flex>
            )}
          </Flex>
        </ul>
      </Flex>
    </nav>
  );
};

export default Navbar;
