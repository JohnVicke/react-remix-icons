import React from "react";
import { Icon, IconProps } from "../Icon";

export type CellphoneLineProps = Omit<IconProps, "name">;

export const CellphoneLine = (props: CellphoneLineProps) => (
  <Icon name="cellphone-line" {...props} />
);
