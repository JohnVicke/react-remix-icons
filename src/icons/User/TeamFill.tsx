import React from "react";
import { Icon, IconProps } from "../Icon";

export type TeamFillProps = Omit<IconProps, "name">;

export const TeamFill = (props: TeamFillProps) => (
  <Icon name="team-fill" {...props} />
);
