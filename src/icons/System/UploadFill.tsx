import React from "react";
import { Icon, IconProps } from "../Icon";

export type UploadFillProps = Omit<IconProps, "name">;

export const UploadFill = (props: UploadFillProps) => (
  <Icon name="upload-fill" {...props} />
);
