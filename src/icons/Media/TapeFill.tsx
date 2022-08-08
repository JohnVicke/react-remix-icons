import React from "react";
import { Icon, IconProps } from "../Icon";

export type TapeFillProps = Omit<IconProps, "name">;

export const TapeFill = (props: TapeFillProps) => (
  <Icon name="tape-fill" {...props} />
);
