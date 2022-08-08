import React from "react";
import { Icon, IconProps } from "../Icon";

export type RainyLineProps = Omit<IconProps, "name">;

export const RainyLine = (props: RainyLineProps) => (
  <Icon name="rainy-line" {...props} />
);
