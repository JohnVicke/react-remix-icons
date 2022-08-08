import React from "react";
import { Icon, IconProps } from "../Icon";

export type Message3LineProps = Omit<IconProps, "name">;

export const Message3Line = (props: Message3LineProps) => (
  <Icon name="message-3-line" {...props} />
);
