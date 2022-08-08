import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowRightCircleFillProps = Omit<IconProps, "name">;

export const ArrowRightCircleFill = (props: ArrowRightCircleFillProps) => (
  <Icon name="arrow-right-circle-fill" {...props} />
);
