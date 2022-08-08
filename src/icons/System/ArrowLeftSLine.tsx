import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowLeftSLineProps = Omit<IconProps, "name">;

export const ArrowLeftSLine = (props: ArrowLeftSLineProps) => (
  <Icon name="arrow-left-s-line" {...props} />
);
