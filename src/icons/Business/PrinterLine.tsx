import React from "react";
import { Icon, IconProps } from "../Icon";

export type PrinterLineProps = Omit<IconProps, "name">;

export const PrinterLine = (props: PrinterLineProps) => (
  <Icon name="printer-line" {...props} />
);
