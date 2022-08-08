import React from "react";
import { Icon, IconProps } from "../Icon";

export type DownloadCloudFillProps = Omit<IconProps, "name">;

export const DownloadCloudFill = (props: DownloadCloudFillProps) => (
  <Icon name="download-cloud-fill" {...props} />
);
