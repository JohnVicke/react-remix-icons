import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileHistoryLineProps = Omit<IconProps, "name">;

export const FileHistoryLine = (props: FileHistoryLineProps) => (
  <Icon name="file-history-line" {...props} />
);
