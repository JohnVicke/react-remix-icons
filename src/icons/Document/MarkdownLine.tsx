import React from "react";
import { Icon, IconProps } from "../Icon";

export type MarkdownLineProps = Omit<IconProps, "name">;

export const MarkdownLine = (props: MarkdownLineProps) => (
  <Icon name="markdown-line" {...props} />
);
