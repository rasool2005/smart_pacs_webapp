import svgPaths from "./svg-xxgugtbo81";

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[19.996px] items-start left-0 top-0 w-[140.154px]" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#dbeafe] text-[14px]">Welcome back,</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[31.986px] left-0 top-[20px] w-[140.154px]" data-name="Heading 1">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-white top-[-0.73px]">Smart PACS</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[51.983px] left-0 top-0 w-[140.154px]" data-name="Container">
      <Paragraph />
      <Heading />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[11.99px] size-[24px] top-[11.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p34079b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          <path d={svgPaths.p21b0a2c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#fb2c36] left-[36.01px] rounded-[42770700px] size-[7.987px] top-[3.98px]" data-name="Text" />;
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] left-[291.52px] rounded-[16px] size-[47.979px] top-[1.99px]" data-name="Button">
      <Icon />
      <Text />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[51.983px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Button />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white content-stretch flex h-[55.966px] items-center left-0 overflow-clip pl-[48px] pr-[16px] py-[16px] rounded-[16px] top-0 w-[339.5px]" data-name="Text Input">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)]">Search patients, studies...</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[15.99px] size-[19.996px] top-[17.98px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p252b480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p1e0f8000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[55.966px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[211.933px] items-start left-0 pt-[47.999px] px-[24px] rounded-bl-[24px] rounded-br-[24px] top-0 w-[387.499px]" data-name="Container" style={{ backgroundImage: "linear-gradient(151.325deg, rgb(21, 93, 252) 0%, rgb(20, 71, 230) 100%)" }}>
      <Container1 />
      <Container2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_70.83%_70.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99997 5.99997">
            <path d={svgPaths.pbf6b00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_12.5%_70.83%_70.83%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99997 5.99997">
            <path d={svgPaths.p3298d140} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_12.5%_12.5%_70.83%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99997 5.99997">
            <path d={svgPaths.p144d4d70} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_70.83%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99997 5.99997">
            <path d={svgPaths.p30e56570} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16px] shrink-0 size-[47.979px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.99px] px-[11.99px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[28.819px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-center">Scan</p>
      </div>
    </div>
  );
}

function QuickAction() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.987px] h-[95.959px] items-center left-0 py-[11.99px] rounded-[16.4px] top-0 w-[67.876px]" data-name="QuickAction">
      <Container4 />
      <Text1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.p6b61b00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16px] shrink-0 size-[47.979px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.99px] px-[11.99px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[43px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-center">Studies</p>
      </div>
    </div>
  );
}

function QuickAction1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.987px] h-[95.959px] items-center left-[79.87px] py-[11.99px] rounded-[16.4px] top-0 w-[67.896px]" data-name="QuickAction">
      <Container5 />
      <Text2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99997 5.99997">
            <path d="M0.999983 0.999983V4.99998" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99997 5.99997">
            <path d="M0.999983 0.999983V4.99998" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3749bd00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-1px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1.99997">
            <path d="M0.999983 0.999983H19" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16px] shrink-0 size-[47.979px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.99px] px-[11.99px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[53.636px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-center">Schedule</p>
      </div>
    </div>
  );
}

function QuickAction2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.987px] h-[95.959px] items-center left-[159.75px] py-[11.99px] rounded-[16.4px] top-0 w-[67.876px]" data-name="QuickAction">
      <Container6 />
      <Text3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
            <path d={svgPaths.p3678d980} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99997 7.99997">
            <path d={svgPaths.p29a81a00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-1px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99997 1.99997">
            <path d="M2.99998 0.999983H0.999983" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-1px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99997 1.99997">
            <path d="M8.99998 0.999983H0.999983" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-1px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99997 1.99997">
            <path d="M8.99998 0.999983H0.999983" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16px] shrink-0 size-[47.979px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.99px] px-[11.99px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[44.593px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-center">Reports</p>
      </div>
    </div>
  );
}

function QuickAction3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.987px] h-[95.959px] items-center left-[239.62px] py-[11.99px] rounded-[16.4px] top-0 w-[67.896px]" data-name="QuickAction">
      <Container7 />
      <Text4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[95.959px] relative shrink-0 w-full" data-name="Container">
      <QuickAction />
      <QuickAction1 />
      <QuickAction2 />
      <QuickAction3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[127.945px] items-start left-[24px] pt-[15.993px] px-[15.993px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[187.93px] w-[339.5px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28.003px] relative shrink-0 w-[224.56px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-[-0.45px]">Urgent Cases (AI Priority)</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[46.705px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">See All</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[28.003px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Heading1 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[73.393px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">John Doe</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#ffe2e2] h-[19.996px] relative rounded-[42770700px] shrink-0 w-[57.3px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[7.99px] not-italic text-[#c10007] text-[12px] top-[1.99px]">Critical</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[7.987px] h-[23.98px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Text5 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[201px]">MRN-12345 • 45Y • CT Chest</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[47.959px] items-start left-0 top-0 w-[284.968px]" data-name="Container">
      <Container11 />
      <Paragraph1 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[284.97px] size-[19.996px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_11_1791)" id="Icon">
          <path d={svgPaths.p22f45f80} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M9.99817 6.66545V9.99817" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M9.99817 13.3309H10.0065" id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_11_1791">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[47.959px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Icon6 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#101828] text-[14px]">Pulmonary nodule detected</p>
    </div>
  );
}

function Container14() {
  return <div className="bg-[#fb2c36] h-[7.987px] shrink-0 w-full" data-name="Container" />;
}

function Container15() {
  return (
    <div className="bg-white flex-[1_0_0] h-[7.987px] min-h-px min-w-px relative rounded-[42770700px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[12.309px] relative size-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[27.067px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#364153] text-[12px] top-0 w-[28px]">95%</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[7.987px] h-[16.013px] items-center relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Text6 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#fef2f2] h-[63.972px] relative rounded-[16.4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[3.983px] items-start pt-[11.99px] px-[11.99px] relative size-full">
        <Paragraph2 />
        <Container16 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_11_1763)" id="Icon">
          <path d={svgPaths.p1371f800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p1e5c7900} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_11_1763">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[16.013px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]">5 min ago</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[75.544px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.983px] items-center relative size-full">
        <Icon7 />
        <Text7 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[82.873px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">Review Now</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container18 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white h-[190.443px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffe2e2] border-[1.275px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[11.99px] items-start pb-[1.275px] pt-[17.268px] px-[17.268px] relative size-full">
        <Container13 />
        <Container17 />
        <Container19 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[93.29px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">Sarah Smith</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#ffedd4] h-[19.996px] relative rounded-[42770700px] shrink-0 w-[42.92px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[7.99px] not-italic text-[#ca3500] text-[12px] top-[1.99px]">High</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[7.987px] h-[23.98px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Text8 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[201px]">MRN-12346 • 62Y • MRI Brain</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[47.959px] items-start left-0 top-0 w-[284.968px]" data-name="Container">
      <Container21 />
      <Paragraph3 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[284.97px] size-[19.996px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_11_1791)" id="Icon">
          <path d={svgPaths.p22f45f80} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M9.99817 6.66545V9.99817" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M9.99817 13.3309H10.0065" id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_11_1791">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[47.959px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Icon8 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#101828] text-[14px]">Possible hemorrhage</p>
    </div>
  );
}

function Container24() {
  return <div className="bg-[#fb2c36] h-[7.987px] shrink-0 w-full" data-name="Container" />;
}

function Container25() {
  return (
    <div className="bg-white flex-[1_0_0] h-[7.987px] min-h-px min-w-px relative rounded-[42770700px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[29.477px] relative size-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[27.425px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#364153] text-[12px] top-0 w-[28px]">88%</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[7.987px] h-[16.013px] items-center relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Text9 />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#fef2f2] h-[63.972px] relative rounded-[16.4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[3.983px] items-start pt-[11.99px] px-[11.99px] relative size-full">
        <Paragraph4 />
        <Container26 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_11_1763)" id="Icon">
          <path d={svgPaths.p1371f800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p1e5c7900} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_11_1763">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="flex-[1_0_0] h-[16.013px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]">12 min ago</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[81.081px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.983px] items-center relative size-full">
        <Icon9 />
        <Text10 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[82.873px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">Review Now</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container28 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white h-[190.443px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffe2e2] border-[1.275px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[11.99px] items-start pb-[1.275px] pt-[17.268px] px-[17.268px] relative size-full">
        <Container23 />
        <Container27 />
        <Container29 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[108.108px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">Mike Johnson</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[#ffedd4] h-[19.996px] relative rounded-[42770700px] shrink-0 w-[42.92px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[7.99px] not-italic text-[#ca3500] text-[12px] top-[1.99px]">High</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[7.987px] h-[23.98px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Text11 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[220px]">MRN-12347 • 38Y • X-Ray Chest</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[47.959px] items-start left-0 top-0 w-[284.968px]" data-name="Container">
      <Container31 />
      <Paragraph5 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[284.97px] size-[19.996px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_11_1791)" id="Icon">
          <path d={svgPaths.p22f45f80} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M9.99817 6.66545V9.99817" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M9.99817 13.3309H10.0065" id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_11_1791">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[47.959px] relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Icon10 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#101828] text-[14px]">Rib fracture detected</p>
    </div>
  );
}

function Container34() {
  return <div className="bg-[#fb2c36] h-[7.987px] shrink-0 w-full" data-name="Container" />;
}

function Container35() {
  return (
    <div className="bg-white flex-[1_0_0] h-[7.987px] min-h-px min-w-px relative rounded-[42770700px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[19.678px] relative size-full">
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[27.206px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#364153] text-[12px] top-0 w-[28px]">92%</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[7.987px] h-[16.013px] items-center relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Text12 />
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#fef2f2] h-[63.972px] relative rounded-[16.4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[3.983px] items-start pt-[11.99px] px-[11.99px] relative size-full">
        <Paragraph6 />
        <Container36 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_11_1763)" id="Icon">
          <path d={svgPaths.p1371f800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p1e5c7900} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_11_1763">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[62.937px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]">28 min ago</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[82.913px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.983px] items-center relative size-full">
        <Icon11 />
        <Text13 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[82.873px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">Review Now</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container38 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-white h-[190.443px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffe2e2] border-[1.275px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[11.99px] items-start pb-[1.275px] pt-[17.268px] px-[17.268px] relative size-full">
        <Container33 />
        <Container37 />
        <Container39 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] h-[595.309px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container30 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.993px] h-[639.305px] items-start left-0 px-[24px] top-[339.88px] w-[387.499px]" data-name="Container">
      <Container10 />
      <Container41 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28.003px] relative shrink-0 w-[228.066px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-[-0.45px]">{`Today's Assigned Studies`}</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[46.705px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">See All</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[28.003px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Heading5 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">Emily Davis</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[122px]">MRN-12348 • 29Y</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[43.976px] relative shrink-0 w-[121.671px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="bg-[#eff6ff] h-[23.98px] relative rounded-[42770700px] shrink-0 w-[116.254px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[11.99px] not-italic text-[#1447e6] text-[12px] top-[3.98px]">Pending Review</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[43.976px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container44 />
        <Text14 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[87.892px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">CT Abdomen</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[59.232px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]">1 hour ago</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex h-[19.996px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text15 />
      <Text16 />
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-white h-[103.945px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[7.987px] items-start pt-[15.993px] px-[15.993px] relative size-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">Robert Brown</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[120px]">MRN-12349 • 71Y</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[43.976px] relative shrink-0 w-[119.54px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="bg-[#eff6ff] h-[23.98px] relative rounded-[42770700px] shrink-0 w-[89.486px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[11.99px] not-italic text-[#1447e6] text-[12px] top-[3.98px]">In Progress</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[43.976px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container48 />
        <Text17 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[67.259px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">MRI Spine</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[67.199px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]">2 hours ago</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text18 />
          <Text19 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white h-[103.945px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[7.987px] items-start pt-[15.993px] px-[15.993px] relative size-full">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] h-[219.88px] items-start relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.993px] h-[263.876px] items-start left-0 px-[24px] top-[1003.18px] w-[387.499px]" data-name="Container">
      <Container43 />
      <Container52 />
    </div>
  );
}

function HomeDashboard() {
  return (
    <div className="bg-[#f9fafb] h-[1387.057px] relative shrink-0 w-full" data-name="HomeDashboard">
      <Container3 />
      <Container9 />
      <Container42 />
      <Container53 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col h-[1387.057px] items-start left-0 top-0 w-[387.499px]" data-name="App">
      <HomeDashboard />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-11.11%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99997 11">
            <path d={svgPaths.p1dd4d580} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.26%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21.0004">
            <path d={svgPaths.p3c2eaa00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[33.878px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#155dfc] text-[12px] text-center">Home</p>
      </div>
    </div>
  );
}

function NavItem() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[59.969px] items-center left-0 py-[7.987px] top-0 w-[65.864px]" data-name="NavItem">
      <Container54 />
      <Text20 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 7.99997">
            <path d={svgPaths.p301aac00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.92%_-33.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99641 9.74445">
            <path d={svgPaths.p3c16858f} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00021 7.87021">
            <path d={svgPaths.p381f1ee0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99997 9.99997">
            <path d={svgPaths.p295b9100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[46.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center">Patients</p>
      </div>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[59.969px] items-center left-[65.86px] py-[7.987px] top-0 w-[78.253px]" data-name="NavItem">
      <Container55 />
      <Text21 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99997 5.99997">
            <path d="M0.999983 0.999983V4.99998" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99997 5.99997">
            <path d="M0.999983 0.999983V4.99998" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3749bd00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-1px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1.99997">
            <path d="M0.999983 0.999983H19" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[53.636px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center">Schedule</p>
      </div>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[59.969px] items-center left-[144.12px] py-[7.987px] top-0 w-[85.622px]" data-name="NavItem">
      <Container56 />
      <Text22 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 7.99997">
            <path d={svgPaths.p301aac00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99997 9.99997">
            <path d={svgPaths.p295b9100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[37.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center">Profile</p>
      </div>
    </div>
  );
}

function NavItem3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[59.969px] items-center left-[229.74px] py-[7.987px] top-0 w-[69.011px]" data-name="NavItem">
      <Container57 />
      <Text23 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.41%_12.68%]" data-name="Vector">
        <div className="absolute inset-[-5.01%_-5.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9127 21.9641">
            <path d={svgPaths.p3c2b1e80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99997 7.99997">
            <path d={svgPaths.p753fa80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[47.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center">Settings</p>
      </div>
    </div>
  );
}

function NavItem4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[59.969px] items-center left-[298.75px] py-[7.987px] top-0 w-[79.049px]" data-name="NavItem">
      <Container58 />
      <Text24 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[59.969px] relative shrink-0 w-full" data-name="Container">
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
    <div className="absolute bg-white content-stretch flex flex-col h-[73.234px] items-start left-0 pt-[13.265px] px-[7.987px] top-[843.25px] w-[387.499px]" data-name="BottomNav">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[1.275px] inset-0 pointer-events-none" />
      <Container59 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.32%_12.49%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0068 22.0052">
            <path d={svgPaths.p249ed500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function QuickAccessMenu() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[307.51px] pt-[15.993px] px-[15.993px] rounded-[42770700px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-[55.986px] top-[764.5px]" data-name="QuickAccessMenu" style={{ backgroundImage: "linear-gradient(135deg, rgb(152, 16, 250) 0%, rgb(230, 0, 118) 100%)" }}>
      <Icon17 />
    </div>
  );
}

export default function MainProject() {
  return (
    <div className="bg-white relative size-full" data-name="main project">
      <App />
      <BottomNav />
      <QuickAccessMenu />
    </div>
  );
}