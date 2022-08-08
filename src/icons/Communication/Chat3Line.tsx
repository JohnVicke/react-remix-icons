import React from "react";
import { Icon, IconProps } from "../Icon";

export type Chat3LineProps = Omit<IconProps, "name">;

export const Chat3Line = (props: Chat3LineProps) => (
  <Icon name="chat-3-line" {...props} />
);
