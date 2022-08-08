import React from "react";
import { Icon, IconProps } from "../Icon";

export type DownloadCloud2FillProps = Omit<IconProps, "name">;

export const DownloadCloud2Fill = (props: DownloadCloud2FillProps) => (
  <Icon name="download-cloud-2-fill" {...props} />
);
