import React from "react";
import { Icon, IconProps } from "../Icon";

export type LiveFillProps = Omit<IconProps, "name">;

export const LiveFill = (props: LiveFillProps) => (
  <Icon name="live-fill" {...props} />
);
