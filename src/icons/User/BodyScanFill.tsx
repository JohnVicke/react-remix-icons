import React from "react";
import { Icon, IconProps } from "../Icon";

export type BodyScanFillProps = Omit<IconProps, "name">;

export const BodyScanFill = (props: BodyScanFillProps) => (
  <Icon name="body-scan-fill" {...props} />
);
