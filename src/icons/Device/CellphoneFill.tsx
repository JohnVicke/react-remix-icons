import React from "react";
import { Icon, IconProps } from "../Icon";

export type CellphoneFillProps = Omit<IconProps, "name">;

export const CellphoneFill = (props: CellphoneFillProps) => (
  <Icon name="cellphone-fill" {...props} />
);
