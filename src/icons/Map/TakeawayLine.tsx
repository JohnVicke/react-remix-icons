import React from "react";
import { Icon, IconProps } from "../Icon";

export type TakeawayLineProps = Omit<IconProps, "name">;

export const TakeawayLine = (props: TakeawayLineProps) => (
  <Icon name="takeaway-line" {...props} />
);
