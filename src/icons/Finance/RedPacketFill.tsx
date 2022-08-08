import React from "react";
import { Icon, IconProps } from "../Icon";

export type RedPacketFillProps = Omit<IconProps, "name">;

export const RedPacketFill = (props: RedPacketFillProps) => (
  <Icon name="red-packet-fill" {...props} />
);
