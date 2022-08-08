import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserSmileFillProps = Omit<IconProps, "name">;

export const UserSmileFill = (props: UserSmileFillProps) => (
  <Icon name="user-smile-fill" {...props} />
);
