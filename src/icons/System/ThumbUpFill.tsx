import React from "react";
import { Icon, IconProps } from "../Icon";

export type ThumbUpFillProps = Omit<IconProps, "name">;

export const ThumbUpFill = (props: ThumbUpFillProps) => (
  <Icon name="thumb-up-fill" {...props} />
);
