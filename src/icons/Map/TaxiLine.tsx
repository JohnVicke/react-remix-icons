import React from "react";
import { Icon, IconProps } from "../Icon";

export type TaxiLineProps = Omit<IconProps, "name">;

export const TaxiLine = (props: TaxiLineProps) => (
  <Icon name="taxi-line" {...props} />
);
