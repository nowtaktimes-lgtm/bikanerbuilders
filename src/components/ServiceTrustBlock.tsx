import React from 'react';

const badActorsMap: Record<string, string> = {
  'structural-drawing': 'unverified drafters and guesswork framing',
  'interior-design': 'unverified local carpenters',
  'turnkey-construction': 'unreliable middle-man contractors',
  '3d-elevation': 'untested freelance renderers',
  '2d-naksha': 'unverified local planners',
};

export default function ServiceTrustBlock({ slug }: { slug: string }) {
  const badActor = badActorsMap[slug] || 'unverified local contractors';

  return (
    <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-inner mt-8">
      <h4 className="text-xl font-bold text-orange-500 mb-3">Trusted Building Construction &amp; Planning in Bikaner</h4>
      <p className="text-slate-300 text-base">
        Don&apos;t risk your hard-earned money with {badActor} from random aggregator sites or unverified local contractor lists. Bikaner Builders provides dedicated turnkey construction and on-site project supervision in Bikaner. We provide transparent itemized BOQ contracts, dedicated site supervision, and verified quality standards.
      </p>
    </div>
  );
}
