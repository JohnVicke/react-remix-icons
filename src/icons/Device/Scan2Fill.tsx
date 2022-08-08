import React from "react";
import { Icon, IconProps } from "../Icon";

export type Scan2FillProps = Omit<IconProps, "name">;

export const Scan2Fill = (props: Scan2FillProps) => (
  <Icon name="scan-2-fill" {...props} />
);
