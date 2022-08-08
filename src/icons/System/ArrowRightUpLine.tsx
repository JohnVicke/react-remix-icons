import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowRightUpLineProps = Omit<IconProps, "name">;

export const ArrowRightUpLine = (props: ArrowRightUpLineProps) => (
  <Icon name="arrow-right-up-line" {...props} />
);
