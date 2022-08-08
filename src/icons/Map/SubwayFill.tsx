import React from "react";
import { Icon, IconProps } from "../Icon";

export type SubwayFillProps = Omit<IconProps, "name">;

export const SubwayFill = (props: SubwayFillProps) => (
  <Icon name="subway-fill" {...props} />
);
