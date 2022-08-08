import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowLeftUpLineProps = Omit<IconProps, "name">;

export const ArrowLeftUpLine = (props: ArrowLeftUpLineProps) => (
  <Icon name="arrow-left-up-line" {...props} />
);
