import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatSmile2LineProps = Omit<IconProps, "name">;

export const ChatSmile2Line = (props: ChatSmile2LineProps) => (
  <Icon name="chat-smile-2-line" {...props} />
);
