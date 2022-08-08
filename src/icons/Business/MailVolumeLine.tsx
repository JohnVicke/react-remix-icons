import React from "react";
import { Icon, IconProps } from "../Icon";

export type MailVolumeLineProps = Omit<IconProps, "name">;

export const MailVolumeLine = (props: MailVolumeLineProps) => (
  <Icon name="mail-volume-line" {...props} />
);
