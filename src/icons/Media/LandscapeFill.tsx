import React from "react";
import { Icon, IconProps } from "../Icon";

export type LandscapeFillProps = Omit<IconProps, "name">;

export const LandscapeFill = (props: LandscapeFillProps) => (
  <Icon name="landscape-fill" {...props} />
);
