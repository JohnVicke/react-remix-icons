import React from "react";
import { Icon, IconProps } from "../Icon";

export type Scan2LineProps = Omit<IconProps, "name">;

export const Scan2Line = (props: Scan2LineProps) => (
  <Icon name="scan-2-line" {...props} />
);
