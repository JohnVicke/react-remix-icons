import React from "react";
import { Icon, IconProps } from "../Icon";

export type RainyFillProps = Omit<IconProps, "name">;

export const RainyFill = (props: RainyFillProps) => (
  <Icon name="rainy-fill" {...props} />
);
