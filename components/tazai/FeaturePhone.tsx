import React from 'react';

export function FeaturePhone() {
  return (
    <div className="w-[170px] rounded-[2rem] bg-[#2A2A2A] p-3 pb-5 shadow-phone" role="img" aria-label="A basic feature phone receiving a TAZhealth SMS">
      <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-white/15" aria-hidden="true" />
      <div className="rounded-lg bg-[#CFE3C9] p-2.5 font-mono text-[10px] leading-snug text-[#1D3A1F]" aria-hidden="true">
        <p className="font-bold">1 new message</p>
        <p className="mt-1">TAZhealth: Abeg no forget take your medicine today. Stay well o!</p>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5" aria-hidden="true">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((k) =>
        <span key={k} className="flex h-6 items-center justify-center rounded-md bg-white/10 text-[10px] text-white/70">
            {k}
          </span>
        )}
      </div>
    </div>);

}