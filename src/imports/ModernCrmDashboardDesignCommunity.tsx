import svgPaths from "./svg-5q175rsqsx";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p19291480} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[36px] left-0 not-italic text-[#1a1a1a] text-[24px] text-nowrap top-0 tracking-[0.0703px] whitespace-pre">Customer Relationship Management</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-gray-500 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Manage and track your customer journey</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[60px] items-start relative w-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[60px] relative shrink-0 w-[442.133px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[60px] items-center relative w-[442.133px]">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V14" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19d57600} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6H14" id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 10H14" id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1a1a1a] h-[32px] relative rounded-[6px] shrink-0 w-[81.406px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[81.406px]">
        <Icon1 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[36px] not-italic text-[14px] text-neutral-50 text-nowrap top-[6.5px] tracking-[-0.1504px] whitespace-pre">Table</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 2V11.3333" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2V7.33333" id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 2V14" id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-full">
        <Icon2 />
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[36px] not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[6.5px] tracking-[-0.1504px] whitespace-pre">Kanban</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 bg-neutral-100 grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center px-[4px] py-0 relative w-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-[119px] not-italic text-[16px] text-gray-500 text-nowrap text-right top-[-0.5px] tracking-[-0.3125px] translate-x-[-100%] whitespace-pre">Total Customers</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-[118.89px] not-italic text-[#1a1a1a] text-[24px] text-nowrap text-right top-0 tracking-[0.0703px] translate-x-[-100%] whitespace-pre">5</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[56px] relative shrink-0 w-[118.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[56px] items-start relative w-[118.141px]">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[56px] relative shrink-0 w-[327.242px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[56px] items-center relative w-[327.242px]">
        <Container3 />
        <Container6 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container7 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 1.33333V14.6667" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p5120400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[91.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[91.734px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-gray-500 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Total Potential</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Text />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[32px] left-0 not-italic text-[#1a1a1a] text-[24px] top-0 tracking-[0.0703px] w-[62px]">$NaN</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[94px] items-start left-0 pb-px pt-[17px] px-[17px] rounded-[8px] top-0 w-[285.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p388158b0} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 6V8.66667" id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[101.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[101.828px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-gray-500 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Need Follow Up</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon4 />
      <Text1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[32px] left-0 not-italic text-[#1a1a1a] text-[24px] text-nowrap top-0 tracking-[0.0703px] whitespace-pre">2</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[94px] items-start left-[301.66px] pb-px pt-[17px] px-[17px] rounded-[8px] top-0 w-[285.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2d50f500} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p32887f80} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[90.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[90.375px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-gray-500 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">High Potential</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Text2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[32px] left-0 not-italic text-[#1a1a1a] text-[24px] text-nowrap top-0 tracking-[0.0703px] whitespace-pre">1</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[94px] items-start left-[603.33px] pb-px pt-[17px] px-[17px] rounded-[8px] top-0 w-[285.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[94px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pc812900} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[45.633px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[45.633px]">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-gray-500 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Filters</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon6 />
      <Text3 />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.289px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[76.289px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">All Statuses</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="[grid-area:1_/_1] bg-[#f9f9f9] relative rounded-[6px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan />
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[64.539px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[64.539px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">All Stages</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="[grid-area:1_/_2] bg-[#f9f9f9] relative rounded-[6px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan1 />
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[82.602px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[82.602px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">Last 90 days</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="[grid-area:1_/_3] bg-[#f9f9f9] relative rounded-[6px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan2 />
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[86.53px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-neutral-50 h-[36px] relative rounded-[6px] shrink-0 w-[113.531px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[113.531px]">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[11px] not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[8.5px] tracking-[-0.1504px] whitespace-pre">Advanced</p>
        <Icon10 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[36px] relative rounded-[6px] shrink-0 w-[54.43px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[36px] items-center justify-center px-[12px] py-0 relative w-[54.43px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] text-nowrap whitespace-pre">Clear</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container21() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[36px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton />
      <PrimitiveButton1 />
      <PrimitiveButton2 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white h-[110px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[110px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[147.219px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[10.25px] tracking-[-0.1504px] whitespace-pre">Customer Name</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[147.22px] top-0 w-[83.25px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[10.25px] tracking-[-0.1504px] whitespace-pre">Contact</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[230.47px] top-0 w-[140.688px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[10.25px] tracking-[-0.1504px] whitespace-pre">Status / Stage</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[371.16px] top-0 w-[185.211px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[10.25px] tracking-[-0.1504px] whitespace-pre">Next Action</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[556.37px] top-0 w-[119.805px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[10.25px] tracking-[-0.1504px] whitespace-pre">Last Summary</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[676.17px] top-0 w-[105.234px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[10.25px] tracking-[-0.1504px] whitespace-pre">Date Created</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[781.41px] top-0 w-[105.594px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[10.25px] tracking-[-0.1504px] whitespace-pre">Last Updated</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[rgba(245,245,245,0.3)] h-[40px] left-0 top-0 w-[887px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
      <TableHead6 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[887px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[78.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[78.859px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Nguyen Anh</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p6267f00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.91667 12.25H11.0833" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-slate-50 h-[16px] relative rounded-[6px] shrink-0 w-[41.531px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center overflow-clip px-[8px] py-0 relative rounded-[inherit] w-[41.531px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-nowrap whitespace-pre">New</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[16px] relative shrink-0 w-[78.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[16px] items-center relative w-[78.859px]">
        <Icon11 />
        <Badge />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[42px] items-start left-[48px] top-0 w-[78.859px]" data-name="Container">
      <Text4 />
      <Container24 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_662)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p38dccb00} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_662">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute bg-blue-50 content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[36px] top-[4px]" data-name="SlotClone">
      <Icon12 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[16px] opacity-[0.997] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.333%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p12b88670} fill="var(--fill-0, #FFEDD4)" id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] size-[16px] top-[-4px]" data-name="SlotClone">
      <Icon13 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[36px]" data-name="Container">
      <SlotClone />
      <SlotClone1 />
    </div>
  );
}

function CustomerTable() {
  return (
    <div className="absolute h-[42px] left-[8px] top-[33.5px] w-[131.219px]" data-name="CustomerTable">
      <Container25 />
      <Container26 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[109px] left-0 top-0 w-[147.219px]" data-name="TableCell">
      <CustomerTable />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p391f9d80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_657)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ae97a00} id="Vector_2" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_657">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CustomerTable1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[8px] top-[46.5px] w-[67.25px]" data-name="CustomerTable">
      {[...Array(2).keys()].map((_, i) => (
        <Icon14 key={i} />
      ))}
      <Icon16 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[109px] left-[147.22px] top-0 w-[83.25px]" data-name="TableCell">
      <CustomerTable1 />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-amber-50 h-[20px] relative rounded-[6px] shrink-0 w-[106.586px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit] w-[106.586px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e17100] text-[12px] text-nowrap whitespace-pre">Need Follow Up</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-amber-50 h-[20px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Badge">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#e17100] text-[12px] text-nowrap top-[3px] whitespace-pre">Price Consider</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[100.695px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[0.5px] px-0 relative w-[100.695px]">
        <Badge2 />
      </div>
    </div>
  );
}

function CustomerTable2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[48.5px] items-start left-[8px] top-[30.25px] w-[124.688px]" data-name="CustomerTable">
      <Badge1 />
      <Button4 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[109px] left-[230.47px] top-0 w-[140.688px]" data-name="TableCell">
      <CustomerTable2 />
    </div>
  );
}

function CustomerTable3() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[8px] top-[46px] w-[95.195px]" data-name="CustomerTable">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Call within 24h</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[109px] left-[371.16px] top-0 w-[185.211px]" data-name="TableCell">
      <CustomerTable3 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[60px] left-0 overflow-clip top-0 w-[103.805px]" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-gray-500 top-[0.5px] tracking-[-0.1504px] w-[107px]">
        <p className="mb-0">Khách Nguyen Anh hỏi về vòng phong thuỷ cho người mệnh Kim, sinh năm 1990.</p>
        <p className="mb-0">Được tư vấn 2 mẫu: Citrine + Pyrite charm Tài Lộc ($145) và Tiger Eye + Hematite charm Bình An ($125).</p>
        <p>Khách quan tâm đến mẫu Citrine nhưng cần xem thêm về tác dụng và so sánh giá với shop khác. Hẹn liên hệ lại trong 2-3 ngày.</p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[9px] size-[12px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white h-[26px] left-[40.98px] rounded-[4px] top-[34px] w-[62.828px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon17 />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[25px] not-italic text-[12px] text-gray-500 text-nowrap top-[6px] whitespace-pre">More</p>
    </div>
  );
}

function CustomerTable4() {
  return (
    <div className="absolute h-[60px] left-[8px] top-[24.5px] w-[103.805px]" data-name="CustomerTable">
      <Paragraph1 />
      <Button5 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[109px] left-[556.37px] top-0 w-[119.805px]" data-name="TableCell">
      <CustomerTable4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[89.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[89.234px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Sep 28</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[89.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[89.234px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-px whitespace-pre">Sarah Nguyen</p>
      </div>
    </div>
  );
}

function CustomerTable5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[8px] top-[34.5px] w-[89.234px]" data-name="CustomerTable">
      <Text5 />
      <Text6 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[109px] left-[676.17px] top-0 w-[105.234px]" data-name="TableCell">
      <CustomerTable5 />
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[89.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[89.594px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Sep 30</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[89.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[89.594px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-px whitespace-pre">Sarah Nguyen</p>
      </div>
    </div>
  );
}

function CustomerTable6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[8px] top-[34.5px] w-[89.594px]" data-name="CustomerTable">
      <Text7 />
      <Text8 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[109px] left-[781.41px] top-0 w-[105.594px]" data-name="TableCell">
      <CustomerTable6 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[109px] left-0 top-0 w-[887px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[61.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[61.531px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Le Hoa</p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p6267f00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.91667 12.25H11.0833" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Badge3() {
  return (
    <div className="basis-0 bg-slate-50 grow h-[16px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-nowrap whitespace-pre">New</p>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[16px] relative shrink-0 w-[61.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[16px] items-center relative w-[61.531px]">
        <Icon18 />
        <Badge3 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[42px] items-start left-[48px] top-0 w-[61.531px]" data-name="Container">
      <Text9 />
      <Container27 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1d64ee00} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="absolute bg-orange-50 content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[36px] top-[4px]" data-name="SlotClone">
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[16px] opacity-[0.997] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.333%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p12b88670} fill="var(--fill-0, #FFEDD4)" id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] size-[16px] top-[-4px]" data-name="SlotClone">
      <Icon20 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[36px]" data-name="Container">
      <SlotClone2 />
      <SlotClone3 />
    </div>
  );
}

function CustomerTable7() {
  return (
    <div className="absolute h-[42px] left-[8px] top-[33.5px] w-[131.219px]" data-name="CustomerTable">
      <Container28 />
      <Container29 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[109px] left-0 top-0 w-[147.219px]" data-name="TableCell">
      <CustomerTable7 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_654)" id="Icon">
          <path d={svgPaths.pe43ac80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_654">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p391f9d80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_657)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ae97a00} id="Vector_2" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_657">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CustomerTable8() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[8px] top-[46.5px] w-[67.25px]" data-name="CustomerTable">
      <Icon21 />
      <Icon22 />
      <Icon23 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[109px] left-[147.22px] top-0 w-[83.25px]" data-name="TableCell">
      <CustomerTable8 />
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-blue-50 h-[20px] relative rounded-[6px] shrink-0 w-[97.273px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit] w-[97.273px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#155dfc] text-[12px] text-nowrap whitespace-pre">High Potential</p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-blue-50 h-[20px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Badge">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#155dfc] text-[12px] text-nowrap top-[3px] whitespace-pre">Interest</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[60.609px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[0.5px] px-0 relative w-[60.609px]">
        <Badge5 />
      </div>
    </div>
  );
}

function CustomerTable9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[48.5px] items-start left-[8px] top-[30.25px] w-[124.688px]" data-name="CustomerTable">
      <Badge4 />
      <Button6 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[109px] left-[230.47px] top-0 w-[140.688px]" data-name="TableCell">
      <CustomerTable9 />
    </div>
  );
}

function CustomerTable10() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[8px] top-[46px] w-[139.039px]" data-name="CustomerTable">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Send product catalog</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[109px] left-[371.16px] top-0 w-[185.211px]" data-name="TableCell">
      <CustomerTable10 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[60px] left-0 overflow-clip top-0 w-[103.805px]" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-gray-500 top-[0.5px] tracking-[-0.1504px] w-[106px]">
        <p className="mb-0">Khách Le Hoa lần đầu inbox qua Zalo, hỏi về nhẫn nữ đá hồng thạch anh cho tuổi Thìn 1988.</p>
        <p className="mb-0">Khách rất hào hứng khi được giới thiệu collection mới Rose Quartz + Moonstone, đặc biệt thích thiết kế dáng oval.</p>
        <p>Giá $199 khách thấy hợp lý, đang chờ gửi catalog chi tiết để khách xem thêm mẫu khác.</p>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[9px] size-[12px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white h-[26px] left-[40.98px] rounded-[4px] top-[34px] w-[62.828px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon24 />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[25px] not-italic text-[12px] text-gray-500 text-nowrap top-[6px] whitespace-pre">More</p>
    </div>
  );
}

function CustomerTable11() {
  return (
    <div className="absolute h-[60px] left-[8px] top-[24.5px] w-[103.805px]" data-name="CustomerTable">
      <Paragraph2 />
      <Button7 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[109px] left-[556.37px] top-0 w-[119.805px]" data-name="TableCell">
      <CustomerTable11 />
    </div>
  );
}

function Text10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[89.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[89.234px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Sep 29</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[89.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[89.234px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-px whitespace-pre">Michael Tran</p>
      </div>
    </div>
  );
}

function CustomerTable12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[8px] top-[34.5px] w-[89.234px]" data-name="CustomerTable">
      <Text10 />
      <Text11 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[109px] left-[676.17px] top-0 w-[105.234px]" data-name="TableCell">
      <CustomerTable12 />
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[89.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[89.594px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Sep 29</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[89.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[89.594px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-px whitespace-pre">Michael Tran</p>
      </div>
    </div>
  );
}

function CustomerTable13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[8px] top-[34.5px] w-[89.594px]" data-name="CustomerTable">
      <Text12 />
      <Text13 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[109px] left-[781.41px] top-0 w-[105.594px]" data-name="TableCell">
      <CustomerTable13 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[109px] left-0 top-[109px] w-[887px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[80.195px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[80.195px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Tran Nam</p>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p6267f00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.91667 12.25H11.0833" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Badge6() {
  return (
    <div className="basis-0 bg-neutral-100 grow h-[16px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-500 text-nowrap whitespace-pre">Regular</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[16px] relative shrink-0 w-[80.195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[16px] items-center relative w-[80.195px]">
        <Icon25 />
        <Badge6 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[42px] items-start left-[48px] top-0 w-[80.195px]" data-name="Container">
      <Text14 />
      <Container30 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_719)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p239c7ec0} id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 6H6.00667" id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 6H10.0067" id="Vector_4" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_719">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone4() {
  return (
    <div className="absolute bg-red-50 content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[36px] top-[4px]" data-name="SlotClone">
      <Icon26 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[16px] opacity-[0.997] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.333%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p12b88670} fill="var(--fill-0, #FFEDD4)" id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] size-[16px] top-[-4px]" data-name="SlotClone">
      <Icon27 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[36px]" data-name="Container">
      <SlotClone4 />
      <SlotClone5 />
    </div>
  );
}

function CustomerTable14() {
  return (
    <div className="absolute h-[42px] left-[8px] top-[33.5px] w-[131.219px]" data-name="CustomerTable">
      <Container31 />
      <Container32 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[109px] left-0 top-0 w-[147.219px]" data-name="TableCell">
      <CustomerTable14 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_648)" id="Icon">
          <path d={svgPaths.p26187580} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_648">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p391f9d80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_657)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ae97a00} id="Vector_2" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_657">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CustomerTable15() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[8px] top-[46.5px] w-[67.25px]" data-name="CustomerTable">
      <Icon28 />
      <Icon29 />
      <Icon30 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[109px] left-[147.22px] top-0 w-[83.25px]" data-name="TableCell">
      <CustomerTable15 />
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-red-50 h-[20px] relative rounded-[6px] shrink-0 w-[122.438px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit] w-[122.438px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e7000b] text-[12px] text-nowrap whitespace-pre">Multiple Follow Up</p>
      </div>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-orange-50 h-[20px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Badge">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#f54900] text-[12px] text-nowrap top-[3px] whitespace-pre">Hesitation</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[75.016px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[0.5px] px-0 relative w-[75.016px]">
        <Badge8 />
      </div>
    </div>
  );
}

function CustomerTable16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[48.5px] items-start left-[8px] top-[30.25px] w-[124.688px]" data-name="CustomerTable">
      <Badge7 />
      <Button8 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[109px] left-[230.47px] top-0 w-[140.688px]" data-name="TableCell">
      <CustomerTable16 />
    </div>
  );
}

function CustomerTable17() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[8px] top-[46px] w-[131.414px]" data-name="CustomerTable">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Escalate to manager</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[109px] left-[371.16px] top-0 w-[185.211px]" data-name="TableCell">
      <CustomerTable17 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[60px] left-0 overflow-clip top-0 w-[103.805px]" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-gray-500 top-[0.5px] tracking-[-0.1504px] w-[104px]">
        <p className="mb-0">Khách Tran Nam quan tâm vòng tay Black Obsidian + Hematite cho nam giới, order ID 51083.</p>
        <p className="mb-0">Đã follow up 3 lần về giá $155, khách vẫn thấy cao so với budget $120.</p>
        <p>Đã đề xuất combo 2 vòng giảm 15% nhưng khách chỉ cần 1 chiếc. Cần escalate lên manager để xem có thể flexible về giá không.</p>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-[9px] size-[12px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white h-[26px] left-[40.98px] rounded-[4px] top-[34px] w-[62.828px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon31 />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[25px] not-italic text-[12px] text-gray-500 text-nowrap top-[6px] whitespace-pre">More</p>
    </div>
  );
}

function CustomerTable18() {
  return (
    <div className="absolute h-[60px] left-[8px] top-[24.5px] w-[103.805px]" data-name="CustomerTable">
      <Paragraph3 />
      <Button9 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[109px] left-[556.37px] top-0 w-[119.805px]" data-name="TableCell">
      <CustomerTable18 />
    </div>
  );
}

function Text15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[89.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[89.234px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Sep 25</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[16px] relative shrink-0 w-[89.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[89.234px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-px whitespace-pre">Sarah Nguyen</p>
      </div>
    </div>
  );
}

function CustomerTable19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[8px] top-[34.5px] w-[89.234px]" data-name="CustomerTable">
      <Text15 />
      <Text16 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[109px] left-[676.17px] top-0 w-[105.234px]" data-name="TableCell">
      <CustomerTable19 />
    </div>
  );
}

function Text17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[89.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[89.594px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Sep 28</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[89.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[89.594px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-px whitespace-pre">David Chen</p>
      </div>
    </div>
  );
}

function CustomerTable20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[8px] top-[34.5px] w-[89.594px]" data-name="CustomerTable">
      <Text17 />
      <Text18 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[109px] left-[781.41px] top-0 w-[105.594px]" data-name="TableCell">
      <CustomerTable20 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[109px] left-0 top-[218px] w-[887px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
    </div>
  );
}

function Text19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[55.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[55.469px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Vu Long</p>
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p6267f00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.91667 12.25H11.0833" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Badge9() {
  return (
    <div className="basis-0 bg-violet-50 grow h-[16px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center px-[8px] py-0 relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#7f22fe] text-[12px] text-nowrap whitespace-pre">VIP</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[16px] relative shrink-0 w-[55.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[16px] items-center relative w-[55.469px]">
        <Icon32 />
        <Badge9 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[42px] items-start left-[48px] top-0 w-[55.469px]" data-name="Container">
      <Text19 />
      <Container33 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_642)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #00BC7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p30be9df0} id="Vector_2" stroke="var(--stroke-0, #00BC7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 6H6.00667" id="Vector_3" stroke="var(--stroke-0, #00BC7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 6H10.0067" id="Vector_4" stroke="var(--stroke-0, #00BC7D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_642">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SlotClone6() {
  return (
    <div className="absolute bg-emerald-50 content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[36px] top-[4px]" data-name="SlotClone">
      <Icon33 />
    </div>
  );
}

function CustomerTable21() {
  return (
    <div className="absolute h-[42px] left-[8px] top-[33.5px] w-[131.219px]" data-name="CustomerTable">
      <Container34 />
      <SlotClone6 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[109px] left-0 top-0 w-[147.219px]" data-name="TableCell">
      <CustomerTable21 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p391f9d80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_657)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ae97a00} id="Vector_2" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_657">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CustomerTable22() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[8px] top-[46.5px] w-[67.25px]" data-name="CustomerTable">
      {[...Array(2).keys()].map((_, i) => (
        <Icon34 key={i} />
      ))}
      <Icon36 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[109px] left-[147.22px] top-0 w-[83.25px]" data-name="TableCell">
      <CustomerTable22 />
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-emerald-50 h-[20px] relative rounded-[6px] shrink-0 w-[84.867px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit] w-[84.867px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#009966] text-[12px] text-nowrap whitespace-pre">Closed Won</p>
      </div>
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-emerald-50 h-[20px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Badge">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#009966] text-[12px] text-nowrap top-[3px] whitespace-pre">Purchase</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[69.836px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[0.5px] px-0 relative w-[69.836px]">
        <Badge11 />
      </div>
    </div>
  );
}

function CustomerTable23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[48.5px] items-start left-[8px] top-[30.25px] w-[124.688px]" data-name="CustomerTable">
      <Badge10 />
      <Button10 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[109px] left-[230.47px] top-0 w-[140.688px]" data-name="TableCell">
      <CustomerTable23 />
    </div>
  );
}

function CustomerTable24() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[8px] top-[46px] w-[128.648px]" data-name="CustomerTable">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Thank you message</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[109px] left-[371.16px] top-0 w-[185.211px]" data-name="TableCell">
      <CustomerTable24 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[60px] left-0 overflow-clip top-0 w-[103.805px]" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-gray-500 top-[0.5px] tracking-[-0.1504px] w-[108px]">
        <p className="mb-0">Khách Vu Long đã hoàn tất order ID 51089 vòng Jade + Gold Charm Phát Tài trị giá $150.</p>
        <p className="mb-0">Khách rất hài lòng với chất lượng và packaging, đã confirm nhận hàng. Thanh toán nhanh chóng qua transfer.</p>
        <p>Cần gửi thank you message và giới thiệu referral program cho khách.</p>
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute left-[9px] size-[12px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-white h-[26px] left-[40.98px] rounded-[4px] top-[34px] w-[62.828px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon37 />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[25px] not-italic text-[12px] text-gray-500 text-nowrap top-[6px] whitespace-pre">More</p>
    </div>
  );
}

function CustomerTable25() {
  return (
    <div className="absolute h-[60px] left-[8px] top-[24.5px] w-[103.805px]" data-name="CustomerTable">
      <Paragraph4 />
      <Button11 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[109px] left-[556.37px] top-0 w-[119.805px]" data-name="TableCell">
      <CustomerTable25 />
    </div>
  );
}

function Text20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[89.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[89.234px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Sep 29</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[16px] relative shrink-0 w-[89.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[89.234px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-px whitespace-pre">Michael Tran</p>
      </div>
    </div>
  );
}

function CustomerTable26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[8px] top-[34.5px] w-[89.234px]" data-name="CustomerTable">
      <Text20 />
      <Text21 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[109px] left-[676.17px] top-0 w-[105.234px]" data-name="TableCell">
      <CustomerTable26 />
    </div>
  );
}

function Text22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[89.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[89.594px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Sep 30</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[16px] relative shrink-0 w-[89.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[89.594px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-px whitespace-pre">Jessica Lee</p>
      </div>
    </div>
  );
}

function CustomerTable27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[8px] top-[34.5px] w-[89.594px]" data-name="CustomerTable">
      <Text22 />
      <Text23 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[109px] left-[781.41px] top-0 w-[105.594px]" data-name="TableCell">
      <CustomerTable27 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[109px] left-0 top-[327px] w-[887px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
    </div>
  );
}

function Text24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[69.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[69.305px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Xuan Xuan</p>
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p6267f00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.91667 12.25H11.0833" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Badge12() {
  return (
    <div className="bg-slate-50 h-[16px] relative rounded-[6px] shrink-0 w-[41.531px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center overflow-clip px-[8px] py-0 relative rounded-[inherit] w-[41.531px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-nowrap whitespace-pre">New</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[16px] relative shrink-0 w-[69.305px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[16px] items-center relative w-[69.305px]">
        <Icon38 />
        <Badge12 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[42px] items-start left-[48px] top-0 w-[69.305px]" data-name="Container">
      <Text24 />
      <Container35 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pfe03c80} id="Vector" stroke="var(--stroke-0, #F6339A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone7() {
  return (
    <div className="absolute bg-pink-50 content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[36px] top-[4px]" data-name="SlotClone">
      <Icon39 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="h-[16px] opacity-[0.997] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.333%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p12b88670} fill="var(--fill-0, #FFEDD4)" id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SlotClone8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] size-[16px] top-[-4px]" data-name="SlotClone">
      <Icon40 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[36px]" data-name="Container">
      <SlotClone7 />
      <SlotClone8 />
    </div>
  );
}

function CustomerTable28() {
  return (
    <div className="absolute h-[42px] left-[8px] top-[33.5px] w-[131.219px]" data-name="CustomerTable">
      <Container36 />
      <Container37 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[108.5px] left-0 top-0 w-[147.219px]" data-name="TableCell">
      <CustomerTable28 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p391f9d80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_657)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ae97a00} id="Vector_2" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_657">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CustomerTable29() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[8px] top-[46.5px] w-[67.25px]" data-name="CustomerTable">
      {[...Array(2).keys()].map((_, i) => (
        <Icon41 key={i} />
      ))}
      <Icon43 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[108.5px] left-[147.22px] top-0 w-[83.25px]" data-name="TableCell">
      <CustomerTable29 />
    </div>
  );
}

function Badge13() {
  return (
    <div className="bg-amber-50 h-[20px] relative rounded-[6px] shrink-0 w-[106.586px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit] w-[106.586px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#e17100] text-[12px] text-nowrap whitespace-pre">Need Follow Up</p>
      </div>
    </div>
  );
}

function Badge14() {
  return (
    <div className="bg-emerald-50 h-[20px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Badge">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#009966] text-[12px] text-nowrap top-[3px] whitespace-pre">Purchase</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[69.836px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[0.5px] px-0 relative w-[69.836px]">
        <Badge14 />
      </div>
    </div>
  );
}

function CustomerTable30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[48.5px] items-start left-[8px] top-[30.25px] w-[124.688px]" data-name="CustomerTable">
      <Badge13 />
      <Button12 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[108.5px] left-[230.47px] top-0 w-[140.688px]" data-name="TableCell">
      <CustomerTable30 />
    </div>
  );
}

function CustomerTable31() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[8px] top-[46px] w-[169.211px]" data-name="CustomerTable">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Follow up for bracelet size</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[108.5px] left-[371.16px] top-0 w-[185.211px]" data-name="TableCell">
      <CustomerTable31 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[60px] left-0 overflow-clip top-0 w-[103.805px]" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-gray-500 top-[0.5px] tracking-[-0.1504px] w-[108px]">
        <p className="mb-0">Khách Xuân Xuân chủ động hỏi về deal vòng tay nam, order ID 51081.</p>
        <p className="mb-0">Khách muốn mua vòng để tặng bạn nam sinh năm 1996 mệnh Thuỷ, mong hỗ trợ sức khoẻ và công việc vì bạn đang khó khăn về việc làm và sức khoẻ.</p>
        <p className="mb-0">Được tư vấn 3 mẫu, khách chọn vòng Black Tourmaline + Kyanite charm Lu Thống, hỗ trợ cả tài lộc và sức khoẻ; giá gốc $169, sale còn $118 (giảm 30%).</p>
        <p className="mb-0">Khách chưa biết size tay bạn nên hẹn gửi size sau. Khách đã đặt hàng và xác nhận thanh toán, sẽ gửi size tay sau.</p>
        <p>Sale cần follow up nhận size để hoàn tất đơn.</p>
      </div>
    </div>
  );
}

function Icon44() {
  return (
    <div className="absolute left-[9px] size-[12px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-white h-[26px] left-[40.98px] rounded-[4px] top-[34px] w-[62.828px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon44 />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[25px] not-italic text-[12px] text-gray-500 text-nowrap top-[6px] whitespace-pre">More</p>
    </div>
  );
}

function CustomerTable32() {
  return (
    <div className="absolute h-[60px] left-[8px] top-[24.5px] w-[103.805px]" data-name="CustomerTable">
      <Paragraph5 />
      <Button13 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[108.5px] left-[556.37px] top-0 w-[119.805px]" data-name="TableCell">
      <CustomerTable32 />
    </div>
  );
}

function Text25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[89.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[89.234px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Oct 1</p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[16px] relative shrink-0 w-[89.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[89.234px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-px whitespace-pre">Sarah Nguyen</p>
      </div>
    </div>
  );
}

function CustomerTable33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[8px] top-[34.5px] w-[89.234px]" data-name="CustomerTable">
      <Text25 />
      <Text26 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[108.5px] left-[676.17px] top-0 w-[105.234px]" data-name="TableCell">
      <CustomerTable33 />
    </div>
  );
}

function Text27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[89.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[89.594px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Oct 1</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[16px] relative shrink-0 w-[89.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[89.594px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-px whitespace-pre">Sarah Nguyen</p>
      </div>
    </div>
  );
}

function CustomerTable34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[8px] top-[34.5px] w-[89.594px]" data-name="CustomerTable">
      <Text27 />
      <Text28 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[108.5px] left-[781.41px] top-0 w-[105.594px]" data-name="TableCell">
      <CustomerTable34 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[108.5px] left-0 top-[436px] w-[887px]" data-name="TableRow">
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[544.5px] left-0 top-[40px] w-[887px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[584.5px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function CustomerTable35() {
  return (
    <div className="bg-white h-[586.5px] relative rounded-[8px] shrink-0 w-full" data-name="CustomerTable">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[586.5px] items-start p-px relative w-full">
          <Table />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function ModernCrmDashboardDesignCommunity() {
  return (
    <div className="bg-neutral-50 relative size-full" data-name="Modern CRM Dashboard Design (Community)">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[32px] px-[32px] relative size-full">
          <Container8 />
          <Container18 />
          <Container23 />
          <CustomerTable35 />
        </div>
      </div>
    </div>
  );
}