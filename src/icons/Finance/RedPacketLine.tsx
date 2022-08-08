import React from "react";
import { Icon, IconProps } from "../Icon";

export type RedPacketLineProps = Omit<IconProps, "name">;

export const RedPacketLine = (props: RedPacketLineProps) => (
  <Icon name="red-packet-line" {...props} />
);
