import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileZipLineProps = Omit<IconProps, "name">;

export const FileZipLine = (props: FileZipLineProps) => (
  <Icon name="file-zip-line" {...props} />
);
