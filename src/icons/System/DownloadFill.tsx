import React from "react";
import { Icon, IconProps } from "../Icon";

export type DownloadFillProps = Omit<IconProps, "name">;

export const DownloadFill = (props: DownloadFillProps) => (
  <Icon name="download-fill" {...props} />
);
