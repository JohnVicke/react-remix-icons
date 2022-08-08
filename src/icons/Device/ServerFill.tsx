import React from "react";
import { Icon, IconProps } from "../Icon";

export type ServerFillProps = Omit<IconProps, "name">;

export const ServerFill = (props: ServerFillProps) => (
  <Icon name="server-fill" {...props} />
);
