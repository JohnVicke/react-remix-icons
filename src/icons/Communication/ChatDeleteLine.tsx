import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatDeleteLineProps = Omit<IconProps, "name">;

export const ChatDeleteLine = (props: ChatDeleteLineProps) => (
  <Icon name="chat-delete-line" {...props} />
);
