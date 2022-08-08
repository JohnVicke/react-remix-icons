import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileCloudFillProps = Omit<IconProps, "name">;

export const FileCloudFill = (props: FileCloudFillProps) => (
  <Icon name="file-cloud-fill" {...props} />
);
