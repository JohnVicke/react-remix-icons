import React from "react";
import { Icon, IconProps } from "../Icon";

export type Compass4LineProps = Omit<IconProps, "name">;

export const Compass4Line = (props: Compass4LineProps) => (
  <Icon name="compass-4-line" {...props} />
);
