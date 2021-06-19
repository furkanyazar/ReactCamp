import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const { cartItems } = useSelector((state) => state.cart);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const history = useHistory();

  function handleSignOut() {
    setisAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setisAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" as={NavLink} to="/" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary />}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
