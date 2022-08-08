import React from "react";
import { Icon, IconProps } from "../Icon";

export type QrScanFillProps = Omit<IconProps, "name">;

export const QrScanFill = (props: QrScanFillProps) => (
  <Icon name="qr-scan-fill" {...props} />
);
