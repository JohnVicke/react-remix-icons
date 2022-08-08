import React from "react";
import { Icon, IconProps } from "../Icon";

export type PrinterCloudLineProps = Omit<IconProps, "name">;

export const PrinterCloudLine = (props: PrinterCloudLineProps) => (
  <Icon name="printer-cloud-line" {...props} />
);
