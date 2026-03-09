import svgPaths from "./svg-q76cl2gpef";

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99997 16">
            <path d={svgPaths.p233e7900} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1.99997">
            <path d="M15 0.999983H0.999983" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[39.973px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.987px] px-[7.987px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[31.986px] relative shrink-0 w-[97.353px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-[-0.73px]">Settings</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[15.993px] h-[39.973px] items-center pl-[-7.987px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Heading />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white h-[129.239px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[1.275px] pt-[47.999px] px-[24px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_11_3917)" id="Icon">
          <path d={svgPaths.p2cfd0e40} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p3764f900} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_11_3917">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[100.818px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">Notifications</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[11.99px] h-[23.98px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Heading1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">Push Notifications</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[16.013px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Receive push notifications</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.992px] h-[41.984px] items-start left-0 top-0 w-[251.508px]" data-name="Container">
      <Heading2 />
      <Paragraph />
    </div>
  );
}

function Container4() {
  return <div className="bg-white h-[19.996px] rounded-[42770700px] shrink-0 w-full" data-name="Container" />;
}

function Button1() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex flex-col h-[24px] items-start left-[251.51px] pl-[24px] pr-[4.003px] pt-[1.992px] rounded-[42770700px] top-0 w-[47.999px]" data-name="Button">
      <Container4 />
    </div>
  );
}

function ToggleSetting() {
  return (
    <div className="h-[41.984px] relative shrink-0 w-full" data-name="ToggleSetting">
      <Container3 />
      <Button1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">Urgent Case Alerts</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16.013px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Get alerts for critical AI findings</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.992px] h-[41.984px] items-start left-0 top-0 w-[251.508px]" data-name="Container">
      <Heading3 />
      <Paragraph1 />
    </div>
  );
}

function Container6() {
  return <div className="bg-white h-[19.996px] rounded-[42770700px] shrink-0 w-full" data-name="Container" />;
}

function Button2() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex flex-col h-[24px] items-start left-[251.51px] pl-[24px] pr-[4.003px] pt-[1.992px] rounded-[42770700px] top-0 w-[47.999px]" data-name="Button">
      <Container6 />
    </div>
  );
}

function ToggleSetting1() {
  return (
    <div className="h-[41.984px] relative shrink-0 w-full" data-name="ToggleSetting">
      <Container5 />
      <Button2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">Email Notifications</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[16.013px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Receive updates via email</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.992px] h-[41.984px] items-start left-0 top-0 w-[251.508px]" data-name="Container">
      <Heading4 />
      <Paragraph2 />
    </div>
  );
}

function Container8() {
  return <div className="bg-white h-[19.996px] rounded-[42770700px] shrink-0 w-full" data-name="Container" />;
}

function Button3() {
  return (
    <div className="absolute bg-[#d1d5dc] content-stretch flex flex-col h-[24px] items-start left-[251.51px] pl-[2px] pr-[26.003px] pt-[1.992px] rounded-[42770700px] top-0 w-[47.999px]" data-name="Button">
      <Container8 />
    </div>
  );
}

function ToggleSetting2() {
  return (
    <div className="h-[41.984px] relative shrink-0 w-full" data-name="ToggleSetting">
      <Container7 />
      <Button3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] h-[149.933px] items-start relative shrink-0 w-full" data-name="Container">
      <ToggleSetting />
      <ToggleSetting1 />
      <ToggleSetting2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white h-[229.898px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[15.993px] items-start pt-[19.996px] px-[19.996px] relative size-full">
        <Container2 />
        <Container9 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p3e44f300} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[57.918px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">Display</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[11.99px] h-[23.98px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <Heading5 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">Dark Mode (Viewer)</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[16.013px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Use dark theme in DICOM viewer</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.992px] h-[41.984px] items-start left-0 top-0 w-[251.508px]" data-name="Container">
      <Heading6 />
      <Paragraph3 />
    </div>
  );
}

function Container13() {
  return <div className="bg-white h-[19.996px] rounded-[42770700px] shrink-0 w-full" data-name="Container" />;
}

function Button4() {
  return (
    <div className="absolute bg-[#d1d5dc] content-stretch flex flex-col h-[24px] items-start left-[251.51px] pl-[2px] pr-[26.003px] pt-[1.992px] rounded-[42770700px] top-0 w-[47.999px]" data-name="Button">
      <Container13 />
    </div>
  );
}

function ToggleSetting3() {
  return (
    <div className="h-[41.984px] relative shrink-0 w-full" data-name="ToggleSetting">
      <Container12 />
      <Button4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white h-[121.95px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[15.993px] items-start pt-[19.996px] px-[19.996px] relative size-full">
        <Container11 />
        <ToggleSetting3 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_11_3921)" id="Icon">
          <path d="M9.99817 14.9973V4.1659" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p26f24200} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p3fbe5600} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p6828300} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p2d422100} id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p387a80e0} id="Vector_6" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p36d40c00} id="Vector_7" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p32298f80} id="Vector_8" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_11_3921">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[85.144px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">AI Settings</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[11.99px] h-[23.98px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Heading7 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">AI Annotations</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[16.013px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Show AI overlays by default</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.992px] h-[41.984px] items-start left-0 top-0 w-[251.508px]" data-name="Container">
      <Heading8 />
      <Paragraph4 />
    </div>
  );
}

function Container17() {
  return <div className="bg-white h-[19.996px] rounded-[42770700px] shrink-0 w-full" data-name="Container" />;
}

function Button5() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex flex-col h-[24px] items-start left-[251.51px] pl-[24px] pr-[4.003px] pt-[1.992px] rounded-[42770700px] top-0 w-[47.999px]" data-name="Button">
      <Container17 />
    </div>
  );
}

function ToggleSetting4() {
  return (
    <div className="h-[41.984px] relative shrink-0 w-full" data-name="ToggleSetting">
      <Container16 />
      <Button5 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#101828] text-[14px]">AI Sensitivity</p>
    </div>
  );
}

function Option() {
  return (
    <div className="absolute left-[-44px] size-0 top-[-675px]" data-name="Option">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 w-0">Low - Fewer findings</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="absolute left-[-44px] size-0 top-[-675px]" data-name="Option">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 w-0">Medium - Balanced</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="absolute left-[-44px] size-0 top-[-675px]" data-name="Option">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 w-0">High - Maximum detection</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-[#f9fafb] h-[41.825px] relative rounded-[16.4px] shrink-0 w-full" data-name="Dropdown">
      <Option />
      <Option1 />
      <Option2 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[16.013px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]">Controls how aggressive AI detection algorithms are</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[7.987px] h-[93.808px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Dropdown />
      <Paragraph5 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[15.993px] h-[151.785px] items-start relative shrink-0 w-full" data-name="Container">
      <ToggleSetting4 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white h-[231.75px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[15.993px] items-start pt-[19.996px] px-[19.996px] relative size-full">
        <Container15 />
        <Container19 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_11_3931)" id="Icon">
          <path d={svgPaths.p3a513a00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p1f573700} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_11_3931">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[153.896px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">Viewer Preferences</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[11.99px] h-[23.98px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon4 />
      <Heading9 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#101828] text-[14px]">Default Window/Level Preset</p>
    </div>
  );
}

function Option3() {
  return (
    <div className="absolute left-[-44px] size-0 top-[-864.76px]" data-name="Option">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 w-0">Lung Window</p>
    </div>
  );
}

function Option4() {
  return (
    <div className="absolute left-[-44px] size-0 top-[-864.76px]" data-name="Option">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 w-0">Mediastinum</p>
    </div>
  );
}

function Option5() {
  return (
    <div className="absolute left-[-44px] size-0 top-[-864.76px]" data-name="Option">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 w-0">Bone Window</p>
    </div>
  );
}

function Option6() {
  return (
    <div className="absolute left-[-44px] size-0 top-[-864.76px]" data-name="Option">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 w-0">Soft Tissue</p>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="bg-[#f9fafb] h-[41.825px] relative rounded-[16.4px] shrink-0 w-full" data-name="Dropdown">
      <Option3 />
      <Option4 />
      <Option5 />
      <Option6 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[7.987px] h-[69.808px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Dropdown1 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">Auto-save Reports</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[16.013px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Automatically save report drafts</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.992px] h-[41.984px] items-start left-0 top-0 w-[251.508px]" data-name="Container">
      <Heading10 />
      <Paragraph6 />
    </div>
  );
}

function Container24() {
  return <div className="bg-white h-[19.996px] rounded-[42770700px] shrink-0 w-full" data-name="Container" />;
}

function Button6() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex flex-col h-[24px] items-start left-[251.51px] pl-[24px] pr-[4.003px] pt-[1.992px] rounded-[42770700px] top-0 w-[47.999px]" data-name="Button">
      <Container24 />
    </div>
  );
}

function ToggleSetting5() {
  return (
    <div className="h-[41.984px] relative shrink-0 w-full" data-name="ToggleSetting">
      <Container23 />
      <Button6 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[15.993px] h-[127.785px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <ToggleSetting5 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white h-[207.751px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[15.993px] items-start pt-[19.996px] px-[19.996px] relative size-full">
        <Container21 />
        <Container25 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_11_3912)" id="Icon">
          <path d={svgPaths.p3675b480} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p6a5d00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p198c7f80} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_11_3912">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[115.596px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">{`Data & Storage`}</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[11.99px] h-[23.98px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Heading11 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#f9fafb] h-[43.976px] relative rounded-[16.4px] shrink-0 w-full" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[11.99px] not-italic text-[#101828] text-[14px] top-[10.99px]">Clear Cache</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#f9fafb] h-[43.976px] relative rounded-[16.4px] shrink-0 w-full" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[11.99px] not-italic text-[#101828] text-[14px] top-[10.99px]">Download Offline Data</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] h-[99.942px] items-start relative shrink-0 w-full" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-white h-[179.907px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[15.993px] items-start pt-[19.996px] px-[19.996px] relative size-full">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_11_3904)" id="Icon">
          <path d={svgPaths.p22f45f80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p1fc12400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M1.66636 9.99817H18.33" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_11_3904">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[149.674px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">{`Language & Region`}</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[11.99px] h-[23.98px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon6 />
      <Heading12 />
    </div>
  );
}

function Option7() {
  return (
    <div className="absolute left-[-44px] size-0 top-[-1256.42px]" data-name="Option">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 w-0">English (US)</p>
    </div>
  );
}

function Option8() {
  return (
    <div className="absolute left-[-44px] size-0 top-[-1256.42px]" data-name="Option">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 w-0">English (UK)</p>
    </div>
  );
}

function Option9() {
  return (
    <div className="absolute left-[-44px] size-0 top-[-1256.42px]" data-name="Option">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 w-0">Spanish</p>
    </div>
  );
}

function Option10() {
  return (
    <div className="absolute left-[-44px] size-0 top-[-1256.42px]" data-name="Option">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 w-0">French</p>
    </div>
  );
}

function Option11() {
  return (
    <div className="absolute left-[-44px] size-0 top-[-1256.42px]" data-name="Option">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 w-0">German</p>
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="bg-[#f9fafb] h-[41.825px] relative rounded-[16.4px] shrink-0 w-full" data-name="Dropdown">
      <Option7 />
      <Option8 />
      <Option9 />
      <Option10 />
      <Option11 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white h-[121.79px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[15.993px] items-start pt-[19.996px] px-[19.996px] relative size-full">
        <Container30 />
        <Dropdown2 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[1204.998px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[15.993px] items-start pt-[15.993px] px-[24px] relative size-full">
        <Container10 />
        <Container14 />
        <Container20 />
        <Container26 />
        <Container29 />
        <Container31 />
      </div>
    </div>
  );
}

function AppSettings() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[1430.236px] items-start relative shrink-0 w-full" data-name="AppSettings">
      <Container1 />
      <Container32 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col h-[1430.236px] items-start left-0 top-0 w-[387.499px]" data-name="App">
      <AppSettings />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-11.11%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99997 11">
            <path d={svgPaths.p1dd4d580} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.26%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21.0004">
            <path d={svgPaths.p3c2eaa00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[33.878px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center">Home</p>
      </div>
    </div>
  );
}

function NavItem() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[59.969px] items-center left-0 py-[7.987px] top-0 w-[65.864px]" data-name="NavItem">
      <Container33 />
      <Text />
    </div>
  );
}

function Icon8() {
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

function Container34() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text1() {
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
      <Container34 />
      <Text1 />
    </div>
  );
}

function Icon9() {
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

function Container35() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Text2() {
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
      <Container35 />
      <Text2 />
    </div>
  );
}

function Icon10() {
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

function Container36() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Text3() {
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
      <Container36 />
      <Text3 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.41%_12.68%]" data-name="Vector">
        <div className="absolute inset-[-5.01%_-5.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9127 21.9641">
            <path d={svgPaths.p3c2b1e80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99997 7.99997">
            <path d={svgPaths.p753fa80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[47.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#155dfc] text-[12px] text-center">Settings</p>
      </div>
    </div>
  );
}

function NavItem4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[59.969px] items-center left-[298.75px] py-[7.987px] top-0 w-[79.049px]" data-name="NavItem">
      <Container37 />
      <Text4 />
    </div>
  );
}

function Container38() {
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
      <Container38 />
    </div>
  );
}

function Icon12() {
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
      <Icon12 />
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