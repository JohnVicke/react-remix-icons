import React from "react";
import { Icon, IconProps } from "../Icon";

export type CarFillProps = Omit<IconProps, "name">;

export const CarFill = (props: CarFillProps) => (
  <Icon name="car-fill" {...props} />
);
