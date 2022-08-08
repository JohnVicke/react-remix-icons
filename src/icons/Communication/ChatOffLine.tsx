import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatOffLineProps = Omit<IconProps, "name">;

export const ChatOffLine = (props: ChatOffLineProps) => (
  <Icon name="chat-off-line" {...props} />
);
