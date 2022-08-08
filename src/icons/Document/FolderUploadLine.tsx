import React from "react";
import { Icon, IconProps } from "../Icon";

export type FolderUploadLineProps = Omit<IconProps, "name">;

export const FolderUploadLine = (props: FolderUploadLineProps) => (
  <Icon name="folder-upload-line" {...props} />
);
