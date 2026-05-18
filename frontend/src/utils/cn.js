/**
 * utils/cn.js — Tiny className merge helper (clsx wrapper).
 * Use this for conditional Tailwind class merging.
 */
import { clsx } from 'clsx'
export const cn = (...args) => clsx(...args)
