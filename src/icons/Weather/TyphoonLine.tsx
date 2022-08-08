import React from "react";
import { Icon, IconProps } from "../Icon";

export type TyphoonLineProps = Omit<IconProps, "name">;

export const TyphoonLine = (props: TyphoonLineProps) => (
  <Icon name="typhoon-line" {...props} />
);
