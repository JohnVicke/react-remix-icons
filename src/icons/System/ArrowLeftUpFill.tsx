import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowLeftUpFillProps = Omit<IconProps, "name">;

export const ArrowLeftUpFill = (props: ArrowLeftUpFillProps) => (
  <Icon name="arrow-left-up-fill" {...props} />
);
