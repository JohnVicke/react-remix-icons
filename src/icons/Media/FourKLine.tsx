import React from "react";
import { Icon, IconProps } from "../Icon";

export type FourKLineProps = Omit<IconProps, "name">;

export const FourKLine = (props: FourKLineProps) => (
  <Icon name="4k-line" {...props} />
);
