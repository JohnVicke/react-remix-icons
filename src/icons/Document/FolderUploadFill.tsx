import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderUploadFillProps = Omit<IconProps, "name">;

export const FolderUploadFill = (props: FolderUploadFillProps) => (
  <Icon name="folder-upload-fill" {...props} />
);
