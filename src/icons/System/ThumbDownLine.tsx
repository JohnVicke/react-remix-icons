import React from "react";
import { Icon, IconProps } from "../Icon";

export type ThumbDownLineProps = Omit<IconProps, "name">;

export const ThumbDownLine = (props: ThumbDownLineProps) => (
  <Icon name="thumb-down-line" {...props} />
);
