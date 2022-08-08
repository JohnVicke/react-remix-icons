import React from "react";
import { Icon, IconProps } from "../Icon";

export type LiveLineProps = Omit<IconProps, "name">;

export const LiveLine = (props: LiveLineProps) => (
  <Icon name="live-line" {...props} />
);
