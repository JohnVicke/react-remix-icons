import React from "react";
import { Icon, IconProps } from "../Icon";

export type UploadCloudLineProps = Omit<IconProps, "name">;

export const UploadCloudLine = (props: UploadCloudLineProps) => (
  <Icon name="upload-cloud-line" {...props} />
);
