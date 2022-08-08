import React from "react";
import { Icon, IconProps } from "../Icon";

export type DownloadLineProps = Omit<IconProps, "name">;

export const DownloadLine = (props: DownloadLineProps) => (
  <Icon name="download-line" {...props} />
);
