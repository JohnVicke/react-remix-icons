import React from "react";
import { Icon, IconProps } from "../Icon";

export type ServerLineProps = Omit<IconProps, "name">;

export const ServerLine = (props: ServerLineProps) => (
  <Icon name="server-line" {...props} />
);
