import React from "react";
import { Icon, IconProps } from "../Icon";

export type CarWashingFillProps = Omit<IconProps, "name">;

export const CarWashingFill = (props: CarWashingFillProps) => (
  <Icon name="car-washing-fill" {...props} />
);
