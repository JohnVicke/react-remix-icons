import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileExcel2FillProps = Omit<IconProps, "name">;

export const FileExcel2Fill = (props: FileExcel2FillProps) => (
  <Icon name="file-excel-2-fill" {...props} />
);
