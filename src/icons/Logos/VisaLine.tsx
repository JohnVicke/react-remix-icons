import React from "react";
import { Icon, IconProps } from "../Icon";

export type VisaLineProps = Omit<IconProps, "name">;

export const VisaLine = (props: VisaLineProps) => (
  <Icon name="visa-line" {...props} />
);
