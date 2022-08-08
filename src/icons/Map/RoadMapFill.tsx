import React from "react";
import { Icon, IconProps } from "../Icon";

export type RoadMapFillProps = Omit<IconProps, "name">;

export const RoadMapFill = (props: RoadMapFillProps) => (
  <Icon name="road-map-fill" {...props} />
);
