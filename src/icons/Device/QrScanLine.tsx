import React from "react";
import { Icon, IconProps } from "../Icon";

export type QrScanLineProps = Omit<IconProps, "name">;

export const QrScanLine = (props: QrScanLineProps) => (
  <Icon name="qr-scan-line" {...props} />
);
