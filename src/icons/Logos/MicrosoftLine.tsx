import React from "react";
import { Icon, IconProps } from "../Icon";

export type MicrosoftLineProps = Omit<IconProps, "name">;

export const MicrosoftLine = (props: MicrosoftLineProps) => (
  <Icon name="microsoft-line" {...props} />
);
