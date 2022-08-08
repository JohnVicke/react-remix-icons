import React from "react";
import { Icon, IconProps } from "../Icon";

export type Compass2FillProps = Omit<IconProps, "name">;

export const Compass2Fill = (props: Compass2FillProps) => (
  <Icon name="compass-2-fill" {...props} />
);
