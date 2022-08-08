import React from "react";
import { Icon, IconProps } from "../Icon";

export type CarWashingLineProps = Omit<IconProps, "name">;

export const CarWashingLine = (props: CarWashingLineProps) => (
  <Icon name="car-washing-line" {...props} />
);
