import svgPaths from "./svg-2lqyf0q13r";

function Paragraph() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#dbeafe] text-[14px] top-[0.22px]">Welcome back,</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[31.976px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-white top-[-0.78px]">Dr. Smith</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[51.976px] items-start left-0 top-0 w-[106.492px]" data-name="Container">
      <Paragraph />
      <Heading />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[23.992px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9917 23.9917">
        <g id="Icon">
          <path d={svgPaths.p3ac9d7c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          <path d={svgPaths.p3e999280} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#fb2c36] left-[36.01px] rounded-[41020500px] size-[7.984px] top-[3.99px]" data-name="Text" />;
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] left-[294.01px] rounded-[16px] size-[47.983px] top-[1.99px]" data-name="Button">
      <Icon />
      <Text />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[51.976px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Button />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white content-stretch flex h-[55.949px] items-center left-0 overflow-clip pl-[48px] pr-[16px] py-[16px] rounded-[16px] top-0 w-[341.996px]" data-name="Text Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)]">Search patients, studies...</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[15.99px] size-[19.999px] top-[17.97px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9994 19.9994">
        <g id="Icon">
          <path d={svgPaths.p2c768bc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66662" />
          <path d={svgPaths.p2d02db00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66662" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[55.949px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.992px] h-[211.895px] items-start left-0 pt-[47.983px] px-[23.992px] rounded-bl-[24px] rounded-br-[24px] top-0 w-[389.98px]" data-name="Container" style={{ backgroundImage: "linear-gradient(151.483deg, rgb(21, 93, 252) 0%, rgb(20, 71, 230) 100%)" }}>
      <Container1 />
      <Container3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[23.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_70.83%_70.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99792 5.99792">
            <path d={svgPaths.p301b9e00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_12.5%_70.83%_70.83%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99792 5.99792">
            <path d={svgPaths.p39c03840} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_12.5%_12.5%_70.83%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99792 5.99792">
            <path d={svgPaths.pa3c3700} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_70.83%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99792 5.99792">
            <path d={svgPaths.p1b4b4280} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16px] shrink-0 size-[47.983px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.996px] px-[11.996px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[28.824px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-center">Scan</p>
      </div>
    </div>
  );
}

function QuickAction() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.984px] h-[95.948px] items-center left-0 py-[11.996px] rounded-[16.4px] top-0 w-[68.499px]" data-name="QuickAction">
      <Container6 />
      <Text1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[23.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9924 21.9924">
            <path d={svgPaths.p22ea7100} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16px] shrink-0 size-[47.983px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.996px] px-[11.996px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[42.998px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-center">Studies</p>
      </div>
    </div>
  );
}

function QuickAction1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.984px] h-[95.948px] items-center left-[80.49px] py-[11.996px] rounded-[16.4px] top-0 w-[68.518px]" data-name="QuickAction">
      <Container7 />
      <Text2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[23.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99931 5.99792">
            <path d="M0.999654 0.999654V4.99827" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99931 5.99792">
            <path d="M0.999654 0.999654V4.99827" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9931 19.9931">
            <path d={svgPaths.p321c2d00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-1px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9931 1.99931">
            <path d="M0.999654 0.999654H18.9934" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16px] shrink-0 size-[47.983px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.996px] px-[11.996px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[53.637px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-center">Schedule</p>
      </div>
    </div>
  );
}

function QuickAction2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.984px] h-[95.948px] items-center left-[161.01px] py-[11.996px] rounded-[16.4px] top-0 w-[68.499px]" data-name="QuickAction">
      <Container8 />
      <Text3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[23.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9938 21.9924">
            <path d={svgPaths.p1e1d9c0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99723 7.99723">
            <path d={svgPaths.pb67dec0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-1px_-49.98%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99931 1.99931">
            <path d="M2.99965 0.999654H0.999654" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-1px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99654 1.99931">
            <path d="M8.99688 0.999654H0.999654" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-1px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99654 1.99931">
            <path d="M8.99688 0.999654H0.999654" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16px] shrink-0 size-[47.983px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.996px] px-[11.996px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[44.583px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-center">Reports</p>
      </div>
    </div>
  );
}

function QuickAction3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.984px] h-[95.948px] items-center left-[241.5px] py-[11.996px] rounded-[16.4px] top-0 w-[68.518px]" data-name="QuickAction">
      <Container9 />
      <Text4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[95.948px] relative shrink-0 w-full" data-name="Container">
      <QuickAction />
      <QuickAction1 />
      <QuickAction2 />
      <QuickAction3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[127.924px] items-start left-[23.99px] pt-[15.988px] px-[15.988px] rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[187.9px] w-[341.996px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[31.995px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.69%_-1.33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66627 19.9971">
            <path d="M1.33314 18.6639V1.33314" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66627" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_37.5%_45.83%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%_-25.01%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6658 7.99917">
            <path d={svgPaths.p28f36140} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66627" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[72.92%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-22.22%_-8.33%_-22.23%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6639 8.66579">
            <path d={svgPaths.p1be07d60} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66627" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[21.35%_12.5%_54.6%_74.99%]" data-name="Vector">
        <div className="absolute inset-[-17.34%_-33.29%_-17.33%_-33.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.67122 10.3591">
            <path d={svgPaths.p117adb80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66627" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-3/4 right-[8.33%] top-[43.9%]" data-name="Vector">
        <div className="absolute inset-[-13.4%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99859 12.617">
            <path d={svgPaths.p1aa05bc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66627" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[72.85%_16.67%_8.35%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-22.16%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9965 8.68251">
            <path d={svgPaths.p29818b40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66627" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[8.33%] right-3/4 top-[43.9%]" data-name="Vector">
        <div className="absolute inset-[-13.4%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99859 12.617">
            <path d={svgPaths.p17779eec} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66627" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[21.35%_74.99%_54.6%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-17.34%_-33.3%_-17.33%_-33.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.67121 10.3591">
            <path d={svgPaths.p1e3202b0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66627" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[16.4px] shrink-0 size-[55.987px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.996px] px-[11.996px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[27.984px] left-0 top-0 w-[173.424px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-white top-[-0.55px]">AI Medical Scanner</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[39.999px] left-0 top-[27.98px] w-[173.424px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#f3e8ff] text-[14px] top-[0.22px] w-[145px] whitespace-pre-wrap">Instant diagnosis with deep learning</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] h-[67.983px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading2 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[67.983px] relative shrink-0 w-[241.407px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.996px] items-center relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex h-[14.67px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-white">NEW</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[31.995px] relative rounded-[41020500px] shrink-0 w-[52.606px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8.882px] px-[11.996px] relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[67.983px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container15 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[12px] text-[rgba(255,255,255,0.8)] text-center whitespace-pre-wrap">X-Ray</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[38.85px] not-italic text-[14px] text-center text-white top-[0.22px]">95%</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[3.992px] h-[55.949px] items-start left-0 pt-[7.984px] px-[7.984px] rounded-[10px] top-0 w-[92.681px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[12px] text-[rgba(255,255,255,0.8)] text-center whitespace-pre-wrap">CT Scan</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[38.79px] not-italic text-[14px] text-center text-white top-[0.22px]">92%</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[3.992px] h-[55.949px] items-start left-[100.67px] pt-[7.984px] px-[7.984px] rounded-[10px] top-0 w-[92.681px]" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[12px] text-[rgba(255,255,255,0.8)] text-center whitespace-pre-wrap">MRI</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[38.47px] not-italic text-[14px] text-center text-white top-[0.22px]">90%</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[3.992px] h-[55.949px] items-start left-[201.33px] pl-[7.985px] pr-[7.984px] pt-[7.984px] rounded-[10px] top-0 w-[92.681px]" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[55.949px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[160.626px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#f3e8ff] text-[12px]">Upload image for AI analysis</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white h-[35.968px] relative rounded-[16.4px] shrink-0 w-[100.207px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[15.99px] not-italic text-[#9810fa] text-[14px] top-[8.21px]">Scan Now</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[35.968px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph8 />
      <Container21 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.988px] h-[239.86px] items-start left-[23.99px] pt-[23.992px] px-[23.992px] rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[339.82px] w-[341.996px]" data-name="Container" style={{ backgroundImage: "linear-gradient(144.956deg, rgb(152, 16, 250) 0%, rgb(21, 93, 252) 100%)" }}>
      <Container11 />
      <Container16 />
      <Container20 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27.984px] relative shrink-0 w-[224.521px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-[-0.55px]">Urgent Cases (AI Priority)</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-[46.704px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[23.5px] not-italic text-[#155dfc] text-[14px] text-center top-[0.22px]">See All</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[27.984px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Button1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24.011px] relative shrink-0 w-[73.35px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.78px]">John Doe</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#ffe2e2] h-[19.961px] relative rounded-[41020500px] shrink-0 w-[57.286px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[7.98px] not-italic text-[#c10007] text-[12px] top-[1.99px]">Critical</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[7.984px] h-[24.011px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Text6 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.22px] w-[201px] whitespace-pre-wrap">MRN-12345 • 45Y • CT Chest</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.992px] h-[48.002px] items-start left-0 top-0 w-[287.576px]" data-name="Container">
      <Container28 />
      <Paragraph9 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[287.58px] size-[19.999px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9994 19.9994">
        <g clipPath="url(#clip0_173_582)" id="Icon">
          <path d={svgPaths.p764800} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66662" />
          <path d="M9.99972 6.66648V9.99972" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66662" />
          <path d="M9.99972 13.333H10.0081" id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66662" />
        </g>
        <defs>
          <clipPath id="clip0_173_582">
            <rect fill="white" height="19.9994" width="19.9994" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[48.002px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Icon7 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.22px]">Pulmonary nodule detected</p>
    </div>
  );
}

function Container32() {
  return <div className="bg-[#fb2c36] h-[7.984px] shrink-0 w-full" data-name="Container" />;
}

function Container31() {
  return (
    <div className="bg-white flex-[1_0_0] h-[7.984px] min-h-px min-w-px relative rounded-[41020500px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[12.435px] relative size-full">
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[27.086px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#364153] text-[12px] top-0 w-[28px] whitespace-pre-wrap">95%</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[7.984px] items-center relative size-full">
          <Container31 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#fef2f2] h-[63.971px] relative rounded-[16.4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[3.992px] items-start pt-[11.996px] px-[11.996px] relative size-full">
        <Paragraph10 />
        <Container30 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9881 15.9881">
        <g clipPath="url(#clip0_173_576)" id="Icon">
          <path d={svgPaths.p55fd780} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33234" />
          <path d={svgPaths.p288d7e00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33234" />
        </g>
        <defs>
          <clipPath id="clip0_173_576">
            <rect fill="white" height="15.9881" width="15.9881" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[55.567px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]">5 min ago</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[75.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.992px] items-center relative size-full">
        <Icon8 />
        <Text8 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-[82.882px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[41.5px] not-italic text-[#155dfc] text-[14px] text-center top-[0.22px]">Review Now</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container34 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white h-[190.386px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffe2e2] border-[1.223px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[11.996px] items-start pb-[1.223px] pt-[17.211px] px-[17.211px] relative size-full">
        <Container26 />
        <Container29 />
        <Container33 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24.011px] relative shrink-0 w-[93.235px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.78px]">Sarah Smith</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#ffedd4] h-[19.961px] relative rounded-[41020500px] shrink-0 w-[42.902px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[7.98px] not-italic text-[#ca3500] text-[12px] top-[1.99px]">High</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[7.984px] h-[24.011px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Text9 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.22px] w-[201px] whitespace-pre-wrap">MRN-12346 • 62Y • MRI Brain</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.992px] h-[48.002px] items-start left-0 top-0 w-[287.576px]" data-name="Container">
      <Container38 />
      <Paragraph11 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[287.58px] size-[19.999px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9994 19.9994">
        <g clipPath="url(#clip0_173_582)" id="Icon">
          <path d={svgPaths.p764800} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66662" />
          <path d="M9.99972 6.66648V9.99972" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66662" />
          <path d="M9.99972 13.333H10.0081" id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66662" />
        </g>
        <defs>
          <clipPath id="clip0_173_582">
            <rect fill="white" height="19.9994" width="19.9994" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[48.002px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Icon9 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.22px]">Possible hemorrhage</p>
    </div>
  );
}

function Container42() {
  return <div className="bg-[#fb2c36] h-[7.984px] shrink-0 w-full" data-name="Container" />;
}

function Container41() {
  return (
    <div className="bg-white flex-[1_0_0] h-[7.984px] min-h-px min-w-px relative rounded-[41020500px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[29.799px] relative size-full">
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[27.411px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#364153] text-[12px] top-0 w-[28px] whitespace-pre-wrap">88%</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[7.984px] items-center relative size-full">
          <Container41 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#fef2f2] h-[63.971px] relative rounded-[16.4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[3.992px] items-start pt-[11.996px] px-[11.996px] relative size-full">
        <Paragraph12 />
        <Container40 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9881 15.9881">
        <g clipPath="url(#clip0_173_576)" id="Icon">
          <path d={svgPaths.p55fd780} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33234" />
          <path d={svgPaths.p288d7e00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33234" />
        </g>
        <defs>
          <clipPath id="clip0_173_576">
            <rect fill="white" height="15.9881" width="15.9881" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[61.106px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]">12 min ago</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[81.087px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.992px] items-center relative size-full">
        <Icon10 />
        <Text11 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-[82.882px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[41.5px] not-italic text-[#155dfc] text-[14px] text-center top-[0.22px]">Review Now</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container44 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-white h-[190.386px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffe2e2] border-[1.223px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[11.996px] items-start pb-[1.223px] pt-[17.211px] px-[17.211px] relative size-full">
        <Container36 />
        <Container39 />
        <Container43 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24.011px] relative shrink-0 w-[108.058px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.78px]">Mike Johnson</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#ffedd4] h-[19.961px] relative rounded-[41020500px] shrink-0 w-[42.902px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[7.98px] not-italic text-[#ca3500] text-[12px] top-[1.99px]">High</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[7.984px] h-[24.011px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Text12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.22px] w-[220px] whitespace-pre-wrap">MRN-12347 • 38Y • X-Ray Chest</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.992px] h-[48.002px] items-start left-0 top-0 w-[287.576px]" data-name="Container">
      <Container48 />
      <Paragraph13 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[287.58px] size-[19.999px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9994 19.9994">
        <g clipPath="url(#clip0_173_582)" id="Icon">
          <path d={svgPaths.p764800} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66662" />
          <path d="M9.99972 6.66648V9.99972" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66662" />
          <path d="M9.99972 13.333H10.0081" id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66662" />
        </g>
        <defs>
          <clipPath id="clip0_173_582">
            <rect fill="white" height="19.9994" width="19.9994" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[48.002px] relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Icon11 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.22px]">Rib fracture detected</p>
    </div>
  );
}

function Container52() {
  return <div className="bg-[#fb2c36] h-[7.984px] shrink-0 w-full" data-name="Container" />;
}

function Container51() {
  return (
    <div className="bg-white flex-[1_0_0] h-[7.984px] min-h-px min-w-px relative rounded-[41020500px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[19.885px] relative size-full">
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[27.201px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#364153] text-[12px] top-0 w-[28px] whitespace-pre-wrap">92%</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[7.985px] h-[15.988px] items-center relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Text13 />
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[#fef2f2] h-[63.971px] relative rounded-[16.4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[3.992px] items-start pt-[11.996px] px-[11.996px] relative size-full">
        <Paragraph14 />
        <Container50 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9881 15.9881">
        <g clipPath="url(#clip0_173_576)" id="Icon">
          <path d={svgPaths.p55fd780} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33234" />
          <path d={svgPaths.p288d7e00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33234" />
        </g>
        <defs>
          <clipPath id="clip0_173_576">
            <rect fill="white" height="15.9881" width="15.9881" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="flex-[1_0_0] h-[15.988px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]">28 min ago</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[82.901px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.992px] items-center relative size-full">
        <Icon12 />
        <Text14 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-[82.882px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[41.5px] not-italic text-[#155dfc] text-[14px] text-center top-[0.22px]">Review Now</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[19.999px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container54 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white h-[190.386px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffe2e2] border-[1.223px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[11.996px] items-start pb-[1.223px] pt-[17.211px] px-[17.211px] relative size-full">
        <Container46 />
        <Container49 />
        <Container53 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[11.996px] h-[595.151px] items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container35 />
      <Container45 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.988px] h-[639.122px] items-start left-0 px-[23.992px] top-[603.67px] w-[389.98px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function HomeDashboard() {
  return (
    <div className="bg-[#f9fafb] h-[1362.77px] relative shrink-0 w-full" data-name="HomeDashboard">
      <Container />
      <Container4 />
      <Container10 />
      <Container22 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col h-[1362.77px] items-start left-0 top-0 w-[389.98px]" data-name="App">
      <HomeDashboard />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[23.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-11.11%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99723 10.9962">
            <path d={svgPaths.p3424bf00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.26%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9931 20.9932">
            <path d={svgPaths.p26550f00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 size-[23.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[33.886px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#155dfc] text-[12px] text-center">Home</p>
      </div>
    </div>
  );
}

function NavItem() {
  return (
    <div className="h-[59.941px] relative shrink-0 w-[65.863px]" data-name="NavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.992px] items-center py-[7.984px] relative size-full">
        <Container56 />
        <Text15 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[23.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9945 7.99723">
            <path d={svgPaths.p35aa6780} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.92%_-33.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99471 9.74111">
            <path d={svgPaths.pdfaee00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99851 7.86752">
            <path d={svgPaths.p1435a080} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99654 9.99654">
            <path d={svgPaths.p1e7af800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 size-[23.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[46.264px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center">Patients</p>
      </div>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="h-[59.941px] relative shrink-0 w-[78.24px]" data-name="NavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.992px] items-center py-[7.984px] relative size-full">
        <Container57 />
        <Text16 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[23.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99931 5.99792">
            <path d="M0.999654 0.999654V4.99827" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99931 5.99792">
            <path d="M0.999654 0.999654V4.99827" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9931 19.9931">
            <path d={svgPaths.p321c2d00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-1px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9931 1.99931">
            <path d="M0.999654 0.999654H18.9934" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 size-[23.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[53.637px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center">Schedule</p>
      </div>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="h-[59.941px] relative shrink-0 w-[85.614px]" data-name="NavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.992px] items-center py-[7.984px] relative size-full">
        <Container58 />
        <Text17 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[23.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9945 7.99723">
            <path d={svgPaths.p9725b00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99654 9.99654">
            <path d={svgPaths.p1e7af800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 size-[23.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[37.019px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center">Profile</p>
      </div>
    </div>
  );
}

function NavItem3() {
  return (
    <div className="h-[59.941px] relative shrink-0 w-[68.995px]" data-name="NavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.992px] items-center py-[7.984px] relative size-full">
        <Container59 />
        <Text18 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[23.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.41%_12.68%]" data-name="Vector">
        <div className="absolute inset-[-5.01%_-5.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9058 21.9565">
            <path d={svgPaths.p24b76160} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99723 7.99723">
            <path d={svgPaths.p2ff7f80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99931" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 size-[23.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[47.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center">Settings</p>
      </div>
    </div>
  );
}

function NavItem4() {
  return (
    <div className="h-[59.941px] relative shrink-0 w-[79.024px]" data-name="NavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.992px] items-center py-[7.984px] relative size-full">
        <Container60 />
        <Text19 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex h-[59.941px] items-center justify-between pr-[-3.725px] relative shrink-0 w-full" data-name="Container">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
      <NavItem3 />
      <NavItem4 />
    </div>
  );
}

function BottomNav() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[73.159px] items-start left-0 pt-[13.218px] px-[7.984px] top-[843.72px] w-[389.98px]" data-name="BottomNav">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[1.223px] inset-0 pointer-events-none" />
      <Container55 />
    </div>
  );
}

export default function MainProject() {
  return (
    <div className="bg-white relative size-full" data-name="main project">
      <App />
      <BottomNav />
    </div>
  );
}