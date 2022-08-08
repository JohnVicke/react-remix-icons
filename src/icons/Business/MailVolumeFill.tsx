import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailVolumeFillProps = Omit<IconProps, "name">;

export const MailVolumeFill = (props: MailVolumeFillProps) => (
  <Icon name="mail-volume-fill" {...props} />
);
