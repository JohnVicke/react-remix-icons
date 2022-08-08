import React from "react";
import { Icon, IconProps } from "../Icon";

export type Polaroid2FillProps = Omit<IconProps, "name">;

export const Polaroid2Fill = (props: Polaroid2FillProps) => (
  <Icon name="polaroid-2-fill" {...props} />
);
