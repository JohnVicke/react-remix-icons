import React from "react";
import { Icon, IconProps } from "../Icon";

export type Chat1LineProps = Omit<IconProps, "name">;

export const Chat1Line = (props: Chat1LineProps) => (
  <Icon name="chat-1-line" {...props} />
);
