import React from "react";
import { Icon, IconProps } from "../Icon";

export type PinterestFillProps = Omit<IconProps, "name">;

export const PinterestFill = (props: PinterestFillProps) => (
  <Icon name="pinterest-fill" {...props} />
);
