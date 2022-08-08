import React from "react";
import { Icon, IconProps } from "../Icon";

export type PercentFillProps = Omit<IconProps, "name">;

export const PercentFill = (props: PercentFillProps) => (
  <Icon name="percent-fill" {...props} />
);
