import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatHeartFillProps = Omit<IconProps, "name">;

export const ChatHeartFill = (props: ChatHeartFillProps) => (
  <Icon name="chat-heart-fill" {...props} />
);
