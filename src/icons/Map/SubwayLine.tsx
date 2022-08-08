import React from "react";
import { Icon, IconProps } from "../Icon";

export type SubwayLineProps = Omit<IconProps, "name">;

export const SubwayLine = (props: SubwayLineProps) => (
  <Icon name="subway-line" {...props} />
);
