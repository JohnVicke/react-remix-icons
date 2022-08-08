import React from "react";
import { Icon, IconProps } from "../Icon";

export type BroadcastFillProps = Omit<IconProps, "name">;

export const BroadcastFill = (props: BroadcastFillProps) => (
  <Icon name="broadcast-fill" {...props} />
);
