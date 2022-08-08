import React from "react";
import { Icon, IconProps } from "../Icon";

export type PrinterCloudFillProps = Omit<IconProps, "name">;

export const PrinterCloudFill = (props: PrinterCloudFillProps) => (
  <Icon name="printer-cloud-fill" {...props} />
);
