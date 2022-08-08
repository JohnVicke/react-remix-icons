import React from "react";
import { Icon, IconProps } from "../Icon";

export type SdCardMiniFillProps = Omit<IconProps, "name">;

export const SdCardMiniFill = (props: SdCardMiniFillProps) => (
  <Icon name="sd-card-mini-fill" {...props} />
);
