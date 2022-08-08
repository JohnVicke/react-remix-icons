import React from "react";
import { Icon, IconProps } from "../Icon";

export type NetflixLineProps = Omit<IconProps, "name">;

export const NetflixLine = (props: NetflixLineProps) => (
  <Icon name="netflix-line" {...props} />
);
