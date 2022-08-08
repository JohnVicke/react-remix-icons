import React from "react";
import { Icon, IconProps } from "../Icon";

export type FlightTakeoffLineProps = Omit<IconProps, "name">;

export const FlightTakeoffLine = (props: FlightTakeoffLineProps) => (
  <Icon name="flight-takeoff-line" {...props} />
);
