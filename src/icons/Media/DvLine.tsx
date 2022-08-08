import React from "react";
import { Icon, IconProps } from "../Icon";

export type DvLineProps = Omit<IconProps, "name">;

export const DvLine = (props: DvLineProps) => (
  <Icon name="dv-line" {...props} />
);
