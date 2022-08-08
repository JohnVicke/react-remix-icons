import React from "react";
import { Icon, IconProps } from "../Icon";

export type Chat2LineProps = Omit<IconProps, "name">;

export const Chat2Line = (props: Chat2LineProps) => (
  <Icon name="chat-2-line" {...props} />
);
