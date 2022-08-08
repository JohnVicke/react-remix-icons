import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowLeftLineProps = Omit<IconProps, "name">;

export const ArrowLeftLine = (props: ArrowLeftLineProps) => (
  <Icon name="arrow-left-line" {...props} />
);
