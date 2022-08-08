import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarcodeFillProps = Omit<IconProps, "name">;

export const BarcodeFill = (props: BarcodeFillProps) => (
  <Icon name="barcode-fill" {...props} />
);
