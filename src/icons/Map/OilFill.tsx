import React from "react";
import { Icon, IconProps } from "../Icon";

export type OilFillProps = Omit<IconProps, "name">;

export const OilFill = (props: OilFillProps) => (
  <Icon name="oil-fill" {...props} />
);
