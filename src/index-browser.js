import * as _mixins from './mixins';
import * as _mixinsBrowser from './mixins-browser';
import __ from 'lodash';

/**
 * @typedef {import('lodash').LoDashStatic} LoDashStatic
 * @typedef {typeof _mixins & typeof _mixinsBrowser} FirecloudBrowserLoDashMixins
 * @typedef {LoDashStatic & FirecloudBrowserLoDashMixins} FirecloudBrowserLoDashStatic
 */

/** @type {FirecloudBrowserLoDashMixins} */
export let mixins = {
  ..._mixins,
  ..._mixinsBrowser
};

/** @type {FirecloudBrowserLoDashStatic} */
// @ts-ignore TS2345
// eslint-disable-next-line firecloud/no-underscore-prefix-exported
export let _ = __.runInContext().mixin(mixins);

export default _;