import React from "react";
import { Icon, IconProps } from "../Icon";

export type LineHeightProps = Omit<IconProps, "name">;

export const LineHeight = (props: LineHeightProps) => (
  <Icon name="line-height" {...props} />
);
