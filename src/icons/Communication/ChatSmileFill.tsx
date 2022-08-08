import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatSmileFillProps = Omit<IconProps, "name">;

export const ChatSmileFill = (props: ChatSmileFillProps) => (
  <Icon name="chat-smile-fill" {...props} />
);
