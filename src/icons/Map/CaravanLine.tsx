import React from "react";
import { Icon, IconProps } from "../Icon";

export type CaravanLineProps = Omit<IconProps, "name">;

export const CaravanLine = (props: CaravanLineProps) => (
  <Icon name="caravan-line" {...props} />
);
