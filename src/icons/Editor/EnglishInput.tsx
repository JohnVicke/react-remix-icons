import React from "react";
import { Icon, IconProps } from "../Icon";

export type EnglishInputProps = Omit<IconProps, "name">;

export const EnglishInput = (props: EnglishInputProps) => (
  <Icon name="english-input" {...props} />
);
