import React from "react";
import { Icon, IconProps } from "../Icon";

export type ReplyLineProps = Omit<IconProps, "name">;

export const ReplyLine = (props: ReplyLineProps) => (
  <Icon name="reply-line" {...props} />
);
