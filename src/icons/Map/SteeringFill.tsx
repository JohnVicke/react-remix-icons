import React from "react";
import { Icon, IconProps } from "../Icon";

export type SteeringFillProps = Omit<IconProps, "name">;

export const SteeringFill = (props: SteeringFillProps) => (
  <Icon name="steering-fill" {...props} />
);
