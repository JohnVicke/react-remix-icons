import React from "react";
import { Icon, IconProps } from "../Icon";

export type DownloadCloud2LineProps = Omit<IconProps, "name">;

export const DownloadCloud2Line = (props: DownloadCloud2LineProps) => (
  <Icon name="download-cloud-2-line" {...props} />
);
