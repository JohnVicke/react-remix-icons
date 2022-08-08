import React from "react";
import { Icon, IconProps } from "../Icon";

export type TestTubeFillProps = Omit<IconProps, "name">;

export const TestTubeFill = (props: TestTubeFillProps) => (
  <Icon name="test-tube-fill" {...props} />
);
