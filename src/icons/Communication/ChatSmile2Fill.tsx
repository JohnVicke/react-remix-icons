import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatSmile2FillProps = Omit<IconProps, "name">;

export const ChatSmile2Fill = (props: ChatSmile2FillProps) => (
  <Icon name="chat-smile-2-fill" {...props} />
);
