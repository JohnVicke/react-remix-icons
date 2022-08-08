import React from "react";
import { Icon, IconProps } from "../Icon";

export type FlightTakeoffFillProps = Omit<IconProps, "name">;

export const FlightTakeoffFill = (props: FlightTakeoffFillProps) => (
  <Icon name="flight-takeoff-fill" {...props} />
);
