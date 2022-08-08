import React from "react";
import { Icon, IconProps } from "../Icon";

export type HeartsFillProps = Omit<IconProps, "name">;

export const HeartsFill = (props: HeartsFillProps) => (
  <Icon name="hearts-fill" {...props} />
);
