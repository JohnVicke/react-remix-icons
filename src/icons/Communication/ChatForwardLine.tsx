import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatForwardLineProps = Omit<IconProps, "name">;

export const ChatForwardLine = (props: ChatForwardLineProps) => (
  <Icon name="chat-forward-line" {...props} />
);
