import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileExcel2LineProps = Omit<IconProps, "name">;

export const FileExcel2Line = (props: FileExcel2LineProps) => (
  <Icon name="file-excel-2-line" {...props} />
);
