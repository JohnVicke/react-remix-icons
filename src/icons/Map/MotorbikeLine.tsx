import React from "react";
import { Icon, IconProps } from "../Icon";

export type MotorbikeLineProps = Omit<IconProps, "name">;

export const MotorbikeLine = (props: MotorbikeLineProps) => (
  <Icon name="motorbike-line" {...props} />
);
