import React from "react";
import { Icon, IconProps } from "../Icon";

export type UploadCloud2FillProps = Omit<IconProps, "name">;

export const UploadCloud2Fill = (props: UploadCloud2FillProps) => (
  <Icon name="upload-cloud-2-fill" {...props} />
);
