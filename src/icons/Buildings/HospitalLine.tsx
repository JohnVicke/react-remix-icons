import React from "react";
import { Icon, IconProps } from "../Icon";

export type HospitalLineProps = Omit<IconProps, "name">;

export const HospitalLine = (props: HospitalLineProps) => (
  <Icon name="hospital-line" {...props} />
);
