/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/edit': RouteRecordInfo<'/edit', '/edit', Record<never, never>, Record<never, never>>,
    '/invited/[inviterDid]/[ringAndInviteRkey]/': RouteRecordInfo<'/invited/[inviterDid]/[ringAndInviteRkey]/', '/invited/:inviterDid/:ringAndInviteRkey', { inviterDid: ParamValue<true>, ringAndInviteRkey: ParamValue<true> }, { inviterDid: ParamValue<false>, ringAndInviteRkey: ParamValue<false> }>,
    '/page/[handle]/[rkey]/': RouteRecordInfo<'/page/[handle]/[rkey]/', '/page/:handle/:rkey', { handle: ParamValue<true>, rkey: ParamValue<true> }, { handle: ParamValue<false>, rkey: ParamValue<false> }>,
    '/rings': RouteRecordInfo<'/rings', '/rings', Record<never, never>, Record<never, never>>,
    '/user/[handle]/': RouteRecordInfo<'/user/[handle]/', '/user/:handle', { handle: ParamValue<true> }, { handle: ParamValue<false> }>,
  }
}