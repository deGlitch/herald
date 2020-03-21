import React from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import "./LoginPanel.css";

export interface LoginPanelProps {
  username: string;
  password: string;
  onUsernameChange: (username: string) => void;
  onPasswordChange: (password: string) => void;
  onSubmit: () => void;
}

const LoginPanel = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onSubmit
}: LoginPanelProps) => (
  <div className="login-panel-container">
    <h2 id="title">Sign In</h2>
    <Form>
      <FormGroup>
        <Input
          type="text"
          name="username"
          id="username-field"
          placeholder="username"
          value={username}
          onChange={(event) => onUsernameChange(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          id="password-field"
          placeholder="password"
          value={password}
          onChange={(event) => onPasswordChange(event.target.value)}
        />
      </FormGroup>
      <Button color="primary" block onClick={onSubmit}>
        Submit
      </Button>
    </Form>
  </div>
);

export default LoginPanel;
