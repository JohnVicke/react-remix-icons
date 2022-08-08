import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowRightFillProps = Omit<IconProps, "name">;

export const ArrowRightFill = (props: ArrowRightFillProps) => (
  <Icon name="arrow-right-fill" {...props} />
);
