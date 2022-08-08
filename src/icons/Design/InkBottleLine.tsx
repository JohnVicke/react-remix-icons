import React from "react";
import { Icon, IconProps } from "../Icon";

export type InkBottleLineProps = Omit<IconProps, "name">;

export const InkBottleLine = (props: InkBottleLineProps) => (
  <Icon name="ink-bottle-line" {...props} />
);
