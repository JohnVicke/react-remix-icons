import React from "react";
import { Icon, IconProps } from "../Icon";

export type RecordCircleFillProps = Omit<IconProps, "name">;

export const RecordCircleFill = (props: RecordCircleFillProps) => (
  <Icon name="record-circle-fill" {...props} />
);
