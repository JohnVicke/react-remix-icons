import React from "react";
import { Icon, IconProps } from "../Icon";

export type UploadLineProps = Omit<IconProps, "name">;

export const UploadLine = (props: UploadLineProps) => (
  <Icon name="upload-line" {...props} />
);
