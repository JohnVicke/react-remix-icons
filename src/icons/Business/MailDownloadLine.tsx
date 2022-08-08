import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailDownloadLineProps = Omit<IconProps, "name">;

export const MailDownloadLine = (props: MailDownloadLineProps) => (
  <Icon name="mail-download-line" {...props} />
);
