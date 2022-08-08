import React from "react";
import { Icon, IconProps } from "../Icon";

export type RecordMailFillProps = Omit<IconProps, "name">;

export const RecordMailFill = (props: RecordMailFillProps) => (
  <Icon name="record-mail-fill" {...props} />
);
