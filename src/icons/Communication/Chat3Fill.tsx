import React from "react";
import { Icon, IconProps } from "../Icon";

export type Chat3FillProps = Omit<IconProps, "name">;

export const Chat3Fill = (props: Chat3FillProps) => (
  <Icon name="chat-3-fill" {...props} />
);
