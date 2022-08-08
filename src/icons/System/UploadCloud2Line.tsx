import React from "react";
import { Icon, IconProps } from "../Icon";

export type UploadCloud2LineProps = Omit<IconProps, "name">;

export const UploadCloud2Line = (props: UploadCloud2LineProps) => (
  <Icon name="upload-cloud-2-line" {...props} />
);
