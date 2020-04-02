const toHHMMSS = function (time, divider) {
  let h = "00"
  let m = "00"
  let s = "00"
  let sep = divider || ":"

  let t = time.toString().replace(/[^0-9]/gm, "")
  let l = t.length

  // No time or no digits in string
  if (!t || !parseInt(t)) {
    return "00:00:00"
  }

  function formatHours() {
    let pt = t.substr(0, 2)

    h = pt.length === 1
      ? "0" + pt
      : parseInt(pt) > 24
        ? h
        : pt
  }

  function formatMinutes() {
    let pm = t.substr(2, 2)

    console.log(pm)

    m = pm.length === 1
      ? "0" + pm
      : parseInt(pm) > 59
        ? m
        : pm
  }

  function formatSeconds() {
    let ps = t.substr(4, 2)

    s = ps.length === 1
      ? "0" + ps
      : parseInt(ps) > 59
        ? s
        : ps
  }

  if (l <= 2) {
    formatHours()
  }

  if (l === 3 || l === 4) {
    formatHours()
    formatMinutes()
  }

  if (l === 5 || l >= 6) {
    formatHours()
    formatMinutes()
    formatSeconds()
  }

  return h + sep + m + sep + s
}

export default toHHMMSS
