import React from "react";
import { Icon, IconProps } from "../Icon";

export type SdCardLineProps = Omit<IconProps, "name">;

export const SdCardLine = (props: SdCardLineProps) => (
  <Icon name="sd-card-line" {...props} />
);
