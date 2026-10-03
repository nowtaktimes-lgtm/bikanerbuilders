import React from 'react';

const badActorsMap: Record<string, string> = {
  'structural-drawing': 'unqualified drafters and cheap engineers',
  'interior-design': 'inexperienced local carpenters',
  'turnkey-construction': 'unreliable middle-man contractors',
  '3d-elevation': 'freelance 3D renderers',
  '2d-naksha': 'unverified local planners',
};

export default function ServiceTrustBlock({ slug }: { slug: string }) {
  const badActor = badActorsMap[slug] || 'unverified local contractors';

  return (
    <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-inner mt-8">
      <h4 className="text-xl font-bold text-orange-500 mb-3">Rated #1 by Bikaner Residents</h4>
      <p className="text-slate-300 text-base">
        Don&apos;t risk your hard-earned money with {badActor} from random aggregator sites or unverified local contractor lists. Bikaner Builders is a registered, trusted, and highly-rated civil engineering firm in Bikaner. We guarantee 100% transparent pricing and flawless execution.
      </p>
    </div>
  );
}
