import React from "react";
import { Icon, IconProps } from "../Icon";

export type AliensLineProps = Omit<IconProps, "name">;

export const AliensLine = (props: AliensLineProps) => (
  <Icon name="aliens-line" {...props} />
);
