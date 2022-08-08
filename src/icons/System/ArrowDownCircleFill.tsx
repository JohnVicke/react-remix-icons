import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowDownCircleFillProps = Omit<IconProps, "name">;

export const ArrowDownCircleFill = (props: ArrowDownCircleFillProps) => (
  <Icon name="arrow-down-circle-fill" {...props} />
);
