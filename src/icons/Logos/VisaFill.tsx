import React from "react";
import { Icon, IconProps } from "../Icon";

export type VisaFillProps = Omit<IconProps, "name">;

export const VisaFill = (props: VisaFillProps) => (
  <Icon name="visa-fill" {...props} />
);
