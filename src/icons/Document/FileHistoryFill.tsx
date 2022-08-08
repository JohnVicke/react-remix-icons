import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileHistoryFillProps = Omit<IconProps, "name">;

export const FileHistoryFill = (props: FileHistoryFillProps) => (
  <Icon name="file-history-fill" {...props} />
);
