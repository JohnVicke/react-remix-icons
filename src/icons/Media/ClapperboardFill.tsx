import React from "react";
import { Icon, IconProps } from "../Icon";

export type ClapperboardFillProps = Omit<IconProps, "name">;

export const ClapperboardFill = (props: ClapperboardFillProps) => (
  <Icon name="clapperboard-fill" {...props} />
);
