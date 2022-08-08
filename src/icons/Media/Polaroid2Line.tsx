import React from "react";
import { Icon, IconProps } from "../Icon";

export type Polaroid2LineProps = Omit<IconProps, "name">;

export const Polaroid2Line = (props: Polaroid2LineProps) => (
  <Icon name="polaroid-2-line" {...props} />
);
