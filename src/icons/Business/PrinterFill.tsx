import React from "react";
import { Icon, IconProps } from "../Icon";

export type PrinterFillProps = Omit<IconProps, "name">;

export const PrinterFill = (props: PrinterFillProps) => (
  <Icon name="printer-fill" {...props} />
);
