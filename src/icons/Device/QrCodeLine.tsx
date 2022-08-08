import React from "react";
import { Icon, IconProps } from "../Icon";

export type QrCodeLineProps = Omit<IconProps, "name">;

export const QrCodeLine = (props: QrCodeLineProps) => (
  <Icon name="qr-code-line" {...props} />
);
