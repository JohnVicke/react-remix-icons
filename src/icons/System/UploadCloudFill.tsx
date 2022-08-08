import React from "react";
import { Icon, IconProps } from "../Icon";

export type UploadCloudFillProps = Omit<IconProps, "name">;

export const UploadCloudFill = (props: UploadCloudFillProps) => (
  <Icon name="upload-cloud-fill" {...props} />
);
