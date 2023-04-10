export const ONE_SECOND = 1000 // 一秒
export const ONE_MINUTE = ONE_SECOND * 60 // 一分钟
export const ONE_HOUR = ONE_MINUTE * 60 // 一小时
export const ONE_DAY = ONE_HOUR * 24 // 一天
export const ONE_YEAR = ONE_DAY * 365 // 一年

export const isProd = process.env.NODE_ENV === 'production'
export const isDesktop = process.env.NEXT_PUBLIC_PLATFORM === 'DESKTOP'
export const baseURL = process.env.NEXT_PUBLIC_API_HOST as string

export const host = process.env.NEXT_PUBLIC_HOST

export const CHAT_URL = '/chat'

export const LOGIN_SUCCESS_REDIRECT_URL = CHAT_URL

export const NAV_HEIGHT = 56
export const SIDEBAR_WIDTH = 260
export const CHAT_WIDTH = 720

export const THIRD_PARTY_LOGIN_TAG = 't'

export const THEME_KEY = 'fower-mode'
export const LANGUAGE_KEY = 'own-chat-language'
