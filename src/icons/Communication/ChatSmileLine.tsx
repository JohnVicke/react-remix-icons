import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatSmileLineProps = Omit<IconProps, "name">;

export const ChatSmileLine = (props: ChatSmileLineProps) => (
  <Icon name="chat-smile-line" {...props} />
);
