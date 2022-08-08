import React from "react";
import { Icon, IconProps } from "../Icon";

export type ScanFillProps = Omit<IconProps, "name">;

export const ScanFill = (props: ScanFillProps) => (
  <Icon name="scan-fill" {...props} />
);
