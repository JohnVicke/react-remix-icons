import React from "react";
import { Icon, IconProps } from "../Icon";

export type ReplyFillProps = Omit<IconProps, "name">;

export const ReplyFill = (props: ReplyFillProps) => (
  <Icon name="reply-fill" {...props} />
);
