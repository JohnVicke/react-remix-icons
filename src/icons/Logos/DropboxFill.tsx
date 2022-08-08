import React from "react";
import { Icon, IconProps } from "../Icon";

export type DropboxFillProps = Omit<IconProps, "name">;

export const DropboxFill = (props: DropboxFillProps) => (
  <Icon name="dropbox-fill" {...props} />
);
