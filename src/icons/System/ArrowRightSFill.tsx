import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowRightSFillProps = Omit<IconProps, "name">;

export const ArrowRightSFill = (props: ArrowRightSFillProps) => (
  <Icon name="arrow-right-s-fill" {...props} />
);
