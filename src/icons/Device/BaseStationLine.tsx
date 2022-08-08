import React from "react";
import { Icon, IconProps } from "../Icon";

export type BaseStationLineProps = Omit<IconProps, "name">;

export const BaseStationLine = (props: BaseStationLineProps) => (
  <Icon name="base-station-line" {...props} />
);
