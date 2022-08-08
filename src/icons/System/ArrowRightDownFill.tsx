import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowRightDownFillProps = Omit<IconProps, "name">;

export const ArrowRightDownFill = (props: ArrowRightDownFillProps) => (
  <Icon name="arrow-right-down-fill" {...props} />
);
