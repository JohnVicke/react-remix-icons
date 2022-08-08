import React from "react";
import { Icon, IconProps } from "../Icon";

export type TyphoonFillProps = Omit<IconProps, "name">;

export const TyphoonFill = (props: TyphoonFillProps) => (
  <Icon name="typhoon-fill" {...props} />
);
