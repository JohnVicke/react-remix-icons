import React from "react";
import { Icon, IconProps } from "../Icon";

export type TaxiFillProps = Omit<IconProps, "name">;

export const TaxiFill = (props: TaxiFillProps) => (
  <Icon name="taxi-fill" {...props} />
);
