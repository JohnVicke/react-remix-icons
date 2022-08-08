import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileExcelFillProps = Omit<IconProps, "name">;

export const FileExcelFill = (props: FileExcelFillProps) => (
  <Icon name="file-excel-fill" {...props} />
);
