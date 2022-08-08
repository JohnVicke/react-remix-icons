import React from "react";
import { Icon, IconProps } from "../Icon";

export type Message2LineProps = Omit<IconProps, "name">;

export const Message2Line = (props: Message2LineProps) => (
  <Icon name="message-2-line" {...props} />
);
