import React from "react";
import { Icon, IconProps } from "../Icon";

export type Compass2LineProps = Omit<IconProps, "name">;

export const Compass2Line = (props: Compass2LineProps) => (
  <Icon name="compass-2-line" {...props} />
);
