import React from "react";
import { Icon, IconProps } from "../Icon";

export type FootballFillProps = Omit<IconProps, "name">;

export const FootballFill = (props: FootballFillProps) => (
  <Icon name="football-fill" {...props} />
);
