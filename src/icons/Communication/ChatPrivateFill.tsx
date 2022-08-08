import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChatPrivateFillProps = Omit<IconProps, "name">;

export const ChatPrivateFill = (props: ChatPrivateFillProps) => (
  <Icon name="chat-private-fill" {...props} />
);
