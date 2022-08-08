import React from "react";
import { Icon, IconProps } from "../Icon";

export type QrCodeFillProps = Omit<IconProps, "name">;

export const QrCodeFill = (props: QrCodeFillProps) => (
  <Icon name="qr-code-fill" {...props} />
);
