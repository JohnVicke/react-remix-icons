import React from "react";
import { Icon, IconProps } from "../Icon";

export type RegisteredLineProps = Omit<IconProps, "name">;

export const RegisteredLine = (props: RegisteredLineProps) => (
  <Icon name="registered-line" {...props} />
);
