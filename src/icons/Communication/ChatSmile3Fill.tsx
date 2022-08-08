import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatSmile3FillProps = Omit<IconProps, "name">;

export const ChatSmile3Fill = (props: ChatSmile3FillProps) => (
  <Icon name="chat-smile-3-fill" {...props} />
);
