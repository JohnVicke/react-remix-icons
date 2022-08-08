import React from "react";
import { Icon, IconProps } from "../Icon";

export type HeartLineProps = Omit<IconProps, "name">;

export const HeartLine = (props: HeartLineProps) => (
  <Icon name="heart-line" {...props} />
);
