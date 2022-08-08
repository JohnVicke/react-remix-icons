import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowLeftCircleLineProps = Omit<IconProps, "name">;

export const ArrowLeftCircleLine = (props: ArrowLeftCircleLineProps) => (
  <Icon name="arrow-left-circle-line" {...props} />
);
