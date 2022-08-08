import React from "react";
import { Icon, IconProps } from "../Icon";

export type ClapperboardLineProps = Omit<IconProps, "name">;

export const ClapperboardLine = (props: ClapperboardLineProps) => (
  <Icon name="clapperboard-line" {...props} />
);
