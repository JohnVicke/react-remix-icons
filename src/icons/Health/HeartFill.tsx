import React from "react";
import { Icon, IconProps } from "../Icon";

export type HeartFillProps = Omit<IconProps, "name">;

export const HeartFill = (props: HeartFillProps) => (
  <Icon name="heart-fill" {...props} />
);
