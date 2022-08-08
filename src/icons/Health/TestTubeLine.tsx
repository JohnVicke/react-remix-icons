import React from "react";
import { Icon, IconProps } from "../Icon";

export type TestTubeLineProps = Omit<IconProps, "name">;

export const TestTubeLine = (props: TestTubeLineProps) => (
  <Icon name="test-tube-line" {...props} />
);
