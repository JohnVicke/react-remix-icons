import React from "react";
import { Icon, IconProps } from "../Icon";

export type QrScan2LineProps = Omit<IconProps, "name">;

export const QrScan2Line = (props: QrScan2LineProps) => (
  <Icon name="qr-scan-2-line" {...props} />
);
