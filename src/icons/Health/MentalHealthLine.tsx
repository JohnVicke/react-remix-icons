import React from "react";
import { Icon, IconProps } from "../Icon";

export type MentalHealthLineProps = Omit<IconProps, "name">;

export const MentalHealthLine = (props: MentalHealthLineProps) => (
  <Icon name="mental-health-line" {...props} />
);
