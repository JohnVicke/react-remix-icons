import React from "react";
import { Icon, IconProps } from "../Icon";

export type PingPongFillProps = Omit<IconProps, "name">;

export const PingPongFill = (props: PingPongFillProps) => (
  <Icon name="ping-pong-fill" {...props} />
);
