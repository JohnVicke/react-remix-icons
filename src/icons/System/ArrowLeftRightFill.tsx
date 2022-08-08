import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowLeftRightFillProps = Omit<IconProps, "name">;

export const ArrowLeftRightFill = (props: ArrowLeftRightFillProps) => (
  <Icon name="arrow-left-right-fill" {...props} />
);
