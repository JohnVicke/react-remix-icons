import React from "react";
import { Icon, IconProps } from "../Icon";

export type MessageLineProps = Omit<IconProps, "name">;

export const MessageLine = (props: MessageLineProps) => (
  <Icon name="message-line" {...props} />
);
