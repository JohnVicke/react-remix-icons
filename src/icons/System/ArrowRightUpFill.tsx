import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowRightUpFillProps = Omit<IconProps, "name">;

export const ArrowRightUpFill = (props: ArrowRightUpFillProps) => (
  <Icon name="arrow-right-up-fill" {...props} />
);
