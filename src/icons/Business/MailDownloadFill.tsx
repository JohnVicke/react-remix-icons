import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailDownloadFillProps = Omit<IconProps, "name">;

export const MailDownloadFill = (props: MailDownloadFillProps) => (
  <Icon name="mail-download-fill" {...props} />
);
