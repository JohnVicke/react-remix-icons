import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatPrivateLineProps = Omit<IconProps, "name">;

export const ChatPrivateLine = (props: ChatPrivateLineProps) => (
  <Icon name="chat-private-line" {...props} />
);
