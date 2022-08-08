import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowUpSFillProps = Omit<IconProps, "name">;

export const ArrowUpSFill = (props: ArrowUpSFillProps) => (
  <Icon name="arrow-up-s-fill" {...props} />
);
