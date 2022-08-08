import React from "react";
import { Icon, IconProps } from "../Icon";

export type MentalHealthFillProps = Omit<IconProps, "name">;

export const MentalHealthFill = (props: MentalHealthFillProps) => (
  <Icon name="mental-health-fill" {...props} />
);
