import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserReceived2FillProps = Omit<IconProps, "name">;

export const UserReceived2Fill = (props: UserReceived2FillProps) => (
  <Icon name="user-received-2-fill" {...props} />
);
