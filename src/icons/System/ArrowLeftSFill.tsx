import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowLeftSFillProps = Omit<IconProps, "name">;

export const ArrowLeftSFill = (props: ArrowLeftSFillProps) => (
  <Icon name="arrow-left-s-fill" {...props} />
);
