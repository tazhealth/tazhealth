import React from 'react';
import { BellRingIcon, HomeIcon, LayoutDashboardIcon, PhoneCallIcon, UsersIcon } from 'lucide-react';
import { RiskBadge } from '../ui/RiskBadge';

const kpis = [
{ label: 'Patients registered', value: '512' },
{ label: 'High risk', value: '38', tone: 'text-risk-high' },
{ label: 'Follow-ups due', value: '21' },
{ label: 'Reached by SMS', value: '84%', tone: 'text-leaf' }];


const risk = [
{ label: 'High', value: 38, color: '#D6453D' },
{ label: 'Medium', value: 124, color: '#F2A93B' },
{ label: 'Low', value: 350, color: '#3A9A3F' }];


const weekly = [42, 68, 55, 81, 74, 90];

const callList = [
{ name: 'Folake A.', place: 'Ilaro', level: 'high' as const, reason: 'BP 182/114' },
{ name: 'Musa I.', place: 'Kuje', level: 'medium' as const, reason: 'Glucose 11.2' },
{ name: 'Grace O.', place: 'Akinyele', level: 'low' as const, reason: 'Recheck due' }];


function Donut() {
  const total = risk.reduce((s, r) => s + r.value, 0);
  const C = 2 * Math.PI * 38;
  let offset = 0;
  return (
    <svg viewBox="0 0 100 100" className="h-28 w-28 -rotate-90" aria-hidden="true">
      <circle cx="50" cy="50" r="38" fill="none" stroke="#EEF7EE" strokeWidth="14" />
      {risk.map((r) => {
        const len = r.value / total * C;
        const el =
        <circle
          key={r.label}
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke={r.color}
          strokeWidth="14"
          strokeDasharray={`${len} ${C - len}`}
          strokeDashoffset={-offset} />;


        offset += len;
        return el;
      })}
    </svg>);

}

export function DashboardPreview({ frame = 'laptop' }: {frame?: 'laptop' | 'browser';}) {
  const browser = frame === 'browser';
  const screen =
  <div className="flex overflow-hidden rounded-xl bg-[#F7FAF7]" role="img" aria-label="TAZ AI community dashboard showing outreach statistics and risk breakdown">
          <aside className="hidden w-44 shrink-0 flex-col gap-1 bg-forest p-4 text-white md:flex" aria-hidden="true">
            {!browser &&
      <p className="mb-4 text-sm font-semibold">
                <span className="text-sun">TAZ</span> AI
              </p>
      }
            {[
            { icon: LayoutDashboardIcon, label: 'Dashboard', active: true },
            { icon: UsersIcon, label: 'Patients' },
            { icon: PhoneCallIcon, label: 'Call lists' },
            { icon: BellRingIcon, label: 'Alerts' },
            { icon: HomeIcon, label: 'Outreaches' }].
            map(({ icon: Icon, label, active }) =>
            <span key={label} className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs ${active ? 'bg-white/15' : 'text-white/70'}`}>
                <Icon className="h-3.5 w-3.5" /> {label}
              </span>
            )}
          </aside>

          <div className="min-w-0 flex-1 p-4 sm:p-6" aria-hidden="true">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-[11px] text-ink/50">All outreaches · 2026</p>
                <p className="text-base font-medium text-forest sm:text-lg">Community overview</p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] text-ink/60 ring-1 ring-ink/10">Last synced 5 min ago</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
              {kpis.map((k) =>
              <div key={k.label} className="rounded-xl bg-white p-3 ring-1 ring-ink/5">
                  <p className="text-[10px] text-ink/55 sm:text-[11px]">{k.label}</p>
                  <p className={`mt-1 text-xl font-medium sm:text-xl ${k.tone ?? 'text-ink'}`}>{k.value}</p>
                </div>
              )}
            </div>

            <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_1.2fr]">
              <div className="rounded-xl bg-white p-4 ring-1 ring-ink/5">
                <p className="text-xs font-medium text-ink">Risk breakdown</p>
                <div className="mt-3 flex items-center gap-5">
                  <Donut />
                  <ul className="space-y-2 text-xs">
                    {risk.map((r) =>
                    <li key={r.label} className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: r.color }} />
                        <span className="w-14 text-ink/70">{r.label}</span>
                        <span className="font-medium text-ink">{r.value}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-ink/5">
                <p className="text-xs font-medium text-ink">Follow-ups completed per week</p>
                <div className="mt-3 flex h-28 items-end gap-2">
                  {weekly.map((v, i) =>
                  <div key={i} className="flex h-full flex-1 flex-col items-center gap-1">
                      <div className="flex w-full flex-1 items-end">
                        <div className={`w-full rounded-t-md ${i === weekly.length - 1 ? 'bg-leaf' : 'bg-leaf/30'}`} style={{ height: `${v}%` }} />
                      </div>
                      <span className="text-[9px] text-ink/45">W{i + 1}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-3 hidden rounded-xl bg-white p-4 ring-1 ring-ink/5 sm:block">
              <p className="text-xs font-medium text-ink">Today’s priority call list</p>
              <ul className="mt-2 divide-y divide-ink/5">
                {callList.map((c) =>
                <li key={c.name} className="flex items-center justify-between gap-3 py-2 text-xs">
                    <span className="w-24 font-medium text-ink">{c.name}</span>
                    <span className="w-20 text-ink/55">{c.place}</span>
                    <span className="flex-1 text-ink/70">{c.reason}</span>
                    <RiskBadge level={c.level}>{c.level === 'high' ? 'High' : c.level === 'medium' ? 'Medium' : 'Low'}</RiskBadge>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>;

  if (browser) {
    return (
      <div className="mx-auto w-full max-w-5xl rounded-[1.75rem] bg-white/70 p-2 shadow-card ring-1 ring-forest/10 backdrop-blur sm:p-3">
        <div className="mb-2 flex items-center justify-between gap-4 rounded-2xl bg-white px-4 py-3 ring-1 ring-ink/5 sm:mb-3 sm:px-5" aria-hidden="true">
          <p className="text-base font-semibold text-forest">
            <span className="text-leaf">TAZ</span> AI
          </p>
          <div className="flex items-center gap-5 text-xs text-ink/70">
            <span className="hidden sm:inline">Patients</span>
            <span className="hidden sm:inline">Outreaches</span>
            <span className="hidden sm:inline">Reports</span>
            <span className="rounded-lg px-3 py-1.5 text-forest ring-1 ring-leaf">Sync now</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sun/30 text-[11px] font-medium text-forest">AO</span>
          </div>
        </div>
        {screen}
      </div>);

  }

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="rounded-t-[1.25rem] bg-ink p-2 sm:p-3">{screen}</div>
      <div className="mx-auto h-4 w-[106%] -translate-x-[3%] rounded-b-2xl bg-[#D5DAD5]" aria-hidden="true" />
    </div>);

}