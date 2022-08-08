import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowRightCircleLineProps = Omit<IconProps, "name">;

export const ArrowRightCircleLine = (props: ArrowRightCircleLineProps) => (
  <Icon name="arrow-right-circle-line" {...props} />
);
