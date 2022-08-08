import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarcodeLineProps = Omit<IconProps, "name">;

export const BarcodeLine = (props: BarcodeLineProps) => (
  <Icon name="barcode-line" {...props} />
);
