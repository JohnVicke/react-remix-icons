import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowLeftDownLineProps = Omit<IconProps, "name">;

export const ArrowLeftDownLine = (props: ArrowLeftDownLineProps) => (
  <Icon name="arrow-left-down-line" {...props} />
);
