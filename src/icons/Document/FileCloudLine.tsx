import React from "react";
import { Icon, IconProps } from "../Icon";

export type FileCloudLineProps = Omit<IconProps, "name">;

export const FileCloudLine = (props: FileCloudLineProps) => (
  <Icon name="file-cloud-line" {...props} />
);
