import React from "react";
import { Icon, IconProps } from "../Icon";

export type DvFillProps = Omit<IconProps, "name">;

export const DvFill = (props: DvFillProps) => (
  <Icon name="dv-fill" {...props} />
);
