/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import type {InputPropsT, BaseInputPropsT, InternalStateT} from './types';

export function getSharedProps(
  props: BaseInputPropsT | InputPropsT,
  state: InternalStateT,
) {
  const {disabled, error, adjoined, size, required} = props;
  const {isFocused} = state;
  return {
    $isFocused: isFocused,
    $disabled: disabled,
    $error: error,
    $adjoined: adjoined,
    $size: size,
    $required: required,
  };
}
