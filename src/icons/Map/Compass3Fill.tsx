import React from "react";
import { Icon, IconProps } from "../Icon";

export type Compass3FillProps = Omit<IconProps, "name">;

export const Compass3Fill = (props: Compass3FillProps) => (
  <Icon name="compass-3-fill" {...props} />
);
