import React from "react";
import { Icon, IconProps } from "../Icon";

export type TwentyFourHoursFillProps = Omit<IconProps, "name">;

export const TwentyFourHoursFill = (props: TwentyFourHoursFillProps) => (
  <Icon name="24-hours-fill" {...props} />
);
