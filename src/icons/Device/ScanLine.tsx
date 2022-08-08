import React from "react";
import { Icon, IconProps } from "../Icon";

export type ScanLineProps = Omit<IconProps, "name">;

export const ScanLine = (props: ScanLineProps) => (
  <Icon name="scan-line" {...props} />
);
