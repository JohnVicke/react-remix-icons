import React from "react";
import { Icon, IconProps } from "../Icon";

export type ThumbDownFillProps = Omit<IconProps, "name">;

export const ThumbDownFill = (props: ThumbDownFillProps) => (
  <Icon name="thumb-down-fill" {...props} />
);
