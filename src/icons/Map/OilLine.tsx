import React from "react";
import { Icon, IconProps } from "../Icon";

export type OilLineProps = Omit<IconProps, "name">;

export const OilLine = (props: OilLineProps) => (
  <Icon name="oil-line" {...props} />
);
