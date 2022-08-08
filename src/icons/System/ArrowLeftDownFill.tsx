import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowLeftDownFillProps = Omit<IconProps, "name">;

export const ArrowLeftDownFill = (props: ArrowLeftDownFillProps) => (
  <Icon name="arrow-left-down-fill" {...props} />
);
