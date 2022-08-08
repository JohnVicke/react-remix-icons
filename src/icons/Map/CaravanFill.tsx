import React from "react";
import { Icon, IconProps } from "../Icon";

export type CaravanFillProps = Omit<IconProps, "name">;

export const CaravanFill = (props: CaravanFillProps) => (
  <Icon name="caravan-fill" {...props} />
);
