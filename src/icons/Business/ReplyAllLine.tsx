import React from "react";
import { Icon, IconProps } from "../Icon";

export type ReplyAllLineProps = Omit<IconProps, "name">;

export const ReplyAllLine = (props: ReplyAllLineProps) => (
  <Icon name="reply-all-line" {...props} />
);
