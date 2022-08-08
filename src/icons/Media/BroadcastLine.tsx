import React from "react";
import { Icon, IconProps } from "../Icon";

export type BroadcastLineProps = Omit<IconProps, "name">;

export const BroadcastLine = (props: BroadcastLineProps) => (
  <Icon name="broadcast-line" {...props} />
);
