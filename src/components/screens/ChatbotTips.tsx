import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Send, User, Brain, Activity, Stethoscope, Zap, BookOpen, ChevronRight, ArrowLeft } from 'lucide-react';

// ── AI Logo ──────────────────────────────────────────────────
function AILogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ai-logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="16" fill="url(#ai-logo-grad)" />
      <path d="M16 6C16 6 22 10 22 16C22 22 16 26 16 26C16 26 10 22 10 16C10 10 16 6 16 6Z" fill="white" fillOpacity="0.9" />
      <path d="M6 16C6 16 10 10 16 10C22 10 26 16 26 16C26 16 22 22 16 22C10 22 6 16 6 16Z" fill="white" fillOpacity="0.45" />
      <circle cx="16" cy="16" r="3" fill="white" />
    </svg>
  );
}

// ── Types ────────────────────────────────────────────────────
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// ── Knowledge Base ───────────────────────────────────────────
interface KBEntry {
  keywords: string[];
  response: string;
}

const knowledgeBase: KBEntry[] = [
  // ── X-RAY ───────────────────────────────────────────────
  {
    keywords: ['chest x-ray', 'chest xray', 'cxr', 'chest radiograph'],
    response: 'Chest X-Ray (CXR) — Systematic Approach\n\nUse the ABCDEFGH method:\n• A – Airway: trachea midline, carina angle <70°\n• B – Bones: ribs, clavicles, spine for fractures\n• C – Cardiac: heart width ≤50% of thoracic width (PA view)\n• D – Diaphragm: right higher than left; check costophrenic angles\n• E – Edges: pleura, pneumothorax, effusion\n• F – Fields: lung parenchyma, opacities, consolidation\n• G – Great vessels: aortic knuckle, hilar structures\n• H – Hardware: tubes, lines, pacemakers\n\nTip: Always compare with prior studies for interval changes.',
  },
  {
    keywords: ['pneumonia', 'consolidation', 'lobar pneumonia', 'bronchopneumonia'],
    response: 'Pneumonia on Imaging\n\nX-Ray findings:\n• Lobar/segmental opacification with air bronchograms\n• Silhouette sign: opacity obscures heart or diaphragm border\n• Bilateral patchy infiltrates → atypical or viral pneumonia\n\nCT findings:\n• Ground-glass opacity (GGO) — early infection\n• Crazy-paving pattern — COVID-19, PCP pneumonia\n• Dense consolidation with air bronchograms\n• Peripheral/subpleural distribution common in viral\n\nTip: CURB-65 score guides hospital admission decisions.',
  },
  {
    keywords: ['pneumothorax', 'collapsed lung', 'tension pneumo'],
    response: 'Pneumothorax on X-Ray\n\nSigns:\n• Visible pleural line with absent lung markings beyond it\n• Deep sulcus sign on supine film (air in costophrenic recess)\n\nTension Pneumothorax (Emergency!):\n• Tracheal deviation AWAY from affected side\n• Mediastinal shift\n• Depressed ipsilateral diaphragm\n• Treat BEFORE imaging if clinically suspected!\n\nSizing (BTS): Small <2 cm from lung apex; Large ≥2 cm\n\nWarning: Tension pneumothorax = immediate needle decompression, do not wait for imaging!',
  },
  {
    keywords: ['pleural effusion', 'pleural fluid', 'blunting costophrenic'],
    response: 'Pleural Effusion on Imaging\n\nX-Ray:\n• Blunting of costophrenic angle (>175–200 mL)\n• Meniscus sign — fluid curves up lateral chest wall\n• Supine: diffuse hazy opacity over hemithorax\n• >500 mL visible on PA view\n\nUltrasound (preferred bedside): Anechoic fluid, detects small volumes\n\nCT: Characterizes fluid — simple vs. complex or loculated\n\nTypes: Transudate (heart failure, cirrhosis) vs. Exudate (Light criteria — infection, malignancy)\n\nTip: Bilateral effusions in heart failure are usually larger on the right.',
  },
  {
    keywords: ['pulmonary edema', 'cardiogenic pulmonary', 'interstitial edema'],
    response: 'Pulmonary Edema — X-Ray Stages\n\nStage 1 (Vascular redistribution): Upper lobe vessel prominence; Kerley B lines\n\nStage 2 (Interstitial edema): Kerley A and B lines; perihilar haziness; bronchial wall thickening\n\nStage 3 (Alveolar edema): Bilateral perihilar "bat-wing" opacities; air bronchograms\n\nOther findings: Cardiomegaly; bilateral effusions; peribronchial cuffing\n\nTip: Flash pulmonary edema can clear quickly — treatment response is diagnostic!',
  },
  {
    keywords: ['lung nodule', 'lung cancer', 'pulmonary mass', 'pulmonary nodule', 'solitary pulmonary nodule', 'spn'],
    response: 'Lung Nodule / Mass — Imaging Assessment\n\nDefinitions: Nodule ≤3 cm; Mass >3 cm\n\nMalignancy risk features:\n• Size >8 mm, irregular or spiculated margins\n• Upper lobe location, growth on follow-up\n• History of smoking, age >40\n\nBenign features: Smooth margins, calcification (central/popcorn/laminar), stable ≥2 years\n\nFleischner Society Guidelines (solid nodule):\n• <6 mm: No follow-up (low risk) or 12 months (high risk)\n• 6–8 mm: 6–12 months CT follow-up\n• >8 mm: 3-month CT or PET-CT or biopsy\n\nTip: PET-CT SUVmax >2.5 suggests malignancy. CT-guided biopsy for tissue diagnosis.',
  },
  {
    keywords: ['fracture', 'bone fracture', 'rib fracture', 'stress fracture', 'fracture x-ray'],
    response: 'Fracture Assessment on X-Ray\n\nKey descriptions needed:\n• Location: diaphysis, metaphysis, or epiphysis\n• Pattern: transverse, oblique, spiral, comminuted, segmental\n• Displacement: angulation, translation, shortening\n• Open vs. closed; articular involvement\n\nSpecial fractures:\n• Colles: Distal radius — dinner fork deformity\n• Monteggia: Ulna fracture + radial head dislocation\n• Galeazzi: Radius fracture + distal radioulnar dislocation\n• Segond: Lateral tibial avulsion → ACL injury\n\nRib fractures: First 1–3 ribs → high-energy trauma; ≥3 ribs → flail chest risk\n\nRule: Always get 2 views at 90°. Check joint above and below.',
  },
  {
    keywords: ['abdominal x-ray', 'abdomen x-ray', 'kub', 'abdominal radiograph', 'bowel obstruction xray'],
    response: 'Abdominal X-Ray (AXR/KUB) — Interpretation\n\nSystematic approach:\n• Gas pattern: Small bowel (central, valvulae conniventes) vs. large bowel (peripheral, haustra)\n• Bowel obstruction: Dilated loops >3 cm (SB) or >6 cm (LB); air-fluid levels\n• Free air: Rigler sign (air both sides of bowel wall); subphrenic air on CXR\n• Calcifications: Renal or ureteric calculi, AAA, appendicolith, gallstones (10% opaque)\n• Solid organs: Liver, spleen, kidney outlines\n• Bones: Spine, pelvis, ribs\n\nTip: 3-6-9 rule — SB normal <3 cm, LB normal <6 cm, cecum <9 cm before perforation risk.',
  },
  {
    keywords: ['skull x-ray', 'skull fracture', 'head x-ray'],
    response: 'Skull X-Ray — Key Points\n\nFracture patterns:\n• Linear fractures: straight lucent lines crossing sutures\n• Depressed fractures: overlapping bone density (double density sign)\n• Basilar skull fractures: Battle sign (mastoid bruising), raccoon eyes, CSF leak\n\nNormal variants (do not confuse with fractures):\n• Vascular markings (branch and curve)\n• Suture lines (serrated edges)\n• Wormian bones\n\nTip: Most head trauma goes directly to CT. Skull X-ray has limited use in adults — mainly for shunt assessment or foreign bodies.',
  },
  {
    keywords: ['spine x-ray', 'cervical spine', 'lumbar spine x-ray', 'vertebral fracture'],
    response: 'Spine X-Ray — ABCS Method\n\n• A – Alignment: 4 smooth lines on lateral C-spine\n• B – Bones: Each vertebral body and posterior elements\n• C – Cartilage: Disc spaces should be uniform\n• S – Soft tissues: Prevertebral soft tissue (C2 <7 mm, C3–4 <5 mm, C5–7 <22 mm)\n\nCompression fracture: Loss of anterior vertebral height >25%; wedge deformity\n\nBurst fracture: Loss of posterior vertebral height; retropulsed fragment — CT needed\n\nWarning: SCIWORA — Spinal Cord Injury Without Radiological Abnormality — MRI essential if neurological deficit despite normal X-ray or CT.',
  },
  {
    keywords: ['x-ray', 'xray', 'radiograph', 'plain film', 'plain x ray'],
    response: 'X-Ray (Plain Radiograph) — Overview\n\nX-rays use ionizing radiation to produce 2D projection images. Structures absorb radiation differently:\n• White (radiopaque): Bone, metal, contrast\n• Gray: Soft tissue, water, organs\n• Black (radiolucent): Air, fat\n\nCommon uses: Chest (CXR), Bones and Joints, Abdomen (AXR), Skull, Spine\n\nLimitations: 2D overlap, poor soft tissue contrast, radiation dose\n\nViews: PA (posteroanterior), AP, Lateral, Oblique, Erect, Supine\n\nTip: Always use 2 views at 90°. PA is standard for CXR — less cardiac magnification than AP.',
  },

  // ── MRI ─────────────────────────────────────────────────
  {
    keywords: ['mri sequences', 'mri modality', 't1 t2', 't1 mri', 't2 mri'],
    response: 'MRI Sequences — Core Guide\n\nCore sequences:\n• T1: Fat = bright, Water = dark. Best for anatomy and post-contrast enhancement\n• T2: Water = bright, Fat = bright. Best for pathology (edema, inflammation)\n• FLAIR: Suppresses CSF (dark). Best for brain lesions near ventricles or cortex\n• DWI/ADC: Diffusion restriction = acute ischemia, abscess, malignancy\n• T1+Gad (contrast): Blood-brain barrier breakdown, tumors, inflammation\n• GRE/SWI: Hemorrhage, calcification, iron deposition\n\nContraindications: Pacemakers, cochlear implants, metallic foreign bodies, claustrophobia\n\nTip: MRI is superior for soft tissue, brain, spine, joints, and abdomen — no ionizing radiation.',
  },
  {
    keywords: ['brain mri', 'mri brain', 'cerebral mri', 'head mri'],
    response: 'Brain MRI — Interpretation Guide\n\nProtocol: T1, T2, FLAIR, DWI, T1+contrast (SWI if needed)\n\nKey pathologies:\n• Stroke (acute): DWI bright + ADC dark within minutes of onset\n• Brain tumor: T1 hypointense, T2 hyperintense; ring enhancement in GBM or abscess\n• Multiple Sclerosis: Periventricular, juxtacortical, infratentorial T2/FLAIR lesions; Dawson fingers\n• Brain abscess: Ring-enhancing; DWI bright (restricted diffusion)\n• Hemorrhage: GRE/SWI most sensitive; age of blood changes T1/T2 signal\n• Meningitis: Leptomeningeal enhancement on T1+Gad\n\nTip: T1 bright lesion = fat, blood, protein, or gadolinium.',
  },
  {
    keywords: ['mri spine', 'spine mri', 'lumbar mri', 'cervical mri', 'disc herniation', 'spinal cord mri'],
    response: 'Spine MRI — Key Findings\n\nNormal anatomy: Vertebral bodies T1 bright (marrow), discs T2 bright (hydrated nucleus)\n\nCommon pathologies:\n• Disc herniation: Posterior disc material compressing thecal sac or nerve root\n  Severity: Protrusion → Extrusion → Sequestration\n• Spinal stenosis: Narrowed canal; loss of CSF signal around cord\n• Cord compression: T2 signal within cord = myelopathy (urgent!)\n• Infection (discitis/osteomyelitis): T2 bright disc + adjacent vertebrae; end plate destruction\n• Metastatic disease: T1 dark (replaces bright marrow), enhancing lesions\n• Cord tumors: Ependymoma (central), astrocytoma (infiltrating)\n\nWarning: Cord T2 signal change = urgent neurological review needed!',
  },
  {
    keywords: ['mri knee', 'knee mri', 'acl', 'meniscus', 'knee ligament'],
    response: 'Knee MRI — Ligament and Meniscus Assessment\n\nACL (Anterior Cruciate Ligament):\n• Normal: low T2 signal, straight fibers on sagittal view\n• Tear: T2 bright signal, discontinuity, horizontal orientation, empty notch sign\n\nMeniscus Grading:\n• Grade 1: Globular signal (no surface contact) — normal variant\n• Grade 2: Linear signal (no surface contact) — intrasubstance change\n• Grade 3: Signal reaching articular surface = TEAR\n• Bucket-handle tear: Fragment displaced into intercondylar notch\n\nPCL: Thicker, rarely torn; T2 bright = tear\n\nCartilage: T2 or DGEMRIC sequences for articular cartilage assessment\n\nTip: Bone marrow edema (T2 bright) at ligament attachment = associated bone bruising.',
  },
  {
    keywords: ['mri shoulder', 'shoulder mri', 'rotator cuff', 'shoulder tear'],
    response: 'Shoulder MRI — Rotator Cuff\n\nRotator Cuff muscles (SITS): Supraspinatus, Infraspinatus, Teres minor, Subscapularis\n\nSupraspinatus tear (most common):\n• Partial: T2 bright signal within tendon, no full-thickness gap\n• Full-thickness: T2 bright signal through entire tendon; fluid in subacromial bursa\n• Massive: Multiple tendons involved; superior migration of humeral head\n\nEllman Grading: Grade I (<25%), Grade II (25–50%), Grade III (>50%)\n\nAssociated findings:\n• AC joint arthritis, subcoracoid impingement\n• Labral tears (Bankart, SLAP) — MR arthrography preferred\n• Hill-Sachs deformity (posterolateral humeral head)\n\nTip: MR arthrogram best for labral assessment.',
  },
  {
    keywords: ['mri liver', 'liver mri', 'hepatic mri', 'focal liver lesion'],
    response: 'Liver MRI — Focal Lesion Characterization\n\nKey sequences: T1 in/out-of-phase, T2, DWI, dynamic contrast (arterial/portal/delayed)\n\nCommon lesions:\n• Cyst: T1 dark, T2 bright, no enhancement\n• Hemangioma: T1 dark, T2 very bright, peripheral nodular fill-in enhancement\n• HCC: T1 variable, T2 bright, arterial enhancement + washout\n• Metastasis: T1 dark, T2 bright, rim or variable enhancement\n• FNH: T1/T2 isointense, homogeneous enhancement + central scar\n\nLI-RADS scoring: LR-1 (benign) to LR-5 (definite HCC)\n\nTip: Hepatobiliary contrast agents (Primovist) improve detection of biliary lesions and FNH.',
  },
  {
    keywords: ['mri prostate', 'prostate mri', 'pi-rads', 'prostate cancer'],
    response: 'Prostate MRI (mpMRI) — PI-RADS Scoring\n\nMultiparametric MRI: T2, DWI/ADC, DCE (dynamic contrast)\n\nZones: Peripheral zone (70%, most cancers), Transitional zone (BPH area), Central zone\n\nPI-RADS scoring:\n• PI-RADS 1: Highly unlikely clinically significant cancer\n• PI-RADS 2: Unlikely\n• PI-RADS 3: Equivocal\n• PI-RADS 4: Likely\n• PI-RADS 5: Highly likely\n\nDWI: Most important for peripheral zone (low ADC = cancer)\nT2W: Most important for transitional zone\n\nTip: PI-RADS ≥3 generally warrants MRI-guided targeted biopsy.',
  },
  {
    keywords: ['diffusion weighted', 'dwi', 'adc', 'diffusion mri', 'restricted diffusion'],
    response: 'DWI (Diffusion Weighted Imaging)\n\nPrinciple: Measures Brownian motion of water molecules\n\nRestricted diffusion (bright DWI + dark ADC):\n• Acute stroke — within minutes, before conventional MRI changes\n• Brain abscess — vs. necrotic tumor which has facilitated diffusion\n• Lymphoma, high-grade tumors\n• Epidermoid cyst\n• Acute demyelination\n\nFacilitated diffusion (dark DWI + bright ADC):\n• Vasogenic edema, cysts, necrosis\n\nT2 shine-through: Bright on DWI but ALSO bright on ADC = not true restriction (T2 effect)\n\nTip: Always confirm DWI findings on ADC map. True restriction = bright DWI + dark ADC.',
  },
  {
    keywords: ['flair', 'fluid attenuated', 'flair sequence'],
    response: 'FLAIR (Fluid-Attenuated Inversion Recovery)\n\nPrinciple: Nulls CSF signal (appears dark), making periventricular and cortical lesions more conspicuous\n\nBest for:\n• MS plaques — periventricular, juxtacortical\n• Subarachnoid hemorrhage (SAH) detection — bright CSF\n• Cortical and subcortical infarcts\n• Encephalitis, leptomeningeal disease\n• White matter lesions (small vessel disease)\n\nFLAIR vs T2:\n• T2: Lesions near CSF are washed out\n• FLAIR: Lesions adjacent to ventricles/sulci become clearly visible\n\nTip: FLAIR negative + DWI positive = hyperacute stroke (<6 hours) — ideal thrombolysis window!',
  },
  {
    keywords: ['gadolinium', 'contrast enhancement', 'mri contrast', 'gad'],
    response: 'Gadolinium Contrast in MRI\n\nMechanism: Paramagnetic agent shortens T1 relaxation → T1 bright signal where it accumulates\n\nEnhancing lesions (BBB disruption):\n• Tumors (active tumor margin, not necrosis)\n• Active MS plaques (acute ring enhancement)\n• Abscesses (ring enhancement + DWI restriction)\n• Meningitis (leptomeningeal enhancement)\n\nPhases for body MRI:\n• Arterial (25–35 sec): HCC, hypervascular mets, AVM\n• Portal venous (70–80 sec): Liver parenchyma, metastases\n• Delayed (3–5 min): Fibrosis, cholangiocarcinoma\n\nWarning: NSF risk in severe renal failure (eGFR <30). Check renal function before contrast.',
  },
  {
    keywords: ['mri', 'magnetic resonance', 'mri scan'],
    response: 'MRI (Magnetic Resonance Imaging) — Overview\n\nMRI uses magnetic fields and radio waves — no ionizing radiation.\n\nCore sequences:\n• T1: Fat = bright, Water = dark — anatomy and post-contrast\n• T2: Water = bright — pathology (edema, inflammation)\n• FLAIR: Suppresses CSF — periventricular lesions\n• DWI/ADC: Diffusion restriction — acute ischemia, abscess\n• T1+Gad: Blood-brain barrier breakdown, tumors\n• GRE/SWI: Hemorrhage, calcification, iron\n\nContraindications: Pacemakers, cochlear implants, metallic foreign bodies, claustrophobia\n\nTip: MRI is superior for soft tissue, brain, spine, joints, and liver.',
  },

  // ── CT ──────────────────────────────────────────────────
  {
    keywords: ['hounsfield', 'window level', 'window setting', 'ct attenuation'],
    response: 'CT Hounsfield Units and Window Settings\n\nHounsfield Units (HU):\n• Air: -1000 HU\n• Fat: -100 to -50 HU\n• Water: 0 HU\n• Soft tissue: 20–80 HU\n• Acute blood: 50–80 HU\n• Bone: 400–1000 HU\n• Metal: >1000 HU\n\nWindow settings:\n• Brain: W80, L40\n• Stroke (subdural): W200, L75\n• Lung: W1500, L-600\n• Soft tissue: W400, L40\n• Bone: W2000, L400\n• Liver: W160, L60\n\nTip: Always review in multiple windows — never just one.',
  },
  {
    keywords: ['ct head', 'head ct', 'brain ct', 'ct brain', 'ncct', 'non contrast ct'],
    response: 'CT Head (Non-Contrast) — Systematic Review\n\nUse "Blood Can Be Very Bad" mnemonic:\n• B – Blood: Hyperdense (bright) — acute hemorrhage or calcification\n• C – Cisterns: Basal cisterns effaced = raised ICP\n• B – Brain: Symmetry, grey-white differentiation, mass effect\n• V – Ventricles: Size (hydrocephalus), shift, blood in ventricles\n• B – Bone: Skull fractures, sinuses\n\nKey findings:\n• Hyperdense = acute blood (50–80 HU)\n• Hypodense = infarct, edema, tumor\n• Loss of grey-white differentiation = early ischemic stroke\n• Midline shift >5 mm = significant mass effect\n\nTip: CTA added for vessel occlusion or aneurysm assessment in stroke.',
  },
  {
    keywords: ['subarachnoid hemorrhage', 'sah', 'subarachnoid bleed'],
    response: 'Subarachnoid Hemorrhage (SAH)\n\nCT (most sensitive acutely):\n• Hyperdense blood filling basal cisterns, sulci, fissures\n• Star sign — blood in all cisterns\n• Sensitivity: 98% within 12 hours; drops to ~85% at 24 hours\n\nCommon locations:\n• Aneurysm rupture: Basal cisterns, sylvian fissure\n• Perimesencephalic (non-aneurysmal): Around midbrain, benign prognosis\n• Trauma: Overlying contusions, subdural hematoma\n\nIf CT negative but SAH suspected: LP for xanthochromia (>12 hours post-bleed)\n\nCTA: Required to identify ruptured aneurysm for surgical planning\n\nWarning: "Worst headache of life" = SAH until proven otherwise.',
  },
  {
    keywords: ['subdural hematoma', 'sdh', 'subdural hemorrhage', 'subdural bleed'],
    response: 'Subdural Hematoma (SDH) — CT Appearance\n\nCrescent-shaped collection between brain surface and dura:\n• Acute (0–3 days): Hyperdense — bright, 50–80 HU\n• Subacute (3–21 days): Isodense — same as brain, may be missed\n• Chronic (>21 days): Hypodense — dark, <35 HU\n• Mixed (re-bleed): Mixed density\n\nKey features:\n• Crosses suture lines (unlike epidural hematoma)\n• Midline shift may be out of proportion to collection size\n• Bilateral isodense SDH in elderly — look for symmetric collections\n\nTip: FLAIR MRI is better for subacute SDH when CT is equivocal.',
  },
  {
    keywords: ['epidural hematoma', 'extradural', 'edh', 'epidural hemorrhage'],
    response: 'Epidural Hematoma (EDH) — CT\n\nBiconvex (lenticular) hyperdense collection between skull and dura:\n• Does NOT cross suture lines (dura is attached at sutures)\n• Usually from middle meningeal artery rupture\n• 85% associated with temporal or parietal skull fracture\n\nClassic presentation: Lucid interval → rapid deterioration\n\nCT: Hyperdense biconvex collection; swirl sign (active bleeding = mixed density)\n\nSurgical threshold:\n• Volume >30 mL, thickness >15 mm, midline shift >5 mm, GCS deterioration\n\nWarning: Neurosurgical emergency — rapid deterioration expected without surgery!',
  },
  {
    keywords: ['ct chest', 'chest ct', 'hrct', 'high resolution ct', 'ct pulmonary'],
    response: 'CT Chest — Key Applications\n\nHRCT (High-Resolution CT): 1–2 mm slices for interstitial lung disease\n\nPatterns in interstitial lung disease:\n• Ground-glass opacity (GGO): Hazy increased density — active inflammation\n• Crazy-paving: GGO + interlobular septal thickening — COVID-19, PAP\n• Honeycombing: Subpleural cystic spaces = UIP or IPF (irreversible fibrosis)\n• Tree-in-bud: Centrilobular nodules + branching = bronchiolitis or infection\n• Mosaic attenuation: Air trapping in small airway disease\n\nCTPA (CT Pulmonary Angiogram): Pulmonary embolism — filling defects in pulmonary arteries\n\nTip: Wells score predicts PE probability before ordering CTPA.',
  },
  {
    keywords: ['pulmonary embolism', 'ctpa', 'pulmonary angiogram', 'dvt'],
    response: 'Pulmonary Embolism (PE) — CTPA\n\nDiagnosis: Filling defect(s) in pulmonary arteries on CTPA\n• Saddle PE: Filling defect straddling main pulmonary artery bifurcation\n• Massive PE: Bilateral main pulmonary artery involvement\n• Peripheral PE: Sub-segmental filling defects\n\nSigns of right heart strain:\n• RV to LV ratio >1 (four-chamber view)\n• Interventricular septal bowing toward LV\n• Reflux of contrast into IVC or hepatic veins\n\nParenchymal changes: Wedge-shaped infarct (Hampton hump), mosaic attenuation\n\nWells Score: ≥5 = High probability (CTPA); 2–4 = Moderate; <2 = D-dimer first\n\nWarning: Massive PE with hemodynamic instability → thrombolysis!',
  },
  {
    keywords: ['ct abdomen', 'abdominal ct', 'ct pelvis', 'ct abdomen pelvis'],
    response: 'CT Abdomen and Pelvis — Systematic Review\n\nProtocol: Triphasic (non-contrast, arterial, portal venous) for liver; Routine CECT for general assessment\n\nSystematic approach:\n• Liver: Size, focal lesions, enhancement pattern\n• Gallbladder/Biliary: Stones (hyperdense), wall thickening, duct dilatation\n• Pancreas: Homogeneity, duct dilatation, peripancreatic fat stranding\n• Spleen: Size (>13 cm = splenomegaly), lesions, trauma laceration\n• Kidneys: Cortical thickness, stones, hydronephrosis\n• Bowel: Wall thickening, dilatation, free air/fluid, fat stranding\n• Vessels: Aorta diameter (>3 cm = AAA)\n• Retroperitoneum: Lymph nodes (>1 cm = enlarged)\n\nTip: Free air under diaphragm = viscus perforation (surgical emergency).',
  },
  {
    keywords: ['appendicitis', 'appendix ct', 'ct appendix'],
    response: 'Appendicitis — CT Findings\n\nKey CT features:\n• Appendix diameter >6 mm with wall thickening\n• Peri-appendiceal fat stranding (inflammation)\n• Appendicolith (calcified fecalith) — present in ~25%\n• Appendiceal wall enhancement on contrast\n• Periappendiceal free fluid\n\nComplications:\n• Perforation: Free air or fluid, phlegmon, or abscess\n• Plastron: Walled-off mass — conservative management possible\n\nAlvarado score: Clinical scoring tool (symptoms + labs) to guide CT ordering\n\nUltrasound first: In children and pregnant women (no radiation)\n\nTip: CT sensitivity 94–98%, specificity 95–99% for appendicitis.',
  },
  {
    keywords: ['renal stone', 'kidney stone', 'urolithiasis', 'nephrolithiasis', 'ureteric stone'],
    response: 'Renal and Ureteric Calculi — CT KUB\n\nNon-contrast CT KUB is gold standard for urolithiasis:\n• Sensitivity 96–100%, Specificity 92–100%\n• Stones appear hyperdense — even uric acid stones (unlike X-ray)\n\nCT features:\n• Hyperdense stone in renal pelvis, ureter, or bladder\n• Soft tissue rim sign — periureteric edema around stone\n• Hydronephrosis or hydroureter proximal to obstruction\n• Perinephric fat stranding (edema or inflammation)\n\nStone types (HU):\n• Uric acid: 200–450 HU (radiolucent on X-ray)\n• Calcium oxalate: 400–600 HU\n• Staghorn: Calcium struvite, fills renal pelvis\n\nManagement by size: <5 mm: 90% pass spontaneously; >10 mm: ESWL or ureteroscopy',
  },
  {
    keywords: ['aortic aneurysm', 'aaa', 'aortic dissection', 'aorta ct'],
    response: 'Aortic Pathology — CT\n\nAAA (Abdominal Aortic Aneurysm):\n• Normal aorta <3 cm; Aneurysm ≥3 cm\n• Surgical threshold: ≥5.5 cm (male), ≥5.0 cm (female)\n• Rupture: Retroperitoneal hematoma, contained vs. free rupture\n\nAortic Dissection (Stanford Classification):\n• Type A: Involves ascending aorta — surgical emergency!\n• Type B: Descending only — medical management (unless complicated)\n\nCT findings:\n• Intimal flap separating true lumen from false lumen\n• True lumen: Smaller, faster flow, calcification on lumen edge\n• False lumen: Larger, slower flow, may thrombose\n\nWarning: Type A dissection mortality 1–2% per hour without surgery!',
  },
  {
    keywords: ['ct stroke', 'ischemic stroke ct', 'ct infarct', 'stroke imaging', 'stroke ct'],
    response: 'Stroke — CT and MRI Imaging\n\nNon-Contrast CT (NCCT) — Acute Stroke:\n• Hyperacute (<6 hrs): May be normal or subtle hypodensity\n• Hyperdense MCA sign: Dense clot in middle cerebral artery\n• Loss of grey-white differentiation: Early ischemia\n• Insular ribbon sign: Loss of insular cortex definition\n• Established infarct (>6 hrs): Clear hypodensity in vascular territory\n\nMRI (most sensitive):\n• DWI: Bright within MINUTES of onset (gold standard for acute stroke)\n• DWI+/FLAIR- = <4.5 hours (thrombolysis window)\n\nCTA: Identify vessel occlusion for thrombectomy planning (LVO)\n\nCT Perfusion: Core (infarct) vs. Penumbra (salvageable tissue)',
  },
  {
    keywords: ['ct scan', 'computed tomography', 'cat scan', 'ct modality'],
    response: 'CT (Computed Tomography) — Overview\n\nCT uses X-rays with computer reconstruction to create cross-sectional images.\n\nHounsfield Units (HU):\n• Air: -1000 HU | Fat: -100 to -50 HU | Water: 0 HU\n• Soft tissue: 20–80 HU | Bone: 400–1000 HU\n• Acute blood: 50–80 HU | Calcification: 100–400 HU\n\nWindow settings:\n• Lung: W1500, L-600\n• Soft tissue: W400, L40\n• Bone: W2000, L400\n• Brain: W80, L40\n\nTip: CT is fast, widely available, and excellent for emergencies. Always review in multiple windows.',
  },

  // ── BRAIN TUMORS / MS ───────────────────────────────────
  {
    keywords: ['glioma', 'glioblastoma', 'gbm', 'brain tumor', 'brain tumour', 'cerebral tumor'],
    response: 'Brain Tumors — Imaging\n\nMRI is gold standard (with and without contrast):\n\nGlioblastoma (GBM — Grade IV):\n• T1: Heterogeneous, necrotic center (dark)\n• T1+Gad: Irregular ring enhancement (necrotic center)\n• T2/FLAIR: Extensive surrounding vasogenic edema\n• DWI: Restricted in tumor cell-dense areas\n• Crosses corpus callosum = "butterfly glioma"\n\nLower grade gliomas (Grade II–III):\n• T2/FLAIR: Homogeneous bright, less enhancement\n• Calcification: Oligodendroglioma (CT better)\n\nMeningioma:\n• Extra-axial (outside brain), T2 isointense, homogeneous enhancement\n• Dural tail sign, adjacent bone changes\n\nTip: MR spectroscopy and perfusion (rCBV) help grade tumors non-invasively.',
  },
  {
    keywords: ['multiple sclerosis', 'ms mri', 'demyelination', 'white matter lesion', 'dawson'],
    response: 'Multiple Sclerosis — MRI\n\nMcDonald criteria: Dissemination in time AND space\n\nTypical lesion locations:\n• Periventricular (perpendicular to ventricles = "Dawson fingers")\n• Juxtacortical (touching cortex)\n• Infratentorial (brainstem, cerebellum)\n• Spinal cord (short-segment, <2 vertebral levels, lateral or posterior)\n\nMRI findings:\n• T2/FLAIR: Hyperintense ovoid lesions\n• T1 black holes: Chronic irreversible demyelination\n• T1+Gad: Active lesions enhance (BBB opens during attack)\n• DWI: May show restriction in acute large plaques\n\nTip: Short-segment cord lesions (<half cord cross-section) typical of MS. Long-segment = suspect NMO/NMOSD.',
  },
  {
    keywords: ['pancreatitis', 'pancreas ct', 'acute pancreatitis'],
    response: 'Pancreatitis — CT Imaging\n\nCT performed 48–72 hours after onset for accurate staging:\n\nAcute pancreatitis findings:\n• Pancreatic enlargement and edema\n• Peripancreatic fat stranding\n• Fluid collections (acute peripancreatic fluid)\n• Necrosis: Non-enhancing pancreatic tissue on CECT\n\nCT Severity Index (Balthazar + necrosis scoring):\n• Grade A–B: Normal or minimal change (score 0–2)\n• Grade C–E: Increasing severity (score up to 10)\n• Necrosis: 0%, <30%, 30–50%, >50%\n\nComplications: Pseudocyst, walled-off necrosis (WON), abscess, vascular complications\n\nChronic pancreatitis: Duct dilatation, parenchymal atrophy, calcifications',
  },

  // ── AI / PACS / CONTRAST / REPORTING ───────────────────
  {
    keywords: ['ai confidence', 'confidence score', 'ai result', 'ai finding', 'ai annotation'],
    response: 'AI Confidence Scores — How to Interpret\n\nScore interpretation:\n• 90%+: High confidence — strong radiological finding; verify and document\n• 70–89%: Moderate confidence — review carefully; correlate with clinical history\n• 50–69%: Low confidence — possible finding; additional views may help\n• <50%: Uncertain — AI flagging something but low reliability\n\nKey principle: AI assists, never replaces clinical judgment!\n\nAlways:\n1. Correlate AI findings with patient symptoms and history\n2. Cross-reference with prior studies\n3. Apply your own systematic review independently\n4. Seek peer review for critical or uncertain findings\n\nTip: High AI confidence + consistent clinical picture = high yield finding to act on.',
  },
  {
    keywords: ['dicom', 'pacs', 'dicom viewer', 'pacs system', 'worklist'],
    response: 'DICOM and PACS — Best Practices\n\nDICOM (Digital Imaging and Communications in Medicine):\n• Universal standard for medical imaging storage and transmission\n• Contains pixel data and metadata (patient info, acquisition parameters, dose)\n\nWindow/Level settings:\n• Brain: W80/L40 | Lung: W1500/L-600\n• Soft tissue: W400/L40 | Bone: W2000/L400\n• Liver: W160/L60 | Stroke (SDH): W200/L75\n\nPACS best practices:\n• Always verify patient ID and DOB before reporting\n• Review all series and sequences in a study\n• Use MPR (multiplanar reconstruction) for 3D assessment\n• Compare with prior studies for interval change\n• Finalize and lock reports promptly\n\nTip: PACS integration with AI tools accelerates workflow and reduces missed findings.',
  },
  {
    keywords: ['radiation dose', 'radiation safety', 'alara', 'dose reduction', 'radiation protection'],
    response: 'Radiation Safety in Medical Imaging\n\nALARA Principle: As Low As Reasonably Achievable\n\n3 pillars of radiation protection:\n• Justify: Benefit must outweigh risk for every scan\n• Optimize: Minimize dose while achieving diagnostic quality\n• Limit: No unnecessary examinations\n\nApproximate effective doses:\n• CXR: 0.02 mSv | Lateral CXR: 0.04 mSv\n• CT Head: 2 mSv | CT Chest: 7 mSv | CT Abdomen: 8 mSv\n• Background radiation: ~2.5 mSv per year\n\nDose reduction techniques:\n• Automatic exposure control (AEC)\n• Iterative reconstruction (IR) algorithms\n• Reduced kVp for contrast studies\n\nTip: MRI and ultrasound for children and pregnant women — no ionizing radiation!',
  },
  {
    keywords: ['iodinated contrast', 'contrast reaction', 'contrast allergy', 'iv contrast', 'contrast media'],
    response: 'Iodinated Contrast Media — CT\n\nTypes: Low-osmolality non-ionic (preferred); High-osmolality ionic (avoid)\n\nContraindications and Precautions:\n• Previous severe reaction → premedication or avoid contrast\n• eGFR <30 → risk of contrast-induced nephropathy (CIN)\n• Metformin → hold 48h post-contrast if eGFR <60\n• Thyroid disease → may affect thyroid function\n• Pregnancy → use only if essential\n\nReaction classification:\n• Mild: Nausea, urticaria, flushing → monitor\n• Moderate: Bronchospasm, angioedema → treat\n• Severe (anaphylaxis): Hypotension, cardiac arrest → emergency response\n\nPre-medication for high-risk patients:\nPrednisolone 50mg at 13h, 7h, and 1h before contrast\n\nTip: Hydration before and after contrast reduces CIN risk.',
  },
  {
    keywords: ['report writing', 'radiology report', 'structured report', 'dictation'],
    response: 'Radiology Report Writing — Structure\n\nStandard structured report sections:\n1. Patient/Exam Info: Name, DOB, study date, referring clinician, indication\n2. Technique: Modality, protocol, contrast use, views obtained\n3. Comparison: Prior studies referenced\n4. Findings: Systematic, organ-by-organ description with measurements\n5. Impression: Concise summary; numbered list if multiple findings\n6. Recommendations: Follow-up imaging, urgency, clinical correlation\n\nCommunication of critical findings:\n• Immediate verbal communication to referring clinician\n• Document time and person notified in report\n• Critical findings: PE, pneumothorax, stroke, hemorrhage, malignancy\n\nTip: Clear, actionable impressions improve patient outcomes and reduce clinical errors.',
  },
  {
    keywords: ['mri vs ct', 'ct vs mri', 'which modality', 'when to use mri', 'when to use ct'],
    response: 'CT vs. MRI — When to Use Which?\n\nCT advantages: Fast (seconds), excellent for bone, lung, vascular, emergencies, widely available\nCT disadvantages: Ionizing radiation, limited soft tissue contrast\n\nMRI advantages: No radiation, superior soft tissue contrast, multiplanar, functional imaging\nMRI disadvantages: Slow (20–60 min), claustrophobia, metallic contraindications, costly\n\nChoose CT for: Emergency (trauma, stroke, PE), Lung, Bone, Chest, Vascular\nChoose MRI for: Brain tumors, MS, Spine, Joints, Liver, Prostate, Pelvis\n\nPregnancy: MRI preferred (no radiation); CT only if essential\nChildren: MRI or US preferred to minimize radiation\n\nTip: Ultrasound first for gallbladder, appendix (children), and obstetrics.',
  },
  {
    keywords: ['ultrasound', 'sonography', 'usg', 'echo', 'duplex'],
    response: 'Ultrasound — Overview\n\nAdvantages: No radiation, real-time, portable, inexpensive, guided procedures\nLimitations: Operator-dependent, limited by gas or bone, body habitus\n\nKey applications:\n• Abdomen: Gallstones, liver lesions, kidney, aorta screening\n• Obstetric: Fetal development, placenta, amniotic fluid\n• Vascular: DVT (compression ultrasound), carotid, ABPI\n• Emergency FAST: Free fluid in trauma\n• Breast: Cyst vs. solid lesion characterization\n• MSK: Tendons, soft tissue masses, joint effusions\n\nArtifacts to know:\n• Posterior acoustic shadowing: Stone or calcium\n• Posterior acoustic enhancement: Fluid or cyst\n• Reverberation: Air interface\n\nTip: eFAST + cardiac echo at bedside for rapid decision-making in shock.',
  },

  // ── META / GREETINGS ────────────────────────────────────
  {
    keywords: ['hello', 'hi there', 'hey there', 'good morning', 'good afternoon', 'good evening'],
    response: 'Hello! I am your Smart PACS AI Medical Imaging Assistant, specialized in radiology and medical imaging.\n\nI can help you with:\n• X-Ray — Chest, Abdomen, Bones, Skull, Spine\n• MRI — Brain, Spine, Joints, Liver, Prostate, Sequences\n• CT Scan — Head, Chest, Abdomen, Vascular, Stroke\n• AI Interpretation — Confidence scores, PACS best practices\n• Reporting — Structured reporting, critical findings communication\n\nAsk me any medical imaging question and I will give you a clear explanation!',
  },
  {
    keywords: ['hi', 'hello'],
    response: 'Hello! I am your Smart PACS AI Medical Imaging Assistant.\n\nI am fully trained in:\n• X-Ray interpretation (Chest, Bones, Abdomen, Spine)\n• MRI sequences and findings (Brain, Spine, Joints, Abdomen)\n• CT scan interpretation (Head, Chest, Abdomen, Vascular)\n• PACS, DICOM, AI confidence scores\n• Radiology reporting and clinical best practices\n\nWhat medical imaging topic can I help you with today?',
  },
  {
    keywords: ['thank', 'thanks', 'thank you', 'great', 'helpful', 'awesome', 'excellent'],
    response: 'You are very welcome! Keep up the excellent clinical work.\n\nFeel free to ask me anything else about medical imaging, PACS workflows, or AI interpretation anytime.\n\nRemember: AI assists, you decide. Your clinical judgment is always the final word in patient care!',
  },
  {
    keywords: ['help', 'what can you do', 'capabilities', 'what do you know', 'topics', 'what can you help'],
    response: 'What I Can Help You With:\n\nX-Ray Topics:\nChest X-ray, pneumonia, pneumothorax, pleural effusion, pulmonary edema, lung nodule, fractures, abdominal X-ray, spine X-ray\n\nMRI Topics:\nSequences (T1/T2/FLAIR/DWI), brain MRI, spine MRI, knee and shoulder MRI, liver MRI, prostate MRI, gadolinium contrast\n\nCT Topics:\nCT head, chest CT, abdomen CT, stroke CT, hemorrhage (SDH/EDH/SAH), PE (CTPA), aortic pathology, renal stones\n\nPACS and AI:\nDICOM, window settings, AI confidence scores, radiation safety, contrast media, report writing\n\nType any question about these topics and I will explain it clearly!',
  },
];

// ── Helpers ──────────────────────────────────────────────────
const MEDICAL_TERMS = [
  'x-ray', 'xray', 'radiograph', 'plain film', 'cxr',
  'mri', 'magnetic resonance', 'flair', 'dwi', 'adc', 't1', 't2', 'gadolinium',
  'ct scan', 'computed tomography', 'hounsfield', 'hrct', 'ctpa',
  'dicom', 'pacs', 'radiology', 'imaging', 'scan', 'ultrasound', 'sonography',
  'contrast', 'enhancement', 'window', 'attenuation',
  'pneumonia', 'pneumothorax', 'effusion', 'consolidation', 'edema', 'opacity',
  'fracture', 'nodule', 'mass', 'lesion', 'tumor', 'tumour', 'cancer',
  'infarct', 'stroke', 'hemorrhage', 'hematoma', 'bleed', 'aneurysm',
  'liver', 'kidney', 'spleen', 'pancreas', 'aorta', 'appendix', 'bowel', 'colon',
  'brain', 'spine', 'disc', 'cord', 'vessel', 'artery', 'vein',
  'lung', 'chest', 'cardiac', 'heart', 'diaphragm', 'pleura',
  'hip', 'knee', 'shoulder', 'wrist', 'ankle', 'joint', 'cartilage', 'ligament',
  'meniscus', 'acl', 'pcl', 'rotator cuff', 'tendon',
  'prostate', 'uterus', 'ovary', 'pelvis', 'bladder',
  'report', 'finding', 'impression', 'protocol', 'sequence',
  'radiation', 'dose', 'alara', 'view', 'projection', 'slice',
  'diagnosis', 'pathology', 'anatomy',
  'confidence', 'annotation', 'worklist', 'ai',
  'tip', 'advice', 'best practice', 'review', 'interpret', 'read',
  'hello', 'hi', 'hey', 'help', 'thank',
];

function isMedicalRelated(msg: string): boolean {
  const lower = msg.toLowerCase();
  return MEDICAL_TERMS.some(term => lower.includes(term));
}

function getBotResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase();
  for (const entry of knowledgeBase) {
    if (entry.keywords.some(kw => lower.includes(kw))) {
      return entry.response;
    }
  }
  if (isMedicalRelated(lower)) {
    return 'Great question! While I may not have a specific protocol for that exact topic, here is a general principle:\n\nClinical Approach:\n• Use a systematic review method for any imaging modality\n• Correlate imaging findings with the patient clinical history\n• Compare with prior studies when available\n• Apply appropriate window or level settings for the anatomy\n• Escalate critical or uncertain findings to senior colleagues\n\nCould you be more specific? For example:\n• Modality: X-ray, CT, MRI, or Ultrasound\n• Body region: brain, chest, abdomen, musculoskeletal\n• Clinical question: diagnosis, staging, or follow-up\n\nI will give you a more targeted answer!';
  }
  const preview = userMessage.length > 55 ? userMessage.slice(0, 55) + '...' : userMessage;
  return `This assistant is specialized for Medical Imaging only.\n\nYour question "${preview}" does not appear to be related to medical imaging.\n\nI am designed to answer questions about:\n• X-Ray — chest, bones, abdomen, skull, spine\n• MRI — brain, spine, joints, abdomen, sequences\n• CT Scan — head, chest, abdomen, vascular\n• PACS and DICOM and AI interpretation\n• Radiology reporting and clinical best practices\n\nPlease ask a radiology or medical imaging question and I will be happy to help!`;
}

// ── Message Renderer ─────────────────────────────────────────
function MessageText({ text, isUser }: { text: string; isUser: boolean }) {
  const lines = text.split('\n');
  return (
    <div className="text-sm space-y-0.5">
      {lines.map((line, i) => {
        if (!line.trim()) {
          return <div key={i} className="h-1" />;
        }
        const isBullet = line.startsWith('•') || line.startsWith('-');
        return (
          <p
            key={i}
            className={`leading-relaxed ${isBullet ? 'pl-1' : ''} ${
              isUser ? 'text-white' : 'text-gray-800'
            }`}
          >
            {line}
          </p>
        );
      })}
    </div>
  );
}

// ── Quick Access Chips ───────────────────────────────────────
const quickQuestions = [
  { label: 'Chest X-Ray guide', text: 'How do I read a chest X-ray?' },
  { label: 'Brain MRI sequences', text: 'What MRI sequences are used for brain imaging?' },
  { label: 'CT head findings', text: 'How do I interpret a CT head scan?' },
  { label: 'AI confidence scores', text: 'How do I interpret AI confidence scores?' },
  { label: 'Fracture on X-ray', text: 'How do I assess a fracture on X-ray?' },
  { label: 'CT stroke imaging', text: 'How does CT help in diagnosing stroke?' },
];

const topicChips = ['X-Ray', 'MRI', 'CT Scan', 'PACS/DICOM', 'AI Results', 'Reports'];

// ── Main Component ───────────────────────────────────────────
export default function ChatbotTips() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! I am your Smart PACS AI Medical Imaging Assistant, fully trained on radiology and clinical imaging.\n\nI can answer detailed questions about:\n• X-Ray — Chest, Bones, Abdomen, Skull, Spine\n• MRI — Brain, Spine, Joints, Abdomen, Sequences (T1/T2/DWI/FLAIR)\n• CT Scan — Head, Chest, Abdomen, Stroke, Vascular\n• PACS and DICOM and AI interpretation\n• Radiology Reporting and Best Practices\n\nAsk me any medical imaging question!',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: Date.now(),
      text: trimmed,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setShowQuick(false);
    setIsTyping(true);

    const delay = 800 + Math.random() * 500;
    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: getBotResponse(trimmed),
        sender: 'bot',
        timestamp: new Date(),
      };
      setIsTyping(false);
      setMessages(prev => [...prev, botMsg]);
    }, delay);
  };

  const handleSend = () => sendMessage(inputText);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">

      {/* ── HEADER ── */}
      <div className="flex-shrink-0 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 px-5 pt-5 pb-4 shadow-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/home')}
            className="p-2 hover:bg-white/15 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="bg-white/20 p-2 rounded-xl">
            <AILogo className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h1 className="text-white">AI Medical Imaging Assistant</h1>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              <p className="text-blue-100 text-xs">X-Ray · MRI · CT · PACS</p>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="bg-white/15 p-1.5 rounded-lg">
              <Brain className="w-3.5 h-3.5 text-white/80" />
            </div>
            <div className="bg-white/15 p-1.5 rounded-lg">
              <Activity className="w-3.5 h-3.5 text-white/80" />
            </div>
            <div className="bg-white/15 p-1.5 rounded-lg">
              <Stethoscope className="w-3.5 h-3.5 text-white/80" />
            </div>
          </div>
        </div>

        {/* Topic chips */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-0.5">
          {topicChips.map(topic => (
            <button
              key={topic}
              onClick={() => sendMessage('Tell me about ' + topic + ' in medical imaging')}
              className="flex-shrink-0 bg-white/20 hover:bg-white/30 text-white text-xs px-3 py-1 rounded-full transition-colors border border-white/20"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* ── MESSAGES ── */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div
              className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-sm ${
                message.sender === 'bot'
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-600'
                  : 'bg-gradient-to-br from-gray-400 to-gray-500'
              }`}
            >
              {message.sender === 'bot' ? (
                <AILogo className="w-5 h-5" />
              ) : (
                <User className="w-4 h-4 text-white" />
              )}
            </div>
            <div
              className={`flex-1 max-w-[82%] flex flex-col ${
                message.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`rounded-2xl px-4 py-3 shadow-sm ${
                  message.sender === 'bot'
                    ? 'bg-white border border-gray-100 rounded-tl-sm'
                    : 'bg-gradient-to-br from-blue-600 to-blue-700 rounded-tr-sm'
                }`}
              >
                <MessageText text={message.text} isUser={message.sender === 'user'} />
              </div>
              <span className="text-xs text-gray-400 mt-1 px-2">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-sm flex-shrink-0">
              <AILogo className="w-5 h-5" />
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
              <div className="flex gap-1 items-center h-4">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* ── QUICK QUESTIONS ── */}
      {showQuick && (
        <div className="flex-shrink-0 px-4 pb-2">
          <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-500" />
            Quick questions to get started:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(q.text)}
                className="bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl px-3 py-2 text-xs text-gray-700 transition-all text-left flex items-center justify-between gap-1 group shadow-sm"
              >
                <span>{q.label}</span>
                <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-blue-500 flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── INPUT ── */}
      <div className="flex-shrink-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about X-Ray, MRI, CT scan..."
              className="w-full bg-gray-100 rounded-2xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm transition-all"
            />
            <BookOpen className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <button
            onClick={handleSend}
            disabled={!inputText.trim() || isTyping}
            className={`p-3 rounded-2xl transition-all ${
              inputText.trim() && !isTyping
                ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg active:scale-95'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">
          Specialized in X-Ray · MRI · CT · PACS · AI Imaging
        </p>
      </div>
    </div>
  );
}
