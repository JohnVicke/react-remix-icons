import React from "react";
import { Icon, IconProps } from "../Icon";

export type CarLineProps = Omit<IconProps, "name">;

export const CarLine = (props: CarLineProps) => (
  <Icon name="car-line" {...props} />
);
