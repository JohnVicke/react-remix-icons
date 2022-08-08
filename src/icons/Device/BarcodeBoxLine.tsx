import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarcodeBoxLineProps = Omit<IconProps, "name">;

export const BarcodeBoxLine = (props: BarcodeBoxLineProps) => (
  <Icon name="barcode-box-line" {...props} />
);
