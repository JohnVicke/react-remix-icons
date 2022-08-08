import React from "react";
import { Icon, IconProps } from "../Icon";

export type MarkdownFillProps = Omit<IconProps, "name">;

export const MarkdownFill = (props: MarkdownFillProps) => (
  <Icon name="markdown-fill" {...props} />
);
