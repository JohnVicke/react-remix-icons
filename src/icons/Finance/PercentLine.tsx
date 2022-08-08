import React from "react";
import { Icon, IconProps } from "../Icon";

export type PercentLineProps = Omit<IconProps, "name">;

export const PercentLine = (props: PercentLineProps) => (
  <Icon name="percent-line" {...props} />
);
