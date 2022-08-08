import React from "react";
import { Icon, IconProps } from "../Icon";

export type NetflixFillProps = Omit<IconProps, "name">;

export const NetflixFill = (props: NetflixFillProps) => (
  <Icon name="netflix-fill" {...props} />
);
