import React from "react";
import { Icon, IconProps } from "../Icon";

export type GasStationLineProps = Omit<IconProps, "name">;

export const GasStationLine = (props: GasStationLineProps) => (
  <Icon name="gas-station-line" {...props} />
);
