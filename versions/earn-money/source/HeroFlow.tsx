import { useEffect, useId, useState } from "react"

const ribbonShapes = [
  ["M490-240H1210C1120 15 1140 150 1190 290C1260 488 1370 490 1400 675C1426 838 1490 930 1640 1100H1320C1265 920 1272 775 1170 654C1072 536 870 484 723 332C560 163 499-25 490-240Z", "M490-240H1210C990 15 1280 150 1260 290C1220 488 1260 490 1300 675C1336 838 1570 930 1640 1100H1320C1345 920 1152 775 1080 654C982 536 940 484 813 332C650 163 389-25 490-240Z"],
  ["M920-240H1265C1110 37 1168 191 1206 340C1241 479 1306 534 1334 659C1368 808 1408 950 1640 1100H1478C1310 935 1323 791 1286 656C1249 519 1116 446 1029 299C938 144 901-29 920-240Z", "M920-240H1265C980 37 1318 191 1276 340C1281 479 1196 534 1234 659C1278 808 1488 950 1640 1100H1478C1390 935 1203 791 1196 656C1159 519 1186 446 1119 299C1028 144 791-29 920-240Z"],
  ["M1197-240H1292C1127 58 1237 268 1276 421C1303 529 1272 626 1318 760C1366 901 1461 1025 1640 1100H1580C1399 972 1331 873 1292 739C1256 615 1276 541 1248 430C1205 257 1095 70 1197-240Z", "M1197-240H1292C997 58 1367 268 1306 421C1203 529 1152 626 1228 760C1346 901 1541 1025 1640 1100H1580C1479 972 1251 873 1202 739C1136 615 1176 541 1278 430C1335 257 965 70 1197-240Z"],
]

// A continuous ribbon, with fine strands following the same curve.
// Kept as vector artwork so it stays crisp at every viewport size.
export function HeroFlow() {
  const id = useId().replace(/:/g, "")
  const [motion, setMotion] = useState(false)
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setMotion(!query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])
  return (
    <div className="north-hero-flow" aria-hidden="true">
      <svg viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice" focusable="false">
        <defs>
          <linearGradient id={`${id}-body`} x1="620" y1="0" x2="1430" y2="850" gradientUnits="userSpaceOnUse">
            <stop stopColor="#b7e8ee" /><stop offset=".28" stopColor="#68c9d8" />
            <stop offset=".56" stopColor="#258ba6" /><stop offset=".78" stopColor="#0b6b50" />
            <stop offset="1" stopColor="#052456" />
          </linearGradient>
          <linearGradient id={`${id}-fold`} x1="1000" y1="150" x2="1400" y2="880" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e2f2e3" /><stop offset=".4" stopColor="#91d8c2" />
            <stop offset=".72" stopColor="#25a59a" /><stop offset="1" stopColor="#0b6b50" />
          </linearGradient>
          <linearGradient id={`${id}-edge`} x1="1120" y1="0" x2="1330" y2="900" gradientUnits="userSpaceOnUse">
            <stop stopColor="#eef2ce" /><stop offset=".4" stopColor="#c8e6aa" />
            <stop offset="1" stopColor="#5ebba6" />
          </linearGradient>
          <linearGradient id={`${id}-light`} x1="500" y1="180" x2="1400" y2="780" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity=".65" /><stop offset=".65" stopColor="white" stopOpacity=".08" /><stop offset="1" stopColor="white" stopOpacity=".32" />
          </linearGradient>
        </defs>
        <g className="north-hero-flow-ribbon">
          {ribbonShapes.map(([start, end], index) => (
            <path key={index} className="north-hero-flow-sheet" fill={`url(#${id}-${["body", "fold", "edge"][index]})`} d={start}>
              {motion && <animate attributeName="d" dur="10s" values={`${start};${end};${start}`} keyTimes="0;.5;1" calcMode="spline" keySplines=".42 0 .58 1;.42 0 .58 1" repeatCount="indefinite" />}
            </path>
          ))}
          {Array.from({ length: 64 }, (_, i) => {
            const t = i / 63
            const start = `M${510 + t * 670} -180 C${505 + t * 480} ${115 - t * 100},${780 + t * 400} ${380 - t * 130},${1168 + t * 130} ${651 - t * 35} S${1270 + t * 100} 930,${1360 + t * 230} 1080`
            const end = `M${510 + t * 670} -180 C${395 + t * 480} ${115 - t * 100},${870 + t * 400} ${380 - t * 130},${1078 + t * 130} ${651 - t * 35} S${1350 + t * 100} 930,${1360 + t * 230} 1080`
            return <path key={i} d={start} fill="none" stroke={`url(#${id}-light)`} strokeWidth={i % 4 === 0 ? 1.2 : .55} opacity={i % 4 === 0 ? .6 : .4}>
              {motion && <animate attributeName="d" dur="10s" values={`${start};${end};${start}`} keyTimes="0;.5;1" calcMode="spline" keySplines=".42 0 .58 1;.42 0 .58 1" repeatCount="indefinite" />}
            </path>
          })}
        </g>
      </svg>
    </div>
  )
}
