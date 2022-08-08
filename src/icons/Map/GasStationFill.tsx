import React from "react";
import { Icon, IconProps } from "../Icon";

export type GasStationFillProps = Omit<IconProps, "name">;

export const GasStationFill = (props: GasStationFillProps) => (
  <Icon name="gas-station-fill" {...props} />
);
