import React from "react";
import { Icon, IconProps } from "../Icon";

export type PhoneFindLineProps = Omit<IconProps, "name">;

export const PhoneFindLine = (props: PhoneFindLineProps) => (
  <Icon name="phone-find-line" {...props} />
);
