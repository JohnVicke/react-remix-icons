import React from "react";
import { Icon, IconProps } from "../Icon";

export type FourKFillProps = Omit<IconProps, "name">;

export const FourKFill = (props: FourKFillProps) => (
  <Icon name="4k-fill" {...props} />
);
