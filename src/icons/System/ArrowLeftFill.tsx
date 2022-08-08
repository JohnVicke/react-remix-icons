import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowLeftFillProps = Omit<IconProps, "name">;

export const ArrowLeftFill = (props: ArrowLeftFillProps) => (
  <Icon name="arrow-left-fill" {...props} />
);
