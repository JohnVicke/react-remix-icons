import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatSmile3LineProps = Omit<IconProps, "name">;

export const ChatSmile3Line = (props: ChatSmile3LineProps) => (
  <Icon name="chat-smile-3-line" {...props} />
);
