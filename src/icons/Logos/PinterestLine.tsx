import React from "react";
import { Icon, IconProps } from "../Icon";

export type PinterestLineProps = Omit<IconProps, "name">;

export const PinterestLine = (props: PinterestLineProps) => (
  <Icon name="pinterest-line" {...props} />
);
