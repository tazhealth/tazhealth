import React from 'react';
import { BellRingIcon, CheckIcon, MessageSquareTextIcon, PhoneCallIcon, SignalIcon, WifiOffIcon } from 'lucide-react';
import { RiskBadge } from '../ui/RiskBadge';

export function PatientScreen() {
  return (
    <div className="flex h-full flex-col bg-[#F7FAF7] text-ink">
      <div className="flex items-center justify-between px-6 pb-2 pt-3.5 text-[10px] font-medium">
        <span>9:41</span>
        <SignalIcon className="h-3 w-3" aria-hidden="true" />
      </div>

      <div className="flex items-center justify-between px-4 pb-3 pt-3">
        <div>
          <p className="text-[10px] text-ink/50">Ilaro outreach · #048</p>
          <p className="text-[13px] font-semibold text-forest">TAZ AI</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[9px] font-medium text-forest ring-1 ring-forest/10">
          <WifiOffIcon className="h-3 w-3" aria-hidden="true" /> Offline · saved
        </span>
      </div>

      <div className="mx-3 rounded-2xl bg-white p-3.5 shadow-[0_6px_20px_-12px_rgba(26,26,26,0.35)]">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-[11px] font-semibold text-forest">FA</span>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold">Folake Adeyemi</p>
            <p className="text-[10px] text-ink/55">58 · Female · Ilaro, Ogun</p>
          </div>
        </div>
        <RiskBadge level="high" pulse className="mt-3">
          High risk · BP 182/114
        </RiskBadge>
        <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
          <div className="rounded-lg bg-risk-high/10 px-1 py-1.5">
            <p className="text-[8px] text-ink/55">BP</p>
            <p className="text-[11px] font-semibold text-risk-high">182/114</p>
          </div>
          <div className="rounded-lg bg-sun/15 px-1 py-1.5">
            <p className="text-[8px] text-ink/55">Glucose</p>
            <p className="text-[11px] font-semibold text-ink">7.8</p>
          </div>
          <div className="rounded-lg bg-mint px-1 py-1.5">
            <p className="text-[8px] text-ink/55">Pulse</p>
            <p className="text-[11px] font-semibold text-ink">96</p>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4">
        <p className="text-[10px] font-medium text-ink/50">Care journey</p>
        <ul className="mt-2 space-y-2">
          <li className="flex items-center gap-2 text-[11px]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-risk-high text-white">
              <BellRingIcon className="h-3 w-3" aria-hidden="true" />
            </span>
            <span className="flex-1">Dr. Nwosu alerted</span>
            <CheckIcon className="h-3.5 w-3.5 text-leaf" aria-label="done" />
          </li>
          <li className="flex items-center gap-2 text-[11px]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-leaf text-white">
              <MessageSquareTextIcon className="h-3 w-3" aria-hidden="true" />
            </span>
            <span className="flex-1">SMS · Day 1 · Yoruba</span>
            <span className="text-[9px] text-ink/50">Tomorrow</span>
          </li>
          <li className="flex items-center gap-2 text-[11px]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-mint text-forest">
              <PhoneCallIcon className="h-3 w-3" aria-hidden="true" />
            </span>
            <span className="flex-1">Follow-up call · Day 3</span>
            <span className="text-[9px] text-ink/50">Fri</span>
          </li>
        </ul>
      </div>

      <div className="mt-auto p-3">
        <div className="rounded-xl bg-leaf py-2.5 text-center text-[11px] font-medium text-white">Refer to nearest PHC</div>
      </div>
    </div>);

}