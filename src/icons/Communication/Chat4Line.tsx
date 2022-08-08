import React from "react";
import { Icon, IconProps } from "../Icon";

export type Chat4LineProps = Omit<IconProps, "name">;

export const Chat4Line = (props: Chat4LineProps) => (
  <Icon name="chat-4-line" {...props} />
);
