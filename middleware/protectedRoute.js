'use strict'

export default function ({ store, redirect, route }) {
  if (!store?.state?.user) {
    return redirect('/login/' + `?next=${route.fullPath}`)
  }
}
