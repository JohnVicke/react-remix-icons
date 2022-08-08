import React from "react";
import { Icon, IconProps } from "../Icon";

export type BodyScanLineProps = Omit<IconProps, "name">;

export const BodyScanLine = (props: BodyScanLineProps) => (
  <Icon name="body-scan-line" {...props} />
);
