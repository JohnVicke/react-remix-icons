import React from "react";
import { Icon, IconProps } from "../Icon";

export type ThumbUpLineProps = Omit<IconProps, "name">;

export const ThumbUpLine = (props: ThumbUpLineProps) => (
  <Icon name="thumb-up-line" {...props} />
);
