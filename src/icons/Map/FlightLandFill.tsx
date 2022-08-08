import React from "react";
import { Icon, IconProps } from "../Icon";

export type FlightLandFillProps = Omit<IconProps, "name">;

export const FlightLandFill = (props: FlightLandFillProps) => (
  <Icon name="flight-land-fill" {...props} />
);
