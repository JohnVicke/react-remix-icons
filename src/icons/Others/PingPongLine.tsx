import React from "react";
import { Icon, IconProps } from "../Icon";

export type PingPongLineProps = Omit<IconProps, "name">;

export const PingPongLine = (props: PingPongLineProps) => (
  <Icon name="ping-pong-line" {...props} />
);
