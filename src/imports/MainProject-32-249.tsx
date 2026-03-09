import svgPaths from "./svg-h2uijbfpx6";
import imgImageInvalidImage from "figma:asset/15be78b5ab68f80d2e67116d10e3d0fe2695ea0b.png";

function ImageInvalidImage() {
  return (
    <div className="absolute h-[255.989px] left-0 opacity-50 top-0 w-[320.38px]" data-name="Image (Invalid image)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageInvalidImage} />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[47.999px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.9992 44.9992">
            <path d={svgPaths.p11364500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.99991" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-20.83%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9997 16.9997">
            <path d={svgPaths.p6a300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.99991" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-20.83%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9997 16.9997">
            <path d={svgPaths.p559b600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.99991" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#fb2c36] relative rounded-[42770700px] shrink-0 size-[79.985px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[15.993px] px-[15.993px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex h-[255.989px] items-center justify-center left-0 top-0 w-[320.38px]" data-name="Container">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-black h-[255.989px] overflow-clip relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <ImageInvalidImage />
      <Container1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[31.986px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3207 29.3207">
            <path d={svgPaths.p1ba3200} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66551" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1.33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66551 7.99654">
            <path d="M1.33276 1.33276V6.66379" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66551" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]" data-name="Vector">
        <div className="absolute inset-[-1.33px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.67884 2.66551">
            <path d="M1.33276 1.33276H1.34608" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66551" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#ffe2e2] relative rounded-[42770700px] shrink-0 size-[55.966px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.99px] px-[11.99px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28.003px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#82181a] text-[18px] top-[-0.45px]">Invalid Medical Image</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[99.982px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#c10007] text-[14px] top-[-1px] w-[195px]">This does not appear to be a valid XRAY medical scan. The image looks like a regular photo or non-medical content.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16.013px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px not-italic relative text-[#9f0712] text-[12px]">💡 Suggestion:</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[48.039px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#c10007] text-[12px] top-0 w-[170px]">Please upload only medical imaging files (XRAY scans) for AI analysis.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#fef2f2] h-[94.564px] relative rounded-[16.4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffe2e2] border-[1.275px] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <div className="content-stretch flex flex-col gap-[3.983px] items-start pb-[1.275px] pl-[13.265px] pr-[13.264px] pt-[13.264px] relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] h-[242.525px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.987px] items-start relative size-full">
        <Heading1 />
        <Paragraph />
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[242.525px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[15.993px] items-start relative size-full">
        <Container3 />
        <Container5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[309.067px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[1.275px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-[1.275px] pt-[25.274px] px-[25.274px] relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[19.996px] top-[1.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_27_16549)" id="Icon">
          <path d={svgPaths.p1aaacf00} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p2d4f71dc} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_27_16549">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-full" data-name="Heading 4">
      <Icon2 />
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[27.98px] not-italic text-[#1c398e] text-[16px] top-[-1.73px]">Required Image Type</p>
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[#155dfc] left-0 rounded-[42770700px] size-[5.995px] top-[6.99px]" data-name="Container" />;
}

function Container9() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13.98px] not-italic text-[#193cb8] text-[14px] top-[-1px] w-[166px]">Medical XRAY scans only</p>
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[#155dfc] left-0 rounded-[42770700px] size-[5.995px] top-[6.99px]" data-name="Container" />;
}

function Container11() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13.98px] not-italic text-[#193cb8] text-[14px] top-[-1px]">DICOM format or medical imaging files</p>
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[#155dfc] left-0 rounded-[42770700px] size-[5.995px] top-[6.99px]" data-name="Container" />;
}

function Container13() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13.98px] not-italic text-[#193cb8] text-[14px] top-[-1px]">Clear, high-quality images</p>
    </div>
  );
}

function Container14() {
  return <div className="absolute bg-[#155dfc] left-0 rounded-[42770700px] size-[5.995px] top-[6.99px]" data-name="Container" />;
}

function Container15() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13.98px] not-italic text-[#193cb8] text-[14px] top-[-1px]">No regular photos or personal images</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[7.987px] h-[103.945px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container11 />
      <Container13 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#eff6ff] h-[182.457px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-[1.275px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[11.99px] items-start pb-[1.275px] pt-[21.271px] px-[21.271px] relative size-full">
        <Heading2 />
        <Container16 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gradient-to-r from-[#9810fa] h-[55.966px] relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[#155dfc] w-full" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[160.35px] not-italic text-[16px] text-center text-white top-[14.27px] translate-x-[-50%]">Try Another Image</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[58.515px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.275px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[159.69px] not-italic text-[#364153] text-[16px] text-center top-[15.54px] translate-x-[-50%]">Back to Home</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] h-[126.471px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function AiScannerScreen() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[24px] h-[945.982px] items-start relative shrink-0 w-full" data-name="AIScannerScreen">
      <Container2 />
      <Container7 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col h-[1269.927px] items-start left-0 pt-[203.947px] px-[24px] top-0 w-[368.379px]" data-name="App">
      <AiScannerScreen />
    </div>
  );
}

function Icon3() {
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

function Container19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon3 />
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
      <Container19 />
      <Text />
    </div>
  );
}

function Icon4() {
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

function Container20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon4 />
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
      <Container20 />
      <Text1 />
    </div>
  );
}

function Icon5() {
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

function Container21() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon5 />
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
      <Container21 />
      <Text2 />
    </div>
  );
}

function Icon6() {
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

function Container22() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon6 />
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
      <Container22 />
      <Text3 />
    </div>
  );
}

function Icon7() {
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

function Container23() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text4() {
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
      <Container23 />
      <Text4 />
    </div>
  );
}

function Container24() {
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
    <div className="absolute bg-white content-stretch flex flex-col h-[73.234px] items-start left-0 pt-[13.264px] px-[7.987px] top-[778.24px] w-[368.379px]" data-name="BottomNav">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[1.275px] inset-0 pointer-events-none" />
      <Container24 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99997 16">
            <path d={svgPaths.p233e7900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1.99997">
            <path d="M15 0.999983H0.999983" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[39.973px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.987px] px-[7.987px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[27.983px] relative shrink-0 w-[189.228px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-white top-[-0.73px]">AI Medical Scanner</p>
      </div>
    </div>
  );
}

function Container25() {
  return <div className="h-0 shrink-0 w-[39.993px]" data-name="Container" />;
}

function Container26() {
  return (
    <div className="content-stretch flex h-[39.973px] items-center justify-between pl-[-7.987px] pr-[0.02px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Heading />
      <Container25 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[43.976px] min-h-px min-w-px relative rounded-[16.4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[51.71px] not-italic text-[#9810fa] text-[16px] text-center top-[8.27px] translate-x-[-50%]">X-Ray</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] flex-[1_0_0] h-[43.976px] min-h-px min-w-px relative rounded-[16.4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[51.6px] not-italic text-[16px] text-center text-white top-[8.27px] translate-x-[-50%]">CT Scan</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] flex-[1_0_0] h-[43.976px] min-h-px min-w-px relative rounded-[16.4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[50.91px] not-italic text-[16px] text-center text-white top-[8.27px] translate-x-[-50%]">MRI</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[7.987px] h-[43.976px] items-start pr-[-0.02px] relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function AiScannerScreen1() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#9810fa] gap-[24px] h-[179.947px] items-start left-0 pt-[47.999px] px-[24px] to-[#155dfc] top-0 w-[368.379px]" data-name="AIScannerScreen">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Icon9() {
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
    <div className="absolute content-stretch flex flex-col items-start left-[288.39px] pt-[15.993px] px-[15.993px] rounded-[42770700px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-[55.986px] top-[699.49px]" data-name="QuickAccessMenu" style={{ backgroundImage: "linear-gradient(135deg, rgb(152, 16, 250) 0%, rgb(230, 0, 118) 100%)" }}>
      <Icon9 />
    </div>
  );
}

export default function MainProject() {
  return (
    <div className="bg-white relative size-full" data-name="main project">
      <App />
      <BottomNav />
      <AiScannerScreen1 />
      <QuickAccessMenu />
    </div>
  );
}