import React from "react";
import { Icon, IconProps } from "../Icon";

export type LoginCircleFillProps = Omit<IconProps, "name">;

export const LoginCircleFill = (props: LoginCircleFillProps) => (
  <Icon name="login-circle-fill" {...props} />
);
