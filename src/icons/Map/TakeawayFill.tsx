import React from "react";
import { Icon, IconProps } from "../Icon";

export type TakeawayFillProps = Omit<IconProps, "name">;

export const TakeawayFill = (props: TakeawayFillProps) => (
  <Icon name="takeaway-fill" {...props} />
);
