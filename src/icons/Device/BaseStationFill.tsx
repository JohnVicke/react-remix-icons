import React from "react";
import { Icon, IconProps } from "../Icon";

export type BaseStationFillProps = Omit<IconProps, "name">;

export const BaseStationFill = (props: BaseStationFillProps) => (
  <Icon name="base-station-fill" {...props} />
);
