import React from "react";
import { Icon, IconProps } from "../Icon";

export type SdCardFillProps = Omit<IconProps, "name">;

export const SdCardFill = (props: SdCardFillProps) => (
  <Icon name="sd-card-fill" {...props} />
);
