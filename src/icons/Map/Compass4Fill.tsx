import React from "react";
import { Icon, IconProps } from "../Icon";

export type Compass4FillProps = Omit<IconProps, "name">;

export const Compass4Fill = (props: Compass4FillProps) => (
  <Icon name="compass-4-fill" {...props} />
);
