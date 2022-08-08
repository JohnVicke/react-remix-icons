import React from "react";
import { Icon, IconProps } from "../Icon";

export type ReplyAllFillProps = Omit<IconProps, "name">;

export const ReplyAllFill = (props: ReplyAllFillProps) => (
  <Icon name="reply-all-fill" {...props} />
);
