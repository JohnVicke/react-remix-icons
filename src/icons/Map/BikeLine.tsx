import React from "react";
import { Icon, IconProps } from "../Icon";

export type BikeLineProps = Omit<IconProps, "name">;

export const BikeLine = (props: BikeLineProps) => (
  <Icon name="bike-line" {...props} />
);
