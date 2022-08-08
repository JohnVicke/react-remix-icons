import React from "react";
import { Icon, IconProps } from "../Icon";

export type TeamLineProps = Omit<IconProps, "name">;

export const TeamLine = (props: TeamLineProps) => (
  <Icon name="team-line" {...props} />
);
