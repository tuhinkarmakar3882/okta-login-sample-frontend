'use strict'

export default function ({ store, redirect, route }) {
  if (!store?.state?.user?.isAuthenticated) {
    return redirect('/login/' + `?next=${route.fullPath}`)
  }
}
