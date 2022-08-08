import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatHeartLineProps = Omit<IconProps, "name">;

export const ChatHeartLine = (props: ChatHeartLineProps) => (
  <Icon name="chat-heart-line" {...props} />
);
