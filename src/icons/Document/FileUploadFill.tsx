import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileUploadFillProps = Omit<IconProps, "name">;

export const FileUploadFill = (props: FileUploadFillProps) => (
  <Icon name="file-upload-fill" {...props} />
);
