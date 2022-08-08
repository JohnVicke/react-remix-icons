import React from "react";
import { Icon, IconProps } from "../Icon";

export type RecordCircleLineProps = Omit<IconProps, "name">;

export const RecordCircleLine = (props: RecordCircleLineProps) => (
  <Icon name="record-circle-line" {...props} />
);
