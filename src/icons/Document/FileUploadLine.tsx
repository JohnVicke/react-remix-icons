import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileUploadLineProps = Omit<IconProps, "name">;

export const FileUploadLine = (props: FileUploadLineProps) => (
  <Icon name="file-upload-line" {...props} />
);
