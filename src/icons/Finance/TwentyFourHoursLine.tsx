import React from "react";
import { Icon, IconProps } from "../Icon";

export type TwentyFourHoursLineProps = Omit<IconProps, "name">;

export const TwentyFourHoursLine = (props: TwentyFourHoursLineProps) => (
  <Icon name="24-hours-line" {...props} />
);
