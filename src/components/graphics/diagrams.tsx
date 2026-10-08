/**
 * Technical line-art diagrams — intentionally diagrammatic (per DESIGN-SYSTEM §14):
 * they communicate vehicle/system classes without fabricating real hardware photos.
 * All SVGs are decorative illustrations labelled as schematics in the UI.
 */

interface DiagramProps {
  className?: string;
}

/** Vertical launch-vehicle schematic with dimension marks. */
export function LaunchVehicleDiagram({ className }: DiagramProps) {
  return (
    <svg
      viewBox="0 0 200 340"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* grid reference lines */}
      <path d="M20 8 V332 M180 8 V332" stroke="currentColor" strokeOpacity="0.14" strokeDasharray="2 6" />
      {/* nose cone */}
      <path d="M100 16 C100 16 78 52 78 84 L122 84 C122 52 100 16 100 16 Z" stroke="currentColor" strokeWidth="1.25" />
      {/* upper stage */}
      <rect x="78" y="84" width="44" height="70" stroke="currentColor" strokeWidth="1.25" />
      {/* interstage */}
      <path d="M78 154 H122" stroke="var(--dx-accent)" strokeWidth="1.25" />
      <rect x="78" y="154" width="44" height="78" stroke="currentColor" strokeWidth="1.25" />
      {/* boattail */}
      <path d="M78 232 L70 258 H130 L122 232" stroke="currentColor" strokeWidth="1.25" />
      {/* nozzle */}
      <path d="M88 258 L84 292 H116 L112 258" stroke="currentColor" strokeWidth="1.25" />
      {/* fins */}
      <path d="M78 190 L58 240 L70 240 L78 226 Z" stroke="currentColor" strokeWidth="1" />
      <path d="M122 190 L142 240 L130 240 L122 226 Z" stroke="currentColor" strokeWidth="1" />
      {/* plume (static-fire suggestion) */}
      <path d="M92 296 L90 316 M100 296 V326 M108 296 L110 316" stroke="var(--dx-accent-2)" strokeWidth="1.25" strokeOpacity="0.8" />
      {/* dimension line */}
      <path d="M148 16 V292 M144 16 H152 M144 292 H152" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
      <text x="158" y="150" fill="currentColor" fillOpacity="0.6" fontSize="9" fontFamily="var(--font-ibm-plex-mono)">L/OA</text>
      {/* section markers */}
      <text x="28" y="60" fill="currentColor" fillOpacity="0.5" fontSize="8" fontFamily="var(--font-ibm-plex-mono)">S-1</text>
      <text x="28" y="200" fill="currentColor" fillOpacity="0.5" fontSize="8" fontFamily="var(--font-ibm-plex-mono)">S-0</text>
    </svg>
  );
}

/** Liquid-bipropellant engine schematic (generic, non-specific). */
export function EngineDiagram({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 260 300" className={className} fill="none" aria-hidden="true">
      {/* injector head */}
      <rect x="92" y="24" width="76" height="26" stroke="currentColor" strokeWidth="1.25" />
      <path d="M104 30 V44 M118 30 V44 M132 30 V44 M146 30 V44" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
      <text x="176" y="40" fill="currentColor" fillOpacity="0.55" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">INJ</text>
      {/* combustion chamber */}
      <path d="M100 50 H160 V118 H100 Z" stroke="currentColor" strokeWidth="1.25" />
      <text x="176" y="88" fill="currentColor" fillOpacity="0.55" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">CC</text>
      {/* throat */}
      <path d="M100 118 L112 138 H148 L160 118" stroke="var(--dx-accent)" strokeWidth="1.25" />
      {/* nozzle bell */}
      <path d="M112 138 C88 168 76 212 74 258 H186 C184 212 172 168 148 138" stroke="currentColor" strokeWidth="1.25" />
      {/* cooling channels */}
      <path d="M116 146 C98 174 88 212 86 250 M144 146 C162 174 172 212 174 250" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
      <text x="196" y="220" fill="currentColor" fillOpacity="0.55" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">NOZ</text>
      {/* feed lines */}
      <path d="M92 62 C56 62 48 92 48 130 V196" stroke="currentColor" strokeWidth="1" />
      <path d="M168 56 C210 56 216 92 216 130 V176" stroke="currentColor" strokeWidth="1" />
      <text x="30" y="216" fill="currentColor" fillOpacity="0.55" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">LOX</text>
      <text x="222" y="196" fill="currentColor" fillOpacity="0.55" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">RP-1</text>
      {/* gimbal reference */}
      <circle cx="130" cy="266" r="6" stroke="var(--dx-accent)" strokeWidth="1" />
      <path d="M74 258 H186" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
      <text x="96" y="290" fill="currentColor" fillOpacity="0.5" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">GIMBAL</text>
    </svg>
  );
}

/** Cluster configuration schematic — 3 engines under a thrust structure. */
export function EngineClusterDiagram({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 300 280" className={className} fill="none" aria-hidden="true">
      {/* thrust structure */}
      <path d="M60 40 H240 L204 84 H96 Z" stroke="currentColor" strokeWidth="1.25" />
      <path d="M96 84 H204" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
      {/* three engines */}
      <g stroke="currentColor" strokeWidth="1.1">
        <path d="M112 92 L102 128 H134 L124 92" />
        <path d="M102 128 C92 152 86 176 84 202 H152 C150 176 144 152 134 128" />
      </g>
      <g stroke="currentColor" strokeWidth="1.1">
        <path d="M74 92 L64 128 H96 L86 92" opacity="0.55" />
        <path d="M64 128 C54 152 48 176 46 202 H114 C112 176 106 152 96 128" opacity="0.55" />
      </g>
      <g stroke="currentColor" strokeWidth="1.1">
        <path d="M150 92 L140 128 H172 L162 92" opacity="0.55" />
        <path d="M140 128 C130 152 124 176 122 202 H190 C188 176 182 152 172 128" opacity="0.55" />
      </g>
      {/* center engine highlighted */}
      <circle cx="118" cy="152" r="10" stroke="var(--dx-accent)" strokeWidth="1" />
      <text x="134" y="156" fill="var(--dx-accent)" fillOpacity="0.9" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">CORE</text>
      {/* cluster callout */}
      <text x="212" y="60" fill="currentColor" fillOpacity="0.55" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">CLUSTER</text>
      <path d="M204 56 L196 68" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
      <text x="120" y="238" fill="currentColor" fillOpacity="0.5" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">xN SCALABLE</text>
    </svg>
  );
}

/** VTVL landing schematic — descent trajectory + landing legs. */
export function VtvlDiagram({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 300 320" className={className} fill="none" aria-hidden="true">
      {/* descent arc */}
      <path
        d="M262 24 C220 90 150 130 96 190 C80 208 70 228 66 248"
        stroke="var(--dx-accent)"
        strokeWidth="1.25"
        strokeDasharray="4 5"
      />
      <path d="M262 24 L254 34 M262 24 L252 22" stroke="var(--dx-accent)" strokeWidth="1.25" />
      {/* pad */}
      <path d="M40 282 H260" stroke="currentColor" strokeWidth="1.25" />
      <path d="M56 282 V274 M244 282 V274 M100 282 V277 M200 282 V277" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
      {/* vehicle */}
      <g stroke="currentColor" strokeWidth="1.25">
        <path d="M112 138 C112 138 104 156 104 170 L128 170 C128 156 120 138 120 138 Z" />
        <rect x="104" y="170" width="24" height="52" />
        <path d="M108 222 L98 254 M124 222 L134 254" />
        <path d="M110 254 H122 L120 236 H112 Z" />
      </g>
      {/* thrust plume */}
      <path d="M114 260 L113 272 M116 260 V276 M118 260 L119 272" stroke="var(--dx-accent-2)" strokeWidth="1.25" strokeOpacity="0.85" />
      {/* annotations */}
      <text x="196" y="60" fill="currentColor" fillOpacity="0.55" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">DESCENT BURN</text>
      <text x="196" y="252" fill="currentColor" fillOpacity="0.55" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">VTVL PAD</text>
      <text x="176" y="160" fill="currentColor" fillOpacity="0.45" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">HOB</text>
      <path d="M172 156 L150 156" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
    </svg>
  );
}

/** UAV top-view schematic (fixed-wing). */
export function UavDiagram({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 320 240" className={className} fill="none" aria-hidden="true">
      {/* fuselage */}
      <path d="M160 24 C166 40 168 64 168 96 L168 176 C168 200 166 214 160 224 C154 214 152 200 152 176 L152 96 C152 64 154 40 160 24 Z" stroke="currentColor" strokeWidth="1.25" />
      {/* wings */}
      <path d="M152 108 C120 104 60 116 24 138 C52 146 116 146 152 140 Z" stroke="currentColor" strokeWidth="1.25" />
      <path d="M168 108 C200 104 260 116 296 138 C268 146 204 146 168 140 Z" stroke="currentColor" strokeWidth="1.25" />
      {/* tail */}
      <path d="M152 196 C132 194 104 198 84 208 C104 214 132 214 152 210 Z" stroke="currentColor" strokeWidth="1" />
      <path d="M168 196 C188 194 216 198 236 208 C216 214 188 214 168 210 Z" stroke="currentColor" strokeWidth="1" />
      {/* centerline */}
      <path d="M160 24 V224" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" strokeOpacity="0.5" />
      {/* payload bay */}
      <rect x="146" y="118" width="28" height="34" stroke="var(--dx-accent)" strokeWidth="1" />
      <text x="182" y="138" fill="var(--dx-accent)" fillOpacity="0.9" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">PAYLOAD</text>
      <text x="26" y="170" fill="currentColor" fillOpacity="0.5" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">SPAN/REF</text>
      <text x="196" y="228" fill="currentColor" fillOpacity="0.5" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">PLAN VIEW</text>
    </svg>
  );
}

/** Orbital formation schematic — satellite "pixels" forming a pattern. */
export function OrbitDiagram({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 340 240" className={className} fill="none" aria-hidden="true">
      {/* earth limb */}
      <circle cx="60" cy="290" r="180" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="60" cy="290" r="160" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
      <text x="18" y="176" fill="currentColor" fillOpacity="0.5" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">EARTH LIMB</text>
      {/* orbit path */}
      <ellipse cx="210" cy="110" rx="118" ry="66" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.55" transform="rotate(-12 210 110)" />
      {/* formation satellites (pixel grid) */}
      {[
        [176, 76],
        [202, 68],
        [228, 62],
        [186, 100],
        [212, 94],
        [238, 88],
        [198, 124],
        [224, 118],
      ].map(([x, y], i) => (
        <g key={i}>
          <rect
            x={x - 3}
            y={y - 3}
            width="6"
            height="6"
            fill="var(--dx-accent)"
            opacity={i % 3 === 1 ? 1 : 0.45}
          />
        </g>
      ))}
      <text x="252" y="140" fill="currentColor" fillOpacity="0.55" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">FORMATION</text>
      {/* visibility window cone */}
      <path d="M224 94 L330 34 L336 96 Z" stroke="var(--dx-accent)" strokeWidth="0.9" strokeDasharray="3 4" />
      <text x="286" y="24" fill="var(--dx-accent)" fillOpacity="0.85" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">VIS WINDOW</text>
      {/* altitude tick */}
      <path d="M104 208 H300" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="2 4" />
      <text x="256" y="222" fill="currentColor" fillOpacity="0.5" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">ALT/REF</text>
    </svg>
  );
}

/** Crewed capsule schematic. */
export function CapsuleDiagram({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 240 300" className={className} fill="none" aria-hidden="true">
      {/* heat shield */}
      <path d="M48 218 C48 250 84 272 120 272 C156 272 192 250 192 218 Z" stroke="var(--dx-accent-2)" strokeWidth="1.25" />
      <text x="150" y="262" fill="var(--dx-accent-2)" fillOpacity="0.85" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">HEAT SHIELD</text>
      {/* pressure shell */}
      <path d="M48 218 C48 160 74 116 120 76 C166 116 192 160 192 218" stroke="currentColor" strokeWidth="1.25" />
      {/* windows */}
      <circle cx="96" cy="176" r="10" stroke="currentColor" strokeWidth="1" />
      <circle cx="144" cy="176" r="10" stroke="currentColor" strokeWidth="1" />
      {/* parachute */}
      <path d="M120 76 V44" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
      <path d="M60 44 C60 20 96 8 120 8 C144 8 180 20 180 44" stroke="currentColor" strokeWidth="1" />
      <path d="M60 44 L104 40 M180 44 L136 40 M104 40 L120 76 M136 40 L120 76 M104 40 L136 40" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.6" />
      <text x="190" y="26" fill="currentColor" fillOpacity="0.5" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">CHUTE (DEPLOY)</text>
      {/* crew label */}
      <text x="76" y="210" fill="currentColor" fillOpacity="0.5" fontSize="8.5" fontFamily="var(--font-ibm-plex-mono)">CREW VOL</text>
    </svg>
  );
}

export const diagramMap = {
  "launch-vehicle": LaunchVehicleDiagram,
  engine: EngineDiagram,
  "engine-cluster": EngineClusterDiagram,
  vtvl: VtvlDiagram,
  uav: UavDiagram,
  orbit: OrbitDiagram,
  capsule: CapsuleDiagram,
} as const;
