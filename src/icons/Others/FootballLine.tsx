import React from "react";
import { Icon, IconProps } from "../Icon";

export type FootballLineProps = Omit<IconProps, "name">;

export const FootballLine = (props: FootballLineProps) => (
  <Icon name="football-line" {...props} />
);
