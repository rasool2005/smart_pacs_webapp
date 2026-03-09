import svgPaths from "./svg-3r9zifyynf";

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
    <div className="relative rounded-[16.4px] shrink-0 size-[39.973px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.987px] px-[7.987px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1.99997">
            <path d="M0.999983 0.999983H15" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99997 16">
            <path d={svgPaths.p2ab54580} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[16.4px] shrink-0 size-[39.973px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.987px] px-[7.987px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[7.987px] h-[39.973px] items-center left-[24px] top-[48px] w-[87.932px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[31.986px] left-[24px] top-[103.97px] w-[339.5px]" data-name="Heading 1">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-[-0.73px]">Studies</p>
    </div>
  );
}

function NavigationHeader() {
  return (
    <div className="bg-white h-[161.225px] relative shrink-0 w-full" data-name="NavigationHeader">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <Container />
      <Heading />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex h-[47.959px] items-center left-0 overflow-clip pl-[48px] pr-[16px] py-[12px] rounded-[16px] top-0 w-[339.5px]" data-name="Text Input">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)]">Search studies...</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[15.99px] size-[19.996px] top-[13.98px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p252b480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p1e0f8000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[47.959px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white h-[81.22px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[1.275px] pt-[15.993px] px-[24px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#dbeafe] h-[23.98px] relative rounded-[10px] shrink-0 w-[32.743px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[7.99px] not-italic text-[#1447e6] text-[12px] top-[3.98px]">CT</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#ffe2e2] h-[23.98px] relative rounded-[10px] shrink-0 w-[57.3px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[7.99px] not-italic text-[#c10007] text-[12px] top-[3.98px]">Critical</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[7.987px] h-[23.98px] items-center relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">CT Chest</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[159px]">John Doe • MRN-12345</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.987px] h-[79.926px] items-start left-0 top-0 w-[241.868px]" data-name="Container">
      <Container3 />
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#155dfc] h-[35.97px] left-[241.87px] rounded-[16.4px] top-0 w-[65.645px]" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[32.99px] not-italic text-[14px] text-center text-white top-[6.99px] translate-x-[-50%]">View</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[79.926px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Button2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_11_3406)" id="Icon">
          <path d="M5.33103 1.33276V3.99827" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M10.6621 1.33276V3.99827" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p60cb280} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M1.99914 6.66379H13.9939" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_11_3406">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[159.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[160px]">2026-01-20 • 09:30 AM</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[179.867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.983px] items-center relative size-full">
        <Icon3 />
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[124.001px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#e7000b] text-[14px]">AI Review Pending</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[33.261px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[1.275px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[1.275px] relative size-full">
          <Container6 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white h-[157.162px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[11.99px] items-start pt-[15.993px] px-[15.993px] relative size-full">
        <Container5 />
        <Container7 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#dbeafe] h-[23.98px] relative rounded-[10px] shrink-0 w-[38.2px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[7.99px] not-italic text-[#1447e6] text-[12px] top-[3.98px]">MRI</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#ffedd4] h-[23.98px] relative rounded-[10px] shrink-0 w-[55.468px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[7.99px] not-italic text-[#ca3500] text-[12px] top-[3.98px]">Urgent</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[7.987px] h-[23.98px] items-center relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">MRI Brain</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[176px]">Sarah Smith • MRN-12346</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.987px] h-[79.926px] items-start left-0 top-0 w-[241.868px]" data-name="Container">
      <Container9 />
      <Heading2 />
      <Paragraph1 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#155dfc] h-[35.97px] left-[241.87px] rounded-[16.4px] top-0 w-[65.645px]" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[32.99px] not-italic text-[14px] text-center text-white top-[6.99px] translate-x-[-50%]">View</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[79.926px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Button3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_11_3406)" id="Icon">
          <path d="M5.33103 1.33276V3.99827" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M10.6621 1.33276V3.99827" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p60cb280} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M1.99914 6.66379H13.9939" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_11_3406">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[155.011px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[156px]">2026-01-20 • 10:15 AM</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[174.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.983px] items-center relative size-full">
        <Icon4 />
        <Text6 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[75.663px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f54900] text-[14px]">In Progress</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[33.261px] items-center justify-between pt-[1.275px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[1.275px] inset-0 pointer-events-none" />
      <Container12 />
      <Text7 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white h-[157.162px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[11.99px] items-start pt-[15.993px] px-[15.993px] relative size-full">
        <Container11 />
        <Container13 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#dbeafe] h-[23.98px] relative rounded-[10px] shrink-0 w-[32.444px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[7.99px] not-italic text-[#1447e6] text-[12px] top-[3.98px]">XR</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#ffedd4] h-[23.98px] relative rounded-[10px] shrink-0 w-[55.468px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[7.99px] not-italic text-[#ca3500] text-[12px] top-[3.98px]">Urgent</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[7.987px] h-[23.98px] items-center relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">X-Ray Chest</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[187px]">Mike Johnson • MRN-12347</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.987px] h-[79.926px] items-start left-0 top-0 w-[241.868px]" data-name="Container">
      <Container15 />
      <Heading3 />
      <Paragraph2 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#155dfc] h-[35.97px] left-[241.87px] rounded-[16.4px] top-0 w-[65.645px]" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[32.99px] not-italic text-[14px] text-center text-white top-[6.99px] translate-x-[-50%]">View</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[79.926px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Button4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_11_3406)" id="Icon">
          <path d="M5.33103 1.33276V3.99827" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M10.6621 1.33276V3.99827" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p60cb280} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M1.99914 6.66379H13.9939" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_11_3406">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[155.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[156px]">2026-01-20 • 11:00 AM</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[175.227px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.983px] items-center relative size-full">
        <Icon5 />
        <Text10 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[106.534px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#f54900] text-[14px]">Pending Review</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[33.261px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[1.275px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[1.275px] relative size-full">
          <Container18 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white h-[157.162px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[11.99px] items-start pt-[15.993px] px-[15.993px] relative size-full">
        <Container17 />
        <Container19 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[#dbeafe] h-[23.98px] left-0 rounded-[10px] top-0 w-[32.743px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[7.99px] not-italic text-[#1447e6] text-[12px] top-[3.98px]">CT</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[23.98px] left-0 top-[31.97px] w-[241.868px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">CT Abdomen</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[19.996px] left-0 top-[59.93px] w-[241.868px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[171px]">Emily Davis • MRN-12348</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[79.926px] left-0 top-0 w-[241.868px]" data-name="Container">
      <Text12 />
      <Heading4 />
      <Paragraph3 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#155dfc] h-[35.97px] left-[241.87px] rounded-[16.4px] top-0 w-[65.645px]" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[32.99px] not-italic text-[14px] text-center text-white top-[6.99px] translate-x-[-50%]">View</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[79.926px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Button5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_11_3406)" id="Icon">
          <path d="M5.33103 1.33276V3.99827" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M10.6621 1.33276V3.99827" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p60cb280} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M1.99914 6.66379H13.9939" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_11_3406">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[157.382px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[158px]">2026-01-19 • 02:45 PM</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[177.358px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.983px] items-center relative size-full">
        <Icon6 />
        <Text13 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[73.054px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#00a63e] text-[14px]">Completed</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[33.261px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[1.275px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[1.275px] relative size-full">
          <Container23 />
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white h-[157.162px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[11.99px] items-start pt-[15.993px] px-[15.993px] relative size-full">
        <Container22 />
        <Container24 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[#dbeafe] h-[23.98px] left-0 rounded-[10px] top-0 w-[38.2px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[7.99px] not-italic text-[#1447e6] text-[12px] top-[3.98px]">MRI</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[23.98px] left-0 top-[31.97px] w-[241.868px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1.73px]">MRI Spine</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[19.996px] left-0 top-[59.93px] w-[241.868px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[187px]">Robert Brown • MRN-12349</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[79.926px] left-0 top-0 w-[241.868px]" data-name="Container">
      <Text15 />
      <Heading5 />
      <Paragraph4 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#155dfc] h-[35.97px] left-[241.87px] rounded-[16.4px] top-0 w-[65.645px]" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[32.99px] not-italic text-[14px] text-center text-white top-[6.99px] translate-x-[-50%]">View</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[79.926px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Button6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_11_3406)" id="Icon">
          <path d="M5.33103 1.33276V3.99827" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M10.6621 1.33276V3.99827" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p60cb280} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M1.99914 6.66379H13.9939" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_11_3406">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[157.979px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[158px]">2026-01-19 • 03:30 PM</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[177.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3.983px] items-center relative size-full">
        <Icon7 />
        <Text16 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[73.054px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#00a63e] text-[14px]">Completed</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[33.261px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[1.275px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[1.275px] relative size-full">
          <Container28 />
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white h-[157.162px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[11.99px] items-start pt-[15.993px] px-[15.993px] relative size-full">
        <Container27 />
        <Container29 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[865.758px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[11.99px] items-start pt-[15.993px] px-[24px] relative size-full">
        <Container8 />
        <Container14 />
        <Container20 />
        <Container25 />
        <Container30 />
      </div>
    </div>
  );
}

function StudyList() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[1204.202px] items-start relative shrink-0 w-full" data-name="StudyList">
      <NavigationHeader />
      <Container2 />
      <Container31 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col h-[1204.202px] items-start left-0 top-0 w-[387.499px]" data-name="App">
      <StudyList />
    </div>
  );
}

function Icon8() {
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

function Container32() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text18() {
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
      <Container32 />
      <Text18 />
    </div>
  );
}

function Icon9() {
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

function Container33() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Text19() {
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
      <Container33 />
      <Text19 />
    </div>
  );
}

function Icon10() {
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

function Container34() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Text20() {
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
      <Container34 />
      <Text20 />
    </div>
  );
}

function Icon11() {
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

function Container35() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Text21() {
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
      <Container35 />
      <Text21 />
    </div>
  );
}

function Icon12() {
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

function Container36() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Text22() {
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
      <Container36 />
      <Text22 />
    </div>
  );
}

function Container37() {
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
      <Container37 />
    </div>
  );
}

function Icon13() {
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
      <Icon13 />
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