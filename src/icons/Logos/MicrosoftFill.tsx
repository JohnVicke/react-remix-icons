import React from "react";
import { Icon, IconProps } from "../Icon";

export type MicrosoftFillProps = Omit<IconProps, "name">;

export const MicrosoftFill = (props: MicrosoftFillProps) => (
  <Icon name="microsoft-fill" {...props} />
);
