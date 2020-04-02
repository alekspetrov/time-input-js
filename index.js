export default function (time, divider) {
  let dt = "00:00:00"
  if (!time) return dt

  if (typeof time !== "string" && typeof time !== "number") {
    console.warn("Time in time-input is not a string or a number!")
    return dt
  }

  let t, l
  let h = "00"
  let m = "00"
  let s = "00"
  let sep = divider || ":"

  t = time.toString().replace(/[^0-9]/gm, "")
  l = t.length

  if (!parseInt(t)) return dt

  function handler(type, value) {
    let r
    let l = type === "h" ? 24 : 59

    r = value.length === 1
      ? "0" + value
      : parseInt(value) > l
        ? h
        : value

    return r
  }

  function fh() {
    return handler("h", t.substr(0, 2))
  }

  function fm() {
    return handler("m", t.substr(2, 2))
  }

  function fs() {
    return handler("s", t.substr(4, 2))
  }

  if (l <= 2) {
    h = fh()
  }

  if (l === 3 || l === 4) {
    h = fh()
    m = fm()
  }

  if (l === 5 || l >= 6) {
    h = fh()
    m = fm()
    s = fs()
  }

  return h + sep + m + sep + s
}
