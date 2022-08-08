import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserSmileLineProps = Omit<IconProps, "name">;

export const UserSmileLine = (props: UserSmileLineProps) => (
  <Icon name="user-smile-line" {...props} />
);
