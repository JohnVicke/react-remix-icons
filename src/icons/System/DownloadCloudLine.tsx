import React from "react";
import { Icon, IconProps } from "../Icon";

export type DownloadCloudLineProps = Omit<IconProps, "name">;

export const DownloadCloudLine = (props: DownloadCloudLineProps) => (
  <Icon name="download-cloud-line" {...props} />
);
