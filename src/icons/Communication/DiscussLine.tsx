import React from "react";
import { Icon, IconProps } from "../Icon";

export type DiscussLineProps = Omit<IconProps, "name">;

export const DiscussLine = (props: DiscussLineProps) => (
  <Icon name="discuss-line" {...props} />
);
