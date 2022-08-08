import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileZipFillProps = Omit<IconProps, "name">;

export const FileZipFill = (props: FileZipFillProps) => (
  <Icon name="file-zip-fill" {...props} />
);
