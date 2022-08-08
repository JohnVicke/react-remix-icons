import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarcodeBoxFillProps = Omit<IconProps, "name">;

export const BarcodeBoxFill = (props: BarcodeBoxFillProps) => (
  <Icon name="barcode-box-fill" {...props} />
);
