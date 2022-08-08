import React from "react";
import { Icon, IconProps } from "../Icon";

export type EarthquakeLineProps = Omit<IconProps, "name">;

export const EarthquakeLine = (props: EarthquakeLineProps) => (
  <Icon name="earthquake-line" {...props} />
);
