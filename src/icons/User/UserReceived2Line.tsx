import React from "react";
import { Icon, IconProps } from "../Icon";

export type UserReceived2LineProps = Omit<IconProps, "name">;

export const UserReceived2Line = (props: UserReceived2LineProps) => (
  <Icon name="user-received-2-line" {...props} />
);
