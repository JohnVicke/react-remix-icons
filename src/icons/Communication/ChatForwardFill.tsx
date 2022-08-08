import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatForwardFillProps = Omit<IconProps, "name">;

export const ChatForwardFill = (props: ChatForwardFillProps) => (
  <Icon name="chat-forward-fill" {...props} />
);
