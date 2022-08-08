import React from "react";
import { Icon, IconProps } from "../Icon";

export type RecordMailLineProps = Omit<IconProps, "name">;

export const RecordMailLine = (props: RecordMailLineProps) => (
  <Icon name="record-mail-line" {...props} />
);
