import React from "react";
import { Icon, IconProps } from "../Icon";

export type QrScan2FillProps = Omit<IconProps, "name">;

export const QrScan2Fill = (props: QrScan2FillProps) => (
  <Icon name="qr-scan-2-fill" {...props} />
);
