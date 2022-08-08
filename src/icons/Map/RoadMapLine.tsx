import React from "react";
import { Icon, IconProps } from "../Icon";

export type RoadMapLineProps = Omit<IconProps, "name">;

export const RoadMapLine = (props: RoadMapLineProps) => (
  <Icon name="road-map-line" {...props} />
);
