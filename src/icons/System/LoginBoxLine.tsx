import React from "react";
import { Icon, IconProps } from "../Icon";

export type LoginBoxLineProps = Omit<IconProps, "name">;

export const LoginBoxLine = (props: LoginBoxLineProps) => (
  <Icon name="login-box-line" {...props} />
);
