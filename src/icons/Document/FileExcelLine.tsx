import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileExcelLineProps = Omit<IconProps, "name">;

export const FileExcelLine = (props: FileExcelLineProps) => (
  <Icon name="file-excel-line" {...props} />
);
