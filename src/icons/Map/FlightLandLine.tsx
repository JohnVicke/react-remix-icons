import React from "react";
import { Icon, IconProps } from "../Icon";

export type FlightLandLineProps = Omit<IconProps, "name">;

export const FlightLandLine = (props: FlightLandLineProps) => (
  <Icon name="flight-land-line" {...props} />
);
