export type SourceStatus = "valid" | "invalid/outdated" | "caveat/updated" | "source-derived";
export type DrillCategory = "core" | "numbers" | "pharma" | "traps" | "signs_scores" | "source";

export type Flashcard = {
  id: number;
  front: string;
  back: string;
  status: SourceStatus;
  category?: DrillCategory;
  topic?: string;
  sourceAtomId?: string;
};

export const flashcards: Flashcard[] = [
  {
    "id": 1,
    "front": "What drug is used for the treatment of juvenile idiopathic arthritis?",
    "back": "Answer: D: methotrexate Explanation: JIA: methotrexate is a conventional disease-modifying drug for persistent/moderate inflammatory arthritis; NSAIDs alone are symptomatic therapy.",
    "status": "valid"
  },
  {
    "id": 2,
    "front": "Which of the following concerning Carney syndrome is FALSE ?",
    "back": "Answer: C: occurs after puberty, most often in men Explanation: Carney complex is autosomal dominant, usually due to an inactivating PRKAR1A mutation. PPNAD can cause cyclical/subclinical Cushing syndrome and a paradoxical cortisol rise on prolonged dexamethasone testing. The false claim is that it occurs only after puberty and mostly in men.",
    "status": "caveat/updated"
  },
  {
    "id": 3,
    "front": "Congenital metabolic disorders should be considered when there is an episode of:",
    "back": "Answer: D: A,B,C are true Explanation: Think inborn error when an otherwise unexplained neonate/child has hydrops, a Reye-like episode, seizures, or apnoea without infection. Metabolic disease can decompensate abruptly after feeding or catabolic stress.",
    "status": "valid"
  },
  {
    "id": 4,
    "front": "WHICH OF THE FOLLOWING IS NOT a typical symptom of the early phase of Streptococcus agalactiae infection in neonates?",
    "back": "Answer: C: osteitis Explanation: Early-onset group B streptococcal disease is classically sepsis/pneumonia with respiratory distress, pulmonary hypertension or shock; osteitis is a focal late-onset manifestation, not a typical early feature.",
    "status": "valid"
  },
  {
    "id": 5,
    "front": "Which of the following clinical problems may indicate primary immunodeficiency? 1) six acute otitis media in a child 4 years of age during a year; 2) seven mild episodes of pharyngitis during a year in a 3-year-old child attending kindergarten; 3) purulent inflammation of the hip joint caused by Staphylococcus aureus in a 5-year- old child and extensive liver abscess of the same etiology at 9 years of age; 4) childhood tuberculosis in a mother, BCGitis in her son; 5) a 7-year-old unvaccinated against pneumococci boy underwent invasive pneumococcal disease; the boy had no problematic disease…",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The PDF truncates statement 6, yet every answer combination depends on it. The legacy key therefore cannot be independently reconstructed from the source. Explanation: SOURCE TRUNCATION: statement 6 is missing from the PDF, so the keyed combination cannot be independently reconstructed. PID red flags include recurrent severe infections, deep abscesses, unusual organisms, BCGitis, poor response to antibiotics and a suggestive family history. 2026 GUIDELINE NOTE (ESID): the current ESID / Jeffrey Modell warning-sign list uses ≥ 4 NEW EAR INFECTIONS IN 1 YEAR as a paediatric red flag, so statement 1 (six acute otitis media in a year) does count as a warning sign. Older literature sometimes used ≥ 8 per year — know both numbers. Because any valid combination must therefore include statement 1, option D (2,3,4,5) is the one you can rule out; statement 6 is still truncated in the source, so the full key remains unreconstructable. Warning signs are a prompt to investigate, not a diagnosis. Other ESID signs: ≥ 2 serious sinus infections/yr; ≥ 2 months of antibiotics with little effect; ≥ 2 pneumonias/yr; failure to thrive; recurrent deep skin/organ abscesses; persistent oral thrush; need for IV antibiotics to clear infections; ≥ 2 deep-seated infections incl. septicaemia; family history of PID. Sources: ESID Clinical Working Party resources; Immunodeficiency UK; PMC3245434.",
    "status": "invalid/outdated"
  },
  {
    "id": 6,
    "front": "In a patient with the symptoms of acute urticaria with no allergy in anamnesis, it is necessary to order:",
    "back": "Answer: E: none of the above Caveat: Legacy D requires routine CBC/CRP + skin-prick + physical provocation testing for uncomplicated acute urticaria. Modern acute urticaria is usually diagnosed clinically; testing is targeted to history or persistent/atypical disease, so E is the best offered answer. Explanation: Modern acute urticaria is usually a clinical diagnosis. In uncomplicated acute spontaneous urticaria, routine CBC/CRP, skin-prick testing and physical-provocation testing are not automatically required.",
    "status": "caveat/updated"
  },
  {
    "id": 7,
    "front": "What are the typical features of pseudohypoparathyroidism?",
    "back": "Answer: B: low serum calcium and high serum phosphate concentrations Explanation: Pseudohypoparathyroidism = PTH resistance: low Ca, high phosphate, high PTH. Albright hereditary osteodystrophy can include shortened 4th/5th metacarpals.",
    "status": "valid"
  },
  {
    "id": 8,
    "front": "Indicate FALSE sentences concerning vesico-ureteral reflux (VUR): 1) diagnosis is based on voiding cystourethrography; 2) we identify five grades of VUR; 3) only grade I primary VUR is treated conservatively; 4) refluxes with ureteral distension are treated surgically; 5) grade I, II, III VUR are treated conservatively",
    "back": "Answer: B: 3,4 Caveat: Legacy A treats statement 4 as true. Ureteral dilatation/high-grade VUR does not automatically mandate surgery; management is risk-based. Statements 3 and 4 are the false pair, making B the defensible option. Explanation: VUR has five grades on VCUG. Low-grade reflux is usually managed conservatively; ureteral dilatation alone does not mandate surgery. Surgery is individualized for persistent high-grade disease, breakthrough febrile UTIs, renal damage and other risk factors.",
    "status": "caveat/updated"
  },
  {
    "id": 9,
    "front": "A type of monogenic diabetes characterized by autosomal dominant inheritance and constantly elevated fasting glycemia which generally DOES NOT require pharmacological treatment is:",
    "back": "Answer: C: MODY2 diabetes Explanation: MODY2 (GCK-MODY) causes mild, stable fasting hyperglycaemia, autosomal-dominant inheritance and usually no pharmacologic treatment outside pregnancy-specific situations.",
    "status": "valid"
  },
  {
    "id": 10,
    "front": "In children fever and small itchy blisters that form crusts within 7 days are the symptoms of:",
    "back": "Answer: D: chickenpox Explanation: Chickenpox: fever + crops of intensely pruritic vesicles that crust over. Lesions in different stages at the same time are a classic clue.",
    "status": "valid"
  },
  {
    "id": 11,
    "front": "A patient with measles is contagious for:",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The offered intervals use 5- or 7-day windows. Current measles infectiousness is 4 days before through 4 days after rash onset, so none of the options is exactly current. Explanation: OUTDATED OPTIONS: measles is considered infectious from 4 days before through 4 days after rash onset (rash day = day 0). None of the offered intervals matches current guidance.",
    "status": "invalid/outdated"
  },
  {
    "id": 12,
    "front": "Which of the following should be performed in a male neonate in whom prolonged bleeding from the heel occurs after taking blood drop for screening tests and a hematoma develops after intramuscular administration of vitamin K? 1) examination of the clotting system in order to exclude coagulopathy, e.g. hemophilia; 2) intravenous administration of vitamin K; 3) administration of fresh frozen plasma; 4) taking family history in relation to hemophilia or other coagulopathies occurring in family members; 5) there is no need for further diagnostics",
    "back": "Answer: B: 1,4 Caveat: Legacy A adds empiric IV vitamin K and FFP as universal steps. In a male neonate bleeding despite prophylactic vitamin K, the key first diagnostic actions are coagulation testing and a haemophilia/family history; replacement therapy depends on the demonstrated defect and bleeding severity. Explanation: Prolonged bleeding after heel stick/IM vitamin K in a male neonate should trigger a coagulation work-up and family history for haemophilia; vitamin K is not the treatment for factor VIII/IX deficiency.",
    "status": "caveat/updated"
  },
  {
    "id": 13,
    "front": "What is the optimal procedure after the contact of a pregnant woman in the third trimester with a child, who was diagnosed on the day of the contact (upon clinical course, typical skin manifestations) with erythema infectiosum (the fifth disease)? The child is ( EXCEPT for erythema) generally healthy, has no comorbidities",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The child with fifth disease is most infectious before the rash, so isolating the pregnant contact after rash recognition is not the key intervention. Current management after confirmed exposure is maternal B19 IgG/IgM testing, with fetal surveillance if recent infection is documented; no option states that cleanly. Explanation: CURRENT APPROACH: do not rely on isolating a pregnant contact after the child develops erythema infectiosum, because infectivity precedes the rash. After confirmed exposure, maternal parvovirus B19 IgG/IgM testing should be considered; recent maternal infection warrants fetal surveillance for anaemia/hydrops.",
    "status": "invalid/outdated"
  },
  {
    "id": 14,
    "front": "The incidence of allergic diseases is continuously growing. The basic diagnostic tool for them is:",
    "back": "Answer: D: skin prick test Explanation: Skin-prick testing is a core tool for IgE-mediated allergy assessment when the history suggests an allergic trigger; test results must be interpreted in clinical context.",
    "status": "valid"
  },
  {
    "id": 15,
    "front": "A positive direct Coombs test in a patient diagnosed with haemolysis suggests: 1) ABO haemolytic disease of the newborn; 2) Rh D haemolytic disease of the newborn; 3) hemoglobinopathy; 4) atypical haemolytic-uremic syndrome; 5) spherocytosis",
    "back": "Answer: A: 1,2 Explanation: A positive direct antiglobulin (Coombs) test supports immune haemolysis, classically ABO or Rh haemolytic disease of the newborn; hereditary spherocytosis and haemoglobinopathies are Coombs-negative.",
    "status": "valid"
  },
  {
    "id": 16,
    "front": "Craniotabes (softening and thinning of occipital and parietal bones) may be observed in the following disorders, EXCEPT for:",
    "back": "Answer: D: Ehlers-Danlos syndrome Explanation: Craniotabes can occur with metabolic bone disease or skeletal fragility. Ehlers-Danlos syndrome is not a classic cause.",
    "status": "caveat/updated"
  },
  {
    "id": 17,
    "front": "Indicate the FALSE statement concerning respiratory function tests in children:",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The item mixes an old adult bronchodilator-response threshold (12% + 200 mL) with paediatric spirometry feasibility. More than one statement becomes problematic under current paediatric interpretation, so a single false choice is unsafe. Explanation: OUTDATED/MULTIPLE-ISSUE ITEM: spirometry is generally feasible from about age 5-6 when the child can perform acceptable manoeuvres. In children, bronchodilator responsiveness is interpreted using age-appropriate criteria; the adult “12% AND 200 mL” rule should not be transplanted unchanged.",
    "status": "invalid/outdated"
  },
  {
    "id": 18,
    "front": "The symptoms of cystic fibrosis include:",
    "back": "Answer: E: all of the above Explanation: Cystic fibrosis combines chronic/recurrent sinopulmonary disease, pancreatic insufficiency with steatorrhoea, chronic cough and poor weight gain.",
    "status": "caveat/updated"
  },
  {
    "id": 19,
    "front": "A palpable tumor visible on the neonate’s head over the left parietal bone is most probably caused by:",
    "back": "Answer: B: cephalohematoma Explanation: Cephalohaematoma is subperiosteal blood: it is firm/palpable over a skull bone and does NOT cross suture lines. Caput succedaneum is superficial oedema and can cross sutures.",
    "status": "caveat/updated"
  },
  {
    "id": 20,
    "front": "Hepatitis A (anti-HAV IgM) IgM antibodies in children:",
    "back": "Answer: B: appear 18 to 40 days after infection and persist for 4-6 months Explanation: Anti-HAV IgM appears around symptom onset after the incubation period and generally persists for several months; the 18-40 day appearance window with persistence for roughly 4-6 months best fits the offered choices.",
    "status": "caveat/updated"
  },
  {
    "id": 21,
    "front": "In a 7-year-old child, suffering from asthma treated with inhaled glucocorticoids, after a trip to the woods the aggravation of the disease occurred in the form of increasing dyspnea, cough and wheezing. The parents administered an additional dose of short- acting β -mimetic. The next step in this situation should be:",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The legacy choice “double the inhaled steroid” is not a universal next step for an acute exacerbation. Current care is severity/response based with repeated reliever therapy, oxygen when hypoxaemic and systemic corticosteroid for significant attacks; the offered options do not map cleanly. Explanation: OUTDATED ACUTE-ASTHMA OPTIONS: after reliever treatment, assess severity and response, give repeated inhaled bronchodilator as needed, oxygen for hypoxaemia and systemic corticosteroid for a significant exacerbation. Do not simply “double the ICS” as the universal next step.",
    "status": "invalid/outdated"
  },
  {
    "id": 22,
    "front": "When, after streptococcal infection, do the symptoms of rheumatic fever appear?",
    "back": "Answer: C: 3-4 weeks after the infection is over Explanation: Acute rheumatic fever usually begins about 2-4 weeks after group A streptococcal pharyngitis.",
    "status": "caveat/updated"
  },
  {
    "id": 23,
    "front": "The symptoms of asthma in children are:",
    "back": "Answer: E: all of the above Explanation: Typical asthma symptoms include variable wheeze, cough, expiratory dyspnoea/shortness of breath and chest tightness.",
    "status": "caveat/updated"
  },
  {
    "id": 24,
    "front": "Beckwith-Wiedemann syndrome is associated with an increased risk of developing:",
    "back": "Answer: C: Wilms tumor and hepatoblastoma Explanation: Beckwith-Wiedemann syndrome increases the risk of embryonal tumours, especially Wilms tumour and hepatoblastoma.",
    "status": "caveat/updated"
  },
  {
    "id": 25,
    "front": "Meningitis in children is a life-threatening condition, therefore, in the case of bacterial etiology, antibiotic therapy must be implemented as soon as possible; optimally after collecting materials for microbiological examination (CSF, blood, other materials). The maximum time to administer antibiotic is: 1) up to 3 hours from the patient's first contact with medical care; 2) up to 1 hour if the patient is in the hospital ward; 3) to 30 minutes if the patient is in the hospital ward and meningococcal etiology is suspected",
    "back": "Answer: E: only 2 Caveat: Legacy A accepts a 3-hour ceiling and a special 30-minute meningococcal ceiling. Current guidance uses a single hospital priority: IV antibiotics as soon as bacterial meningitis is suspected and within 1 hour of arrival. Thus only statement 2 is current -> E. Explanation: Suspected bacterial meningitis is an emergency. Current hospital guidance is IV antibiotics as soon as suspected and within 1 hour of arrival; blood samples and LP come first only if safe and they do not cause a clinically significant delay.",
    "status": "caveat/updated"
  },
  {
    "id": 26,
    "front": "The complications of ketoacidosis include: 1) cerebral edema; 2) anuria; 3) acute pancreatitis; 4) gastrointestinal bleeding; 5) hypovolemic shock",
    "back": "Answer: E: all the above Caveat: Legacy A includes only cerebral oedema and anuria. Paediatric DKA may also be complicated by pancreatitis, gastrointestinal bleeding and hypovolaemic shock, so the complete offered set is E. Explanation: DKA complications can include cerebral oedema, kidney injury/oliguria, pancreatitis, GI bleeding and hypovolaemic shock. Cerebral injury is the feared paediatric complication.",
    "status": "caveat/updated"
  },
  {
    "id": 27,
    "front": "Which of the following are observed in the course of iron deficiency anemia? 1) decreased total iron binding capacity; 2) decreased mean corpuscular hemoglobin concentration; 3) decreased percentage of the erythroblastic cells in marrow; 4) red cell poikilocytosis; 5) megaloblastic erythropoiesis in marrow",
    "back": "Answer: C: 2,4 Caveat: Legacy A incorrectly includes megaloblastic erythropoiesis. Iron deficiency is microcytic/hypochromic with poikilocytosis; TIBC is increased, not decreased, and marrow is not megaloblastic. True statements are 2 and 4 -> C. Explanation: Iron deficiency anaemia is microcytic/hypochromic: low MCH/MCHC and anisopoikilocytosis. TIBC rises (not falls) and marrow is not megaloblastic.",
    "status": "caveat/updated"
  },
  {
    "id": 28,
    "front": "In a 12-year-old patient with type 1 diabetes mellitus, treated with a personal insulin pump, hypoglycaemia occurs. It could be caused by: 1) overdose of long-acting insulin; 2) taking too high bolus dose at a meal; 3) eating less food than planned; 4) additional physical activity",
    "back": "Answer: B: 2,3,4 Caveat: Legacy A assumes long-acting insulin is being used in a pump. Pumps deliver rapid-acting insulin; excessive bolus, eating less than planned and extra exercise can all cause hypoglycaemia -> B. Explanation: An insulin pump uses rapid-acting insulin; hypoglycaemia can follow an excessive meal bolus, eating less than planned or unexpected exercise - not an overdose of long-acting insulin that is not being used.",
    "status": "caveat/updated"
  },
  {
    "id": 29,
    "front": "A 12-year-old girl was admitted to the ward because of an acute paroxysmal abdominal pain located in the epigastrium and the right subcostal region, radiating to the right side, that appeared the previous morning. The laboratory test showed: ALT 278 U/L, AST 47 U/L, GGTP 178 IU/L, lipase 167 IU/L, amylase 248 mg%, direct bilirubin 2.06 mg%, indirect bilirubin 1.02 mg%. The most probable diagnosis is:",
    "back": "Answer: B: gallstones Explanation: RUQ/epigastric colic with cholestatic enzymes and direct hyperbilirubinaemia points to gallstone/biliary disease.",
    "status": "caveat/updated"
  },
  {
    "id": 30,
    "front": "Which antipyretic may be given to a 2-month-old child?",
    "back": "Answer: D: 0.75 mL of paracetamol suspension (100 mg/1 mL), i.e. 15 mg/kg/dose Explanation: At 2 months, paracetamol can be used at an age/weight-appropriate dose. Ibuprofen is generally avoided in infants under 3 months unless specifically directed. Q31-Q60",
    "status": "caveat/updated"
  },
  {
    "id": 31,
    "front": "The most common causes of lower gastrointestinal tract bleeding in infants are: 1) Schoenlein-Henoch disease; 2) anal fistula; 3) food allergy; 4) inflammatory bowel diseases; 5) intussusception",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The source omits option A and uses “anal fistula” where an anal fissure is the usual infant bleeding diagnosis. Because the answer set cannot be reconstructed reliably, do not memorize the legacy key. Explanation: SOURCE LAYOUT ERROR: option A is missing and the stem says “anal fistula,” likely where “anal fissure” was intended. In infants, common lower-GI bleeding causes include anal fissure and cow-milk-protein allergic proctocolitis; intussusception is an important acute cause.",
    "status": "invalid/outdated"
  },
  {
    "id": 32,
    "front": "Polyuria with hypostenuria is typical of:",
    "back": "Answer: D: diabetes insipidus Explanation: Exam anchor: diabetes insipidus. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 33,
    "front": "A GP diagnosed pertussis in a mother of a 3-week-old neonate. What is the correct management in this case?",
    "back": "Answer: B: child should be given azithromycin for 5 days Explanation: Pertussis is treated and close-contact prophylaxis is given with a macrolide, commonly azithromycin; young infants are at highest risk of severe disease.",
    "status": "valid"
  },
  {
    "id": 34,
    "front": "Parents present to the GP a 6-week-old infant, born in February 2017, for vaccinations. Indicate the correct management concerning the immunisation against invasive pneumococcal disease (IPD) taking into consideration that the child was born at 36 week of gestation and the birth weight was 2100 g:",
    "back": "Answer: C: the child can be vaccinated against IPD within the frame of mandatory vaccinations (free of charge) using the schedule: three doses of primary immunisations and one booster dose Explanation: A preterm infant (<37 weeks) belongs to the higher-risk pneumococcal schedule in the Polish programme; the 3-dose primary series plus booster (3+1) is the tested answer.",
    "status": "caveat/updated"
  },
  {
    "id": 35,
    "front": "Parents present to a pediatrician their 7-year-old child born abroad and NEVER vaccinated against Haemophilus influenzae type b for deciding about the completion of the vaccination. Indicate the correct decision of the doctor:",
    "back": "Answer: E: there is no indication to vaccinate a 7-year old child against Haemophilus influenzae type b Explanation: Routine Hib catch-up is not indicated for an otherwise healthy 7-year-old simply because the primary series was missed; older children are vaccinated only for defined risk indications.",
    "status": "caveat/updated"
  },
  {
    "id": 36,
    "front": "The well-child visit schedule up to 12 months of life should include:",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The current Polish preventive-examination schedule does not match any offered visit count/sequence; patronage visits and preventive health examinations are also not interchangeable. Treat the item as dated. Explanation: CURRENT POLISH PREVENTIVE CARE: first-year health checks include the newborn/“zero” assessment and preventive assessments around 1-4 weeks, 2-6 months, 9 months and 12 months; patronage visits are a separate midwife service. None of the listed schedules matches cleanly.",
    "status": "invalid/outdated"
  },
  {
    "id": 37,
    "front": "The alarming symptoms of gastroesophageal reflux disease in children include: 1) swallowing disturbances; 2) diarrhea; 3) attacks of cough and dyspnea at night; 4) constipation; 5) weight loss",
    "back": "Answer: C: 1,3,5 Caveat: Legacy A omits weight loss, an important alarm feature. C best captures dysphagia + nocturnal respiratory symptoms + weight loss, but current GERD “red flag” terminology is broader and chronic diarrhoea can signal an alternative diagnosis, so retain the caveat. Explanation: Paediatric GERD alarm features include dysphagia, nocturnal respiratory symptoms and weight loss/failure to thrive; these prompt evaluation for complications or another diagnosis.",
    "status": "caveat/updated"
  },
  {
    "id": 38,
    "front": "WHICH OF THE FOLLOWING IS NOT an indication for the histopathological examination of an enlarged lymph node in a child?",
    "back": "Answer: D: neck lymph node enlargement lasting for a week, accompanying pharyngitis Explanation: A node enlarged for only about a week during acute pharyngitis is usually reactive and is not, by itself, an indication for histopathology. Supraclavicular nodes, B symptoms, suspicious ultrasound or progressive painless enlargement are red flags.",
    "status": "caveat/updated"
  },
  {
    "id": 39,
    "front": "The most common cause of food allergy in infants is:",
    "back": "Answer: C: cow's milk proteins Explanation: Cow’s-milk protein is the most common food allergen in infancy.",
    "status": "caveat/updated"
  },
  {
    "id": 40,
    "front": "The symptoms characteristic of streptococcal tonsillitis are:",
    "back": "Answer: D: fever, severe sore throat, abdominal pain, vomiting Explanation: GAS tonsillopharyngitis often causes abrupt fever, severe sore throat, tender anterior cervical nodes and tonsillar exudate; abdominal pain/vomiting are common in children, while cough/coryza favour viral disease.",
    "status": "caveat/updated"
  },
  {
    "id": 41,
    "front": "WHICH OF THE FOLLOWING IS NOT a criterion necessary to diagnose growing pains in children (according to Peterson and Mellson)?",
    "back": "Answer: D: positive family history of growing pains Explanation: A positive family history is not required for growing pains. Typical pain is bilateral lower-limb pain, evening/night predominance, normal examination/labs, and no morning symptoms.",
    "status": "caveat/updated"
  },
  {
    "id": 42,
    "front": "A seven-year-old girl visited her friend suffering from measles. The boy had had a rash for 6 days. What post-exposure prophylaxis should be performed in the girl?",
    "back": "Answer: E: none, there is no need for a post-exposure prophylaxis Explanation: The measles case was already on rash day 6 at the visit. Typical infectivity ends after rash day 4 in an immunocompetent person, so this encounter is outside the usual infectious window.",
    "status": "caveat/updated"
  },
  {
    "id": 43,
    "front": "Which of the following is the most common cause of blindness in children in Poland?",
    "back": "Answer: C: retinopathy of prematurity Explanation: Classic LEK/Poland teaching: retinopathy of prematurity is a major cause of childhood visual impairment/blindness; remember prematurity and oxygen exposure as key risk factors.",
    "status": "caveat/updated"
  },
  {
    "id": 44,
    "front": "Hypoparathyroidism occurs in the following diseases EXCEPT for:",
    "back": "Answer: E: CaSR inactivating mutation Explanation: An inactivating CaSR mutation causes familial hypocalciuric hypercalcaemia / neonatal severe hyperparathyroidism - not hypoparathyroidism. Activating CaSR mutations cause hypocalcaemia.",
    "status": "valid"
  },
  {
    "id": 45,
    "front": "Risk factors for urolithiasis DO NOT include:",
    "back": "Answer: D: hypermagnesuria Explanation: Stone risks include hypercalciuria, hyperoxaluria, hyperuricosuria and hypocitraturia. Magnesium complexes oxalate and is generally protective rather than a classic “hypermagnesuria” risk.",
    "status": "valid"
  },
  {
    "id": 46,
    "front": "While riding a bike, a teenage boy treated with insulin for type 1 diabetes suddenly felt weakness, heart palpitations and a tremor in his hands. What should he do first of all?",
    "back": "Answer: B: drink 200 mL of juice Explanation: Exercise-associated adrenergic symptoms in a child with type 1 diabetes = treat suspected hypoglycaemia first with fast carbohydrate, such as juice; recheck glucose after about 15 minutes.",
    "status": "valid"
  },
  {
    "id": 47,
    "front": "Which of the following statements concerning food challenge test (FCT), regarded as a valuable diagnostic tool in food allergy, is FALSE ?",
    "back": "Answer: E: usually at least two food allergens are applied simultaneously in the food challenge test Explanation: Oral food challenge tests one suspected food at a time under supervision; DBPCFC is the diagnostic gold standard when needed. Simultaneously challenging with multiple allergens defeats attribution of the reaction.",
    "status": "caveat/updated"
  },
  {
    "id": 48,
    "front": "Indicate the FALSE statement concerning the second heart sound splitting in children:",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: More than one statement is false: physiologic S2 splitting varies with respiration; ASD classically causes fixed splitting, while pulmonary stenosis causes wide splitting rather than the stated fixed pattern. One false choice cannot be isolated cleanly. Explanation: INVALID: normal S2 splitting widens with inspiration; a fixed split is classic for ASD. Pulmonary stenosis causes a wide split, and several offered statements are not cleanly correct, so there is more than one false statement.",
    "status": "invalid/outdated"
  },
  {
    "id": 49,
    "front": "Chronic fatigue syndrome is a complication of:",
    "back": "Answer: A: infectious mononucleosis Explanation: EBV infectious mononucleosis can be followed by prolonged post-infectious fatigue.",
    "status": "valid"
  },
  {
    "id": 50,
    "front": "The most probable diagnosis in a patient with recurrent infections, thrombocytopenic purpura (the onset in the first six months of live) and eczema (atopic dermatitis-type) is:",
    "back": "Answer: E: Wiskott-Aldrich syndrome Explanation: Exam anchor: Wiskott-Aldrich syndrome. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 51,
    "front": "The most common cause of hyperthyroidism in adolescents is:",
    "back": "Answer: B: Graves’ disease Explanation: Graves disease is the most common cause of hyperthyroidism in children and adolescents.",
    "status": "valid"
  },
  {
    "id": 52,
    "front": "A 10-year-old child with diabetes diagnosed one year ago was completely vaccinated against hepatitis B in the infancy. The parents ask whether the child needs the revaccination against hepatitis B due to the diabetes. Which is the right answer?",
    "back": "Answer: A: the child does not need any further vaccinations against hepatitis B Caveat: Legacy B requires routine anti-HBs testing before deciding. An immunocompetent child who completed the HepB series does not need routine post-vaccination serology or boosters solely because of diabetes -> A. Explanation: CURRENT IMMUNIZATION PRINCIPLE: an immunocompetent child who completed a HepB series does not routinely need anti-HBs testing, boosters or revaccination solely because of diabetes.",
    "status": "caveat/updated"
  },
  {
    "id": 53,
    "front": "The respiratory rate in a normal active 2-year-old child should not exceed:",
    "back": "Answer: C: 40/min Explanation: Exam anchor: 40/min. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 54,
    "front": "Indicate the true statement concerning vesicoureteral reflux:",
    "back": "Answer: C: incidence of urinary tract infections is increased in children with this defect Explanation: Exam anchor: incidence of urinary tract infections is increased in children with this defect. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 55,
    "front": "A neonate is regarded as born prematurely if the pregnancy lasted less than:",
    "back": "Answer: E: 37 weeks or 259 days Explanation: Exam anchor: 37 weeks or 259 days. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 56,
    "front": "Which of the following rise a suspicion of disturbances of the urea cycle in a neonate: 1) vomiting after the first feeding with proteins in a previously healthy neonate; 2) sudden loss of appetite, tremor, seizures, decreased muscle tone, sleepiness or coma in a previously healthy neonate; 3) agitation and generalized rigidity in a previously healthy neonate; 4) increased concentrations of ammonia in serum; 5) decreased concentrations of ammonia in serum",
    "back": "Answer: C: 1,2,4 Caveat: Legacy A substitutes agitation/rigidity for the more typical hyperammonaemic encephalopathy pattern. Protein-triggered vomiting, lethargy/seizures/hypotonia/coma and elevated ammonia are the key cluster -> 1,2,4 = C. Explanation: Urea-cycle defects: protein feeding can precipitate vomiting, encephalopathy/seizures/hypotonia and marked hyperammonaemia in a previously well neonate.",
    "status": "caveat/updated"
  },
  {
    "id": 57,
    "front": "Apart from careful history taking, skin prick tests (SPT) are a crucial diagnostic tool in allergology. Indicate the true statements concerning SPT in children: 1) SPT IS NOT recommended in children younger than 3 years; 2) in the case of allergy to airborne allergens, the result of SPT in children strongly correlates with the clinical symptoms of the disease; 3) SPT indicate the presence of allergen-specific IgE on skin mast cells; 4) when IgE-mediated food allergy (e.g. to vegetables or fruit) is suspected, SPT with a native allergen may be performed; 5) size of erythema to specific…",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The source itself cuts off statement 5 (“size of erythema…”). Because the answer options refer to statement 5, the legacy A and any replacement combination are not auditable from the source. Explanation: The source does not support one defensible modern single-best answer; retain the corrected teaching point rather than memorizing the legacy key.",
    "status": "invalid/outdated"
  },
  {
    "id": 58,
    "front": "Which of the following can be found in a child with somatotropic pituitary insufficiency (growth hormone deficit): 1) low birth-weight; 2) normal bone and dental age; 3) decreased rate of growth at the preschool age; 4) signs of increased intracranial pressure caused by a tumor (e.g. craniopharyngioma)",
    "back": "Answer: E: 3,4 Caveat: Legacy A says all statements are true, but congenital GH deficiency usually has normal birth size and bone/dental age becomes delayed. Growth deceleration and a mass effect from a lesion such as craniopharyngioma are defensible -> E. Explanation: Exam anchor: 3,4. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 59,
    "front": "Indicate the true statements concerning the severe combined immunodeficiency (SCID): 1) it is a genetic disorder consisting in the absence or dysfunction of lymphocytes T that may be accompanied by the absence of lymphocytes B, NK or other cells of the hematologic system; 2) it is the most common type of primary immunodeficiency in children; 3) if left untreated it usually leads to death in the first year of life; 4) hematopoietic cell transplantation may result in permanent cure; 5) it may be radically treated by regular administration of immunoglobulins",
    "back": "Answer: B: 1,3,4 Caveat: Legacy A incorrectly calls SCID the most common primary immunodeficiency and omits untreated first-year mortality. SCID is a severe T-cell disorder; without definitive therapy it is often fatal in infancy, and HSCT can cure -> 1,3,4 = B. Explanation: Exam anchor: 1,3,4. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 60,
    "front": "In a 6-month-old girl in a good general condition, the urine for urinalysis was collected into the bag specimen. On urinalysis, 10-20 leukocytes in the visual field were noticed, urine for culture was taken. What should the pediatrician do?",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: A bag specimen is too contamination-prone to establish UTI by culture. The offered “mid-stream” repeat in a 6-month-old is not a dependable substitute for a properly collected catheter/SPA or feasible clean-catch specimen, leaving no clean single best option. Explanation: A urine-bag specimen is prone to contamination and cannot confirm UTI. In a stable infant with an abnormal screening urinalysis, obtain a properly collected specimen (catheter/SPA, or clean-catch when feasible) for urinalysis and culture before diagnosing UTI. Q61-Q90",
    "status": "invalid/outdated"
  },
  {
    "id": 61,
    "front": "Acute pharyngitis in children 3-4 years of age:",
    "back": "Answer: C: is most often caused by viruses and does not require antibiotic therapy Explanation: Exam anchor: is most often caused by viruses and does not require antibiotic therapy. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 62,
    "front": "A 7-year-old boy is under psychiatric care due to learning disabilities and behavioral problems. Recently, neurologic deterioration that includes hearing loss and visual deficits has been recognized. The plasma concentration of very long chain fatty acids is elevated. What is the probable diagnosis?",
    "back": "Answer: A: X-linked adrenoleukodystrophy Explanation: Exam anchor: X-linked adrenoleukodystrophy. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 63,
    "front": "Indicate the true statement concerning pneumonia in children:",
    "back": "Answer: A: age < 6 months of a child with pneumonia is an indication for hospitalization Explanation: Pneumonia in a young infant, especially <6 months with significant symptoms, lowers the threshold for hospital assessment. Hypoxaemia thresholds are generally below 92-94%, not simply <95% in every guideline.",
    "status": "caveat/updated"
  },
  {
    "id": 64,
    "front": "Which of the following is the absolute CONTRAINDICATION to the gastric lavage in a child who ingested a toxic substance?",
    "back": "Answer: D: ingestion of a corrosive agent, alkaline or acid one Explanation: Corrosive ingestion is an absolute reason not to perform gastric lavage because re-exposure can worsen oesophageal injury and aspiration risk.",
    "status": "caveat/updated"
  },
  {
    "id": 65,
    "front": "The cerebrospinal fluid test performed in a 15-year-old child showed: cell count 420 /µL, 86% lymphocytes, erythrocytes 3/µL, glucose concentration 61 mg/dL, protein concentration 46 mg/dL, chloride ion concentration 122 mmol/L. The result is characteristic of:",
    "back": "Answer: C: viral meningitis Explanation: Exam anchor: viral meningitis. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 66,
    "front": "The incubation period of hepatitis A in children is:",
    "back": "Answer: D: 15-40 days Explanation: HAV is faeco-oral with an incubation of roughly 2-6 weeks; anti-HAV IgM indicates acute/recent infection.",
    "status": "caveat/updated"
  },
  {
    "id": 67,
    "front": "Indicate the true statement concerning Credé method:",
    "back": "Answer: C: is based on the instillation of a 1% solution of silver nitrate into each eye Explanation: Credé prophylaxis is a historical ophthalmia-neonatorum method using 1% silver nitrate. Modern prophylaxis varies by country and usually uses an antibiotic ointment rather than silver nitrate.",
    "status": "caveat/updated"
  },
  {
    "id": 68,
    "front": "In a child with a confirmed diagnosis of coeliac disease, i.e. permanent gluten intolerance, the following products should be totally eliminated from the diet: 1) wheat; 2) rye; 3) corn; 4) barley; 5) rice",
    "back": "Answer: A: 1,2,4 Explanation: Exam anchor: 1,2,4. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 69,
    "front": "WHICH OF THE FOLLOWING IS NOT a cause of obesity in children?",
    "back": "Answer: B: leprechaunism Explanation: Exam trap: leprechaunism is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "caveat/updated"
  },
  {
    "id": 70,
    "front": "Mild course tuberculosis includes: 1) cutaneous tuberculosis; 2) osteoarticular tuberculosis; 3) tuberculous spondylitis; 4) miliary tuberculosis; 5) lymphonodular tuberculosis",
    "back": "Answer: A: 1,2,5 Explanation: Exam anchor: 1,2,5. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 71,
    "front": "Which of the following antibiotics should be used in the treatment of acute pyelonephritis in a 2-year-old child?",
    "back": "Answer: C: 3 -generation cephalosporin Explanation: Exam anchor: 3 -generation cephalosporin. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 72,
    "front": "Which of the following can be anticipated in a child with Marfan syndrome (mutation in the FBN1 gene encoding fibrillin-1): 1) proportional above-average height; 2) abnormal joint flexibility; 3) male gender; 4) scoliosis; 5) aortic stenosis; 6) cataract",
    "back": "Answer: E: 2,4 Caveat: Legacy A makes proportional tall stature, male sex, aortic stenosis and cataract part of Marfan syndrome. The robust listed features are joint laxity and scoliosis; classic ocular/cardiac findings are ectopia lentis and aortic-root disease -> E. Explanation: Marfan: joint laxity and scoliosis fit. Height is characteristically disproportionate (long limbs), there is no male predilection, the aortic lesion is root dilatation/aneurysm rather than stenosis, and the ocular hallmark is ectopia lentis rather than cataract.",
    "status": "caveat/updated"
  },
  {
    "id": 73,
    "front": "Taking into consideration a theoretical risk of foetus malformations caused by the vaccine, an attenuated strain of rubella virus, what is the minimal interval between the vaccination with a combined measles-mumps-rubella vaccine and the planned pregnancy according to the Polish National Program of Immunizations?",
    "back": "Answer: B: 4 weeks Explanation: Avoid pregnancy for at least 4 weeks after a live MMR vaccine.",
    "status": "caveat/updated"
  },
  {
    "id": 74,
    "front": "Which karyotype is found in a patient with Morris syndrome?",
    "back": "Answer: D: 46 XY Explanation: Exam anchor: 46 XY. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 75,
    "front": "Factors which can disturb the fetal growth DO NOT include:",
    "back": "Answer: D: mother’s diet rich in folic acid Explanation: Exam trap: mother’s diet rich in folic acid is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "caveat/updated"
  },
  {
    "id": 76,
    "front": "Which of the following is most commonly used in the pharmacological treatment of vasovagal syncope in children?",
    "back": "Answer: A: mineralocorticoid Explanation: Fludrocortisone is one pharmacologic option for recurrent vasovagal syncope when lifestyle measures fail; increased salt/fluid is first-line non-pharmacologic management.",
    "status": "caveat/updated"
  },
  {
    "id": 77,
    "front": "A woman comes to the GP with her 4-year-old daughter, who has had a fever up to 39.5 ºC since the morning. The child complains of strong sore throat too. The physical examination reveals enlarged tonsils covered with white exudate and pus plugs. Anterior cervical lymph nodes are also enlarged. The clinical image allows the diagnosis of:",
    "back": "Answer: D: acute streptococcal pharyngitis and tonsillitis, but the decision on antibiotic therapy should be based on the rapid strep test result Explanation: With suspected GAS pharyngitis in a child, microbiologic confirmation (rapid antigen test +/- culture depending result/local policy) should guide antibiotics rather than treating solely from Centor/McIsaac score.",
    "status": "caveat/updated"
  },
  {
    "id": 78,
    "front": "Acute lymphoblastic leukemia (ALL) in a child population presents a relatively good prognosis compared with other neoplastic diseases. Which of the following is a prognostic high risk factor in ALL in children that urges intensive treatment and decreases chances of curing the disease?",
    "back": "Answer: B: presence of translocation t(9;22) Explanation: Philadelphia chromosome t(9;22)/BCR::ABL1 is a high-risk ALL feature and changes treatment intensity/targeted therapy.",
    "status": "caveat/updated"
  },
  {
    "id": 79,
    "front": "Which of the following diagnostic methods allows the identification of scars in the kidney?",
    "back": "Answer: A: DMSA scintigraphy Explanation: DMSA renal scintigraphy is the classic study for cortical renal scars.",
    "status": "caveat/updated"
  },
  {
    "id": 80,
    "front": "The doses of medications in children depending on the substance and the way of administration are calculated: 1) per kilogram of body weight; 2) per square meter of body surface; 3) as in adults for children older than 6 years; 4) as in adults for children older than 10 years; 5) as in adults for children with body weight of 40 kg or more",
    "back": "Answer: B: 1,2,5 Caveat: Legacy A includes an arbitrary adult-dose cutoff at age 10. Paediatric doses are commonly weight- or BSA-based; adult dosing may be used when an adolescent reaches about adult body size/40 kg depending on the drug -> 1,2,5 = B. Explanation: Paediatric dosing is commonly weight- or body-surface-area based; adult dosing can be used for many drugs once approximately adult body weight is reached, but age cut-offs alone are not a universal rule.",
    "status": "caveat/updated"
  },
  {
    "id": 81,
    "front": "Invasive meningococcal disease was diagnosed in a 4-year-old child admitted to the hospital. What preventive measure should be implemented in a 2-year-old brother of the hospitalized child living in the same household?",
    "back": "Answer: C: one dose of ceftriaxone 125 mg should be given Explanation: Close household contacts of invasive meningococcal disease need prompt chemoprophylaxis; ceftriaxone is an accepted single-dose option for young children.",
    "status": "caveat/updated"
  },
  {
    "id": 82,
    "front": "A 3-year-old child suffers from significant pruritus aggravating at night. There are irregular papules on the skinfolds between digits. There are excoriations visible on the foot skin and in the intergluteal area. The probable diagnosis is:",
    "back": "Answer: A: scabies Explanation: Exam anchor: scabies. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 83,
    "front": "Cystic fibrosis consists in inherited malfunction of the chloride channel. It results in the decreased excretion of chloride and the increased absorption of natrium into cells, which leads to ion disturbances and dehydration of the secretion of exocrine glands. Thus, it is true that in children with cystic fibrosis more often than in healthy children: 1) sweat contains less chloride, which is used in the diagnostics; 2) bronchiectasis may occur; 3) cholestasis and cholelithiasis may occur; 4) sinusitis and nasal polyps may occur; 5) exocrine pancreatic insufficiency may be observed while the…",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The source truncates statement 5, and the proposed corrected combination depends on it. The safe action is to mark the item source-truncated rather than invent the missing clause. Explanation: CF sweat chloride is increased, not decreased. Bronchiectasis, hepatobiliary disease, sinus disease/nasal polyps and exocrine pancreatic insufficiency are classic complications.",
    "status": "invalid/outdated"
  },
  {
    "id": 84,
    "front": "The most common type of juvenile idiopathic arthritis in children is:",
    "back": "Answer: A: oligoarticular juvenile idiopathic arthritis Explanation: Oligoarticular JIA is the most common JIA category in children.",
    "status": "caveat/updated"
  },
  {
    "id": 85,
    "front": "The most common causes of macrocytic anaemia in children include:",
    "back": "Answer: A: deficiency of vitamin B , deficiency of folic acid, hypothyroidism, liver diseases Explanation: Exam anchor: deficiency of vitamin B , deficiency of folic acid, hypothyroidism, liver diseases. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 86,
    "front": "The elements of primary prophylaxis of atopic dermatitis include:",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The prevention recommendations embedded in the item reflect older atopic-dermatitis prevention concepts. Evidence for exclusive breastfeeding/hydrolysates/emollients as primary prevention has evolved, and the offered combinations do not form one durable current answer. Explanation: OUTDATED PREVENTION ITEM: avoid tobacco smoke; routine maternal/infant allergen avoidance and universal prophylactic emollient or hydrolysed-formula strategies are not established as a single evidence-based primary-prevention package for atopic dermatitis.",
    "status": "invalid/outdated"
  },
  {
    "id": 87,
    "front": "The appropriate treatment after the diagnosis of streptococcal angina is:",
    "back": "Answer: B: penicillin V (phenoxymethylpenicillin) for 10 days Explanation: Exam anchor: penicillin V (phenoxymethylpenicillin) for 10 days. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 88,
    "front": "WHICH OF THE FOLLOWING IS NOT used to diagnose obesity in children?",
    "back": "Answer: E: crown-rump length (CRL) Explanation: Exam trap: crown-rump length (CRL) is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 89,
    "front": "Which of the following factor increase the risk of urolithiasis? 1) increased fluid intake; 2) familial history of urolithiasis; 3) warm climate; 4) infection caused by Proteus mirabilis",
    "back": "Answer: D: 2,3,4 Caveat: Legacy A treats increased fluid intake as a stone risk. Higher fluid intake is protective; family history, hot climate/dehydration and urease-producing Proteus infection increase risk -> D. Explanation: Stone risk rises with family history, hot climate/dehydration and urease-producing Proteus infection. Higher fluid intake is protective.",
    "status": "caveat/updated"
  },
  {
    "id": 90,
    "front": "Which of these symptoms is the least probable symptom of the extragastric presentation of gastric reflux disease in children?",
    "back": "Answer: B: rickets Explanation: Most infant reflux is physiologic; alarm signs such as dysphagia, haematemesis, weight loss/faltering growth or neurologic/systemic illness prompt evaluation for GERD/other disease. Q91-Q120",
    "status": "valid"
  },
  {
    "id": 91,
    "front": "A 5-year-old girl, healthy and properly developing so far, was referred to the ER because of disturbances of consciousness, poor general condition and significant dehydration with rapid, deep breathing. From anamnesis you find out that she has lost 3 kg of weight for the last 2 weeks, and begun wetting. Previously she used to drink a lot, but the last day she stopped drinking and urinating; she complained of severe abdominal pain and vomiting. Indicate the most probable diagnosis:",
    "back": "Answer: A: ketoacidosis in the course of previously undiagnosed diabetes mellitus Explanation: Polyuria/polydipsia, weight loss, dehydration, abdominal pain/vomiting and Kussmaul breathing = diabetic ketoacidosis until proven otherwise.",
    "status": "caveat/updated"
  },
  {
    "id": 92,
    "front": "Which of the following conditions are characterized by increased urine loss of phosphates? 1) Fanconi syndrome; 2) tumor lysis syndrome during chemotherapy; 3) hypophosphatemic rickets; 4) hyperparathyroidism; 5) hypoparathyroidism",
    "back": "Answer: A: 1,2,3,4 Explanation: Exam anchor: 1,2,3,4. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 93,
    "front": "Which stage of chronic kidney disease should be diagnosed in a 16-year-old patient with lupus nephropathy and eGFR = 45 ml/min/1.73 m ?",
    "back": "Answer: C: 3 Explanation: Exam anchor: 3. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 94,
    "front": "Which of the following symptoms IS NOT characteristic of streptococcal pharyngitis and tonsillitis?",
    "back": "Answer: A: mucus discharge in the nasal passages Caveat: Legacy E labels a scarlatiniform rash as “not characteristic,” but scarlet fever is a GAS toxin manifestation. Coryza/mucous nasal discharge argues against GAS pharyngitis -> A. Explanation: Coryza/nasal discharge argues strongly against classic GAS pharyngitis. Palatal petechiae, tender anterior cervical nodes and a scarlatiniform rash can occur with GAS.",
    "status": "caveat/updated"
  },
  {
    "id": 95,
    "front": "A 3-year-old girl came to the clinic because of malaise, abdominal pain, and oedema localized mainly in the lower limbs. The urinalysis revealed: the SG-1.030, pH-6.0, erythrocytes-0-1 in the field of vision, leukocytes-0-1 in the field of vision, protein-1170 mg/dL, nitrites-absent. Which of the following is the most likely diagnosis?",
    "back": "Answer: E: nephrotic syndrome Explanation: Heavy proteinuria + oedema + hypoalbuminaemia is nephrotic syndrome.",
    "status": "valid"
  },
  {
    "id": 96,
    "front": "Indicate the correct sentence concerning bronchiolitis:",
    "back": "Answer: D: it is the most common form of inflammation in the lower respiratory tract in infants Explanation: Bronchiolitis is usually viral (RSV common) in infants; treatment is mainly supportive with oxygen/hydration as needed, not routine antibiotics or bronchodilators.",
    "status": "valid"
  },
  {
    "id": 97,
    "front": "Which of the following are characteristic of Wilson disease in children? 1) excessive storage of copper in the liver accompanied by the increased serum activity of aminotransferases; 2) frequent neurological disorders, especially dysarthria; 3) frequent presence of Kayser- Fleischer ring of the cornea; 4) increased serum ceruloplasmin concentration; 5) increased urinary copper excretion",
    "back": "Answer: C: 1,5 Caveat: Legacy A overstates frequent neurologic/Kayser-Fleischer findings in children and omits increased urinary copper. In paediatric hepatic Wilson disease, increased hepatic copper/transaminases plus increased urinary copper are the clean pair -> C. Explanation: Wilson disease: hepatic copper accumulation and increased urinary copper excretion; ceruloplasmin is usually low. Kayser-Fleischer rings/neurologic disease are less common in young children than in adolescents/adults.",
    "status": "caveat/updated"
  },
  {
    "id": 98,
    "front": "Inhaled corticosteroids may be used in the treatment of:",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: Nebulized budesonide is an accepted croup treatment, while ICS-containing treatment is fundamental in modern asthma care. The wording makes more than one option defensible, so a single answer is unsafe. Explanation: INVALID/UPDATED: nebulized budesonide is effective for croup, and modern asthma care uses ICS-containing treatment across essentially all persistent asthma severities. The option wording creates more than one defensible statement.",
    "status": "invalid/outdated"
  },
  {
    "id": 99,
    "front": "A 10-year-old child was referred to the out-patient pulmonary clinic because of a chronic cough and recurrent respiratory tract infections, usually occurring with an expectoration of purulent sputum. The medical history shows meconium ileus after the birth and a small body weight gain. The episodes of steatorrhea are also present. Which of the following is the most probable diagnosis?",
    "back": "Answer: D: cystic fibrosis Explanation: Exam anchor: cystic fibrosis. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 100,
    "front": "Phakomatoses DO NOT include:",
    "back": "Answer: E: Tay-Sachs disease Explanation: Exam trap: Tay-Sachs disease is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 101,
    "front": "A child weighing 12 kg with the fever of 40 °C can be given once: 1) 3 mL syrup with the concentration of 200 mg/5 mL of ibuprofen; 2) 6 mL syrup with the concentration of 100 mg/5 mL of ibuprofen; 3) 1.8 mL syrup with the concentration of 100 mg/1 mL of paracetamol; 4) 5 mL syrup with the concentration of 120 mg/5 mL of paracetamol; 5) 7.5 mL syrup with the concentration of 120 mg/5 mL of paracetamol; 6) 240 mg of ibuprofen in a suppository",
    "back": "Answer: B: 1,2,3,4,5 Caveat: Legacy A includes a 240 mg ibuprofen suppository for a 12-kg child (20 mg/kg), which is above the usual single 5-10 mg/kg dose. Items 1-5 fall within common single-dose ranges -> B. Explanation: For a 12-kg child, standard single doses are paracetamol about 10-15 mg/kg and ibuprofen about 5-10 mg/kg. A 240-mg ibuprofen suppository is ~20 mg/kg and too high as a routine single dose.",
    "status": "caveat/updated"
  },
  {
    "id": 102,
    "front": "Moro reflex:",
    "back": "Answer: C: is present from the birth and disappears between 3 and 6 month of life Explanation: Exam anchor: is present from the birth and disappears between 3 and 6 month of life. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 103,
    "front": "Short stature may be observed in the following disorders, EXCEPT for:",
    "back": "Answer: B: Marfan syndrome Explanation: Exam trap: Marfan syndrome is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 104,
    "front": "Indicate the true statements concerning pneumonia caused by Chlamydia trachomatis: 1) it occurs in neonates in the first weeks of life; 2) it is an example of atypical infection and usually occurs in school children; 3) clinical signs include mainly dry, spasmodic, whooping-like cough; 4) clinical signs include conjunctivitis, rhinitis, cough and vomiting",
    "back": "Answer: A: 1,3 Explanation: Exam anchor: 1,3. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 105,
    "front": "Which of the following are features of acute diarrhea in children? 1) it is an infectious disease; 2) passing three or more liquid or semi-liquid stools daily; 3) passing stools containing blood, pus or significant amounts of mucus; th rd th 4) symptoms last up to 2 weeks",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The item mixes definition, frequency, stool count and aetiology in a way that depends on age and baseline stool pattern. Multiple statements can be challenged, so no stable modern combination should be memorized. Explanation: WORDING PROBLEM: acute diarrhoea is usually defined as >=3 loose/watery stools in 24 h lasting <14 days. Blood/mucus may occur but is not required, and not every acute diarrhoea episode is necessarily infectious.",
    "status": "invalid/outdated"
  },
  {
    "id": 106,
    "front": "Indicate the FALSE statement concerning tuberculosis in children:",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: IGRA can be useful in paediatric TB assessment and bronchoscopy is not a routine test for every child with suspected TB. More than one option is false, defeating the single-FALSE stem. Explanation: INVALID: IGRA can be useful in paediatric TB evaluation and bronchoscopy is not a routine standard test for every child. More than one offered statement is false.",
    "status": "invalid/outdated"
  },
  {
    "id": 107,
    "front": "Indicate the correct sentence about infectious mononucleosis:",
    "back": "Answer: A: it is caused by a virus of Herpesviridae family, also responsible for diseases running with cell proliferation: malignant granulomatosis and Burkitt lymphoma Explanation: EBV mononucleosis: fever, pharyngitis, posterior cervical lymphadenopathy and atypical lymphocytosis; avoid contact sports when splenomegaly is present.",
    "status": "valid"
  },
  {
    "id": 108,
    "front": "Which complication DOES NOT occur in patients after liver transplantation?",
    "back": "Answer: B: graft versus host disease Explanation: Exam trap: graft versus host disease is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 109,
    "front": "A child refers to the physician with small petechiae on the thighs, joint pains and proteinuria. The mother reports that 2 weeks earlier her child had bacterial pharyngitis. Which of the following should be suspected?",
    "back": "Answer: A: Henoch-Schönlein purpura Explanation: Exam anchor: Henoch-Schönlein purpura. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 110,
    "front": "The mother of a 2-year-old boy is concerned with her child’s diet. He doesn’t want to eat vegetables or meat and demands milk desserts or sweet drinks only. His height and weight are at the level of a 50th centile. The boy doesn’t present any signs of infection but he was treated with oral antibiotics twice in his life, for pharyngitis and bronchitis. There are no alarming symptoms. On the complete blood count: leucocytes-8,400/ mm , hemoglobin-9.1 g/dL, MCV-62 fL, platelets-330 000/mm . Fasting glucose-88 mg%. Indicate the correct decision and its justification:",
    "back": "Answer: E: treatment with oral iron preparations and vitamins because the symptoms and lab tests suggest iron deficiency anemia Explanation: Exam anchor: treatment with oral iron preparations and vitamins because the symptoms and lab tests suggest iron deficiency anemia. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 111,
    "front": "An increased aminotransferase activity DOES NOT occur in:",
    "back": "Answer: D: iron-deficiency anemia Explanation: Exam trap: iron-deficiency anemia is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 112,
    "front": "Which of the following is used to diagnose constipation? 1) manometry; 2) Hinton test; 3) hydrogen test; 4) bowel contrast enema; 5) gastrofiberoscopy",
    "back": "Answer: B: 1,2,4 Caveat: Legacy A includes a hydrogen breath test as a standard constipation test. Functional constipation is primarily clinical; when selected testing is needed, anorectal manometry, transit-marker (Hinton) study and contrast enema are relevant -> B. Explanation: Constipation work-up can include anorectal manometry, colonic-transit testing (Hinton markers) and contrast enema in selected cases; hydrogen breath testing is not a standard constipation test.",
    "status": "caveat/updated"
  },
  {
    "id": 113,
    "front": "A two-year-old child unvaccinated (parents’ decision) came back home after two-week’s vacation from Ukraine. After a week the child developed high fever, dry cough, nasal discharge and conjunctivitis with eyelid edema. After three days numerous grayish- white papules appeared on the cheek mucosa and after another two days as the fever dropped, a rash appeared on the forehead and then it spread. The child should be diagnosed with:",
    "back": "Answer: B: measles Explanation: Exam anchor: measles. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 114,
    "front": "Which of the following are secondary disturbances typical of nephrotic syndrome? 1) increased triglyceride and cholesterol serum concentrations; 2) vitamin D deficiency; 3) hyperthyroidism; 4) decreased fibrinogen concentration; 5) decreased immunoglobulin serum concentration",
    "back": "Answer: B: 1,2,5 Caveat: Legacy A includes hyperthyroidism and omits vitamin-D deficiency. Nephrotic syndrome causes hyperlipidaemia, urinary loss of vitamin-D-binding protein and immunoglobulins, and a prothrombotic state with fibrinogen tending to rise, not fall -> B. Explanation: Nephrotic syndrome causes hyperlipidaemia, urinary loss of vitamin-D-binding protein and immunoglobulins, and a prothrombotic state (often increased, not decreased, fibrinogen).",
    "status": "caveat/updated"
  },
  {
    "id": 115,
    "front": "Systemic Inflammatory Response Syndrome (SIRS) is characterized by the sudden appearance of at least 2 symptoms:",
    "back": "Answer: D: body temperature >38.5C degrees or <36 C degrees and tachypnea or tachycardia Explanation: This is the older paediatric SIRS framework: >=2 abnormal temperature/HR/RR/WBC criteria, with abnormal temperature or leukocyte count required. Modern sepsis definitions focus on infection-associated organ dysfunction rather than SIRS alone.",
    "status": "caveat/updated"
  },
  {
    "id": 116,
    "front": "Lumbar puncture in children is absolutely indicated in the following clinical situations, EXCEPT for:",
    "back": "Answer: A: newborn with spinal dysraphism Explanation: Exam trap: newborn with spinal dysraphism is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 117,
    "front": "A 5-year-old girl was hospitalized a dozen times in various pediatric wards because of unspecific symptoms and yet is undiagnosed. Acute symptoms subsided while the mother was absent at the ward. The results of numerous performed test are inconclusive and contradictory. The mother is alert and asks to repeat blood tests and to perform additional imaging examinations. The described picture may suggest:",
    "back": "Answer: C: Munchausen syndrome by proxy (factitious disorder) Explanation: Exam anchor: Munchausen syndrome by proxy (factitious disorder). Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 118,
    "front": "Which of following diseases DOES NOT lead to height restriction?",
    "back": "Answer: C: adrenal insufficiency Explanation: Exam trap: adrenal insufficiency is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 119,
    "front": "A 3-year-old boy was admitted to the hospital because of oliguria and generalized oedema. Laboratory findings show proteinuria 500 mg/mmol creatinine, albuminemia 15 g/L. The treatment of choice is:",
    "back": "Answer: B: glucocorticosteroids Explanation: Exam anchor: glucocorticosteroids. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 120,
    "front": "Indicate the set of heart rate (HR) and arterial blood pressure (RR) values normal in a one-year-old child:",
    "back": "Answer: A: HR: 105/min, RR: 85/60 mmHg Explanation: Exam anchor: HR: 105/min, RR: 85/60 mmHg. Retain this as the single best answer for the clinical fact tested in this stem. Q121-Q150",
    "status": "valid"
  },
  {
    "id": 121,
    "front": "Indicate the true statement concerning bronchitis in children:",
    "back": "Answer: B: nebulization with 3% solution of sodium chloride can be used to ease the symptoms of acute bronchitis Explanation: Acute bronchitis is usually viral; routine antibiotics and chest radiography are not indicated. Hypertonic saline is mainly evidence-based in bronchiolitis contexts, so interpret the source wording cautiously.",
    "status": "caveat/updated"
  },
  {
    "id": 122,
    "front": "Indicate the true statement concerning newly diagnosed immune thrombocytopenia:",
    "back": "Answer: C: it can be diagnosed only if the platelet count in the peripheral blood is < 100 x 10 /µL and disorders are excluded that might suggest other reason for thrombocytopenia (e.g. lymphadenopathy, hepatomegaly, anemia, abnormal WBC) Explanation: Exam anchor: it can be diagnosed only if the platelet count in the peripheral blood is < 100 x 10 /µL and disorders are excluded that might suggest other reason for thrombocytopenia (e.g. lymphadenopathy, hepatomegaly, anemia, abnormal WBC). Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 123,
    "front": "Which of the following concerning Allagille syndrome is FALSE ?",
    "back": "Answer: E: elevated total bilirubin levels, with a predominance of indirect Explanation: Alagille syndrome is usually JAG1/NOTCH2-related cholestasis with bile-duct paucity, heart disease, butterfly vertebrae and characteristic facies; bilirubin is conjugated.",
    "status": "valid"
  },
  {
    "id": 124,
    "front": "Which of the exams is decisive in the differentiation of malignant disease of blood from systemic onset juvenile idiopathic arthritis?",
    "back": "Answer: C: bone marrow biopsy Explanation: Exam anchor: bone marrow biopsy. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 125,
    "front": "Productive cough is typical of the following diseases, EXCEPT from:",
    "back": "Answer: D: pertussis Explanation: Exam trap: pertussis is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "caveat/updated"
  },
  {
    "id": 126,
    "front": "Which procedure is necessary for the diagnosis of Wilms’ tumour?",
    "back": "Answer: C: abdominal ultrasound and/or computed tomography Explanation: Wilms tumour is commonly managed under SIOP-style protocols with imaging-based diagnosis and preoperative chemotherapy; routine pre-op biopsy is avoided in typical resectable cases because it can alter staging.",
    "status": "caveat/updated"
  },
  {
    "id": 127,
    "front": "A 4-month-old infant was admitted to the hospital and diagnosed with bronchiolitis. Prior to the infection the child was healthy. In the rapid test of the smear from the nasopharynx RSV (respiratory syncytial virus) antigens were detected. Indicate the proper treatment in this case:",
    "back": "Answer: A: symptomatic treatment Explanation: Bronchiolitis is usually viral (RSV common) in infants; treatment is mainly supportive with oxygen/hydration as needed, not routine antibiotics or bronchodilators.",
    "status": "valid"
  },
  {
    "id": 128,
    "front": "The antibiotic of choice in the treatment of streptococcal pharyngitis is:",
    "back": "Answer: C: penicillin Explanation: Exam anchor: penicillin. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 129,
    "front": "A mother reported to the pediatrician with her 10-year-old son because of hearing impairment. Medical history showed that boy’s uncle suffers from hypoacusis. The urine test showed erythrocyturia and mild proteinuria. Which of the following is the most probable cause of the symptoms?",
    "back": "Answer: A: Alport syndrome Explanation: Exam anchor: Alport syndrome. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 130,
    "front": "A reaction of the balance system examined in order to assess the psychomotor development of a neonate is called:",
    "back": "Answer: B: Landau reflex Explanation: The Landau/parachute-type postural reflexes emerge during infancy; persistent primitive reflexes or absent expected protective reactions suggest neurologic dysfunction.",
    "status": "caveat/updated"
  },
  {
    "id": 131,
    "front": "A 11-year-old boy called on the doctor with the results of the urinary test performed in the afternoon, which showed proteinuria of 300 mg/dL. Which of the following is the most probable cause?",
    "back": "Answer: D: orthostatic proteinuria Explanation: Exam anchor: orthostatic proteinuria. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 132,
    "front": "Within what time in the period of infectivity will an immunocompetent child display chickenpox signs after contacting an infectious patient (with chickenpox)?",
    "back": "Answer: D: 15 days Explanation: Varicella produces crops of pruritic vesicles in different stages; crusted lesions are no longer infectious.",
    "status": "caveat/updated"
  },
  {
    "id": 133,
    "front": "In the case of the mother being a carrier of the mutated gene, the risk that her son will be ill with haemophilia A is:",
    "back": "Answer: C: 50% Explanation: Exam anchor: 50%. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 134,
    "front": "Celiac disease can coexist with many other autoimmune diseases including: 1) autoimmune hepatitis; 2) Hashimoto's disease; 3) Duhring's disease; 4) Sjögren's disease; 5) Crohn's disease; 6) type II diabetes",
    "back": "Answer: C: 1,2,3,4 Caveat: Legacy A says all six associations are true, including type 2 diabetes and Crohn disease as if they were the standard autoimmune cluster. The classic associated immune diseases in the list are autoimmune hepatitis, Hashimoto thyroiditis, dermatitis herpetiformis and Sjogren syndrome -> C. Explanation: Coeliac disease can cause malabsorption, poor growth, iron deficiency and extraintestinal symptoms; screen with tTG-IgA plus total IgA while the child is eating gluten.",
    "status": "caveat/updated"
  },
  {
    "id": 135,
    "front": "Idiopathic musculoskeletal disorder affecting children, often referred to as body growth pain, is the reason for visiting a pediatrician. Which symptoms allow to make such a diagnosis?",
    "back": "Answer: D: normal walk, pains never occur in the morning, normal laboratory test results Explanation: Exam anchor: normal walk, pains never occur in the morning, normal laboratory test results. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 136,
    "front": "The factors behind the development of urinary tract infection in children include: 1) urinary retention; 2) anatomical defects of the urinary system; 3) diabetes; 4) urinary catheterization; 5) constipation",
    "back": "Answer: A: all the above Explanation: Exam anchor: all the above. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 137,
    "front": "The symptoms of primary adrenal insufficiency include: 1) increased arterial pressure; 2) lowered arterial pressure; 3) light skin; 4) dark skin; 5) delayed puberty; 6) precocious puberty",
    "back": "Answer: C: 2,4,5 Caveat: Legacy A pairs hypotension with light skin. Primary adrenal insufficiency causes hypotension + hyperpigmentation and can delay growth/puberty -> 2,4,5 = C. Explanation: Primary adrenal insufficiency causes hypotension, hyperpigmentation, weight loss and often delayed growth/puberty; crisis can cause shock and hypoglycaemia.",
    "status": "caveat/updated"
  },
  {
    "id": 138,
    "front": "Indicate the FALSE statement concerning vaccines:",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: At least two statements are false: PPSV23 is not the routine vaccine for children under 2, and whole-cell DTP is not a “conjugate” vaccine. The stem therefore has no unique false answer. Explanation: INVALID: PPV23 is not used to immunize neonates/children <2 years, and whole-cell DTP is not a “conjugate vaccine.” Thus more than one option is false. PCV is the conjugate pneumococcal vaccine for young children.",
    "status": "invalid/outdated"
  },
  {
    "id": 139,
    "front": "Indicate the FALSE statement concerning impetigo:",
    "back": "Answer: E: Lisch nodules are found in more than 90% of patients with impetigo Explanation: Impetigo causes superficial vesicles/pustules with honey-coloured crust; S. aureus and GAS are typical pathogens.",
    "status": "valid"
  },
  {
    "id": 140,
    "front": "Jaundice connected with breast-feeding is probably the result of:",
    "back": "Answer: C: delayed first feeding and not enough feeding Explanation: Exam anchor: delayed first feeding and not enough feeding. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 141,
    "front": "In the case of a girl of a short stature, with primary amenorrhea, coarctation of the aorta and a dysmorphic face the most likely clinical diagnosis is:",
    "back": "Answer: D: Turner syndrome Explanation: Exam anchor: Turner syndrome. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 142,
    "front": "WHICH OF THE FOLLOWING IS NOT a cause of cardiogenic syncope in children?",
    "back": "Answer: D: abnormal self-regulation of heart rate and blood pressure during long time standing Explanation: Exam trap: abnormal self-regulation of heart rate and blood pressure during long time standing is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "caveat/updated"
  },
  {
    "id": 143,
    "front": "A foreign body in the bronchus may cause any of the following, EXCEPT for:",
    "back": "Answer: D: pain that increases with neck movements Explanation: Exam trap: pain that increases with neck movements is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 144,
    "front": "The most common complication of streptococcal pharyngitis in children is:",
    "back": "Answer: D: peritonsillar abscess Explanation: Source answer retained with wording caveat: suppurative complications of GAS tonsillitis include peritonsillar/retropharyngeal abscess, cervical adenitis, otitis and sinusitis; “most common” depends on the source and population.",
    "status": "caveat/updated"
  },
  {
    "id": 145,
    "front": "The tests used for the examination of strabismus in children include: 1) alternating eye covering and uncovering test; 2) corneal reflex test; 3) Hirschberg test; 4) cover test; 5) Adams test",
    "back": "Answer: B: 1,2,3,4 Caveat: Legacy A includes the Adams forward-bend test, which assesses scoliosis, not strabismus. Cover/uncover, corneal light reflex/Hirschberg and cover testing are appropriate -> B. Explanation: Exam anchor: 1,2,3,4. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 146,
    "front": "In which of the following diseases may post-exposure prophylaxis be used? 1) mumps; 2) measles; 3) pertussis; 4) varicella; 5) Neisseria meningitidis infection",
    "back": "Answer: D: 2,3,4,5 Caveat: The source key A includes mumps and omits pertussis/varicella/meningococcal disease. Effective post-exposure measures exist for measles, pertussis, varicella and meningococcal exposure; routine mumps PEP is not effective -> D. Explanation: Post-exposure measures exist for measles, hepatitis A, varicella and meningococcal exposure in appropriate circumstances; there is no reliable post-exposure prophylaxis that prevents mumps after exposure.",
    "status": "caveat/updated"
  },
  {
    "id": 147,
    "front": "Which of the following genetic disorders IS NOT related to the increased risk of malignancy in children?",
    "back": "Answer: E: familial Mediterranean fever Explanation: Exam trap: familial Mediterranean fever is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 148,
    "front": "The presence of multiple adenomatous polyps on endoscopic examination of the digestive tract and co-existing soft tissue fibromas on the arms and the shanks give rise to a suspicion of:",
    "back": "Answer: A: Gardner syndrome Explanation: Exam anchor: Gardner syndrome. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 149,
    "front": "Can a child be diagnosed with diabetes using oral glucose tolerance test?",
    "back": "Answer: D: yes, the dose of glucose is calculated as 1.75 g/kg b.w., no more than 75 g Explanation: Exam anchor: yes, the dose of glucose is calculated as 1.75 g/kg b.w., no more than 75 g. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 150,
    "front": "Urinary system infection in children IS NOT testified by:",
    "back": "Answer: A: dilation of the renal pelvis and calyces observed in ultrasound imaging Explanation: Exam trap: dilation of the renal pelvis and calyces observed in ultrasound imaging is the excluded/false choice. The table/true-set above shows what remains correct. Q151-Q180",
    "status": "valid"
  },
  {
    "id": 151,
    "front": "A 7-year-old boy with a food allergy, with an history of anaphylactic shock after drinking of cow's milk, reports to the family doctor complaining of general weakness and eyelid swelling. The symptoms have persisted for over 2 days. Numerous fresh traces of insect bites are visible on the skin. Swelling of the face and lower legs. The heart rate and blood pressure are normal. The result of a rapid test determining the concentration of CRP in capillary blood-normal. Urine test strip: leukocytes (+), protein (+++). The child is referred to the hospital. What diagnosis do you consider the most…",
    "back": "Answer: E: suspected nephrotic syndrome Explanation: Food allergy diagnosis starts with a compatible history; targeted IgE testing supports sensitization, while supervised oral food challenge is the reference standard when needed.",
    "status": "valid"
  },
  {
    "id": 152,
    "front": "The target HbA1c value in preschool children with type 1 diabetes mellitus is:",
    "back": "Answer: B: <7.0% Caveat: Legacy A reflects older/overly stringent preschool targets. ADA 2026 states A1C <7% is appropriate for most children/adolescents; <6.5% is a selected-individual target, not the default -> B. Explanation: 2026 diabetes target: A1C goals are individualized; <7% is appropriate for most children/adolescents with diabetes. <6.5% may be appropriate for selected patients if safely achievable.",
    "status": "caveat/updated"
  },
  {
    "id": 153,
    "front": "The prevention of food allergy DOES NOT include:",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The stem reflects older food-allergy prevention advice. Current prevention includes timely introduction of allergenic foods rather than maternal avoidance/delayed introduction, and several offered statements are outdated, so there is no single durable “does not include” choice. Explanation: OUTDATED FOOD-ALLERGY PREVENTION ITEM: routine maternal allergen avoidance, delaying allergenic solids, prophylactic hydrolysed formula and goat milk are not universal prevention strategies. Current prevention emphasizes normal varied feeding and timely introduction of allergens such as peanut/egg in age-appropriate forms for many infants.",
    "status": "invalid/outdated"
  },
  {
    "id": 154,
    "front": "The sudden onset of a disease in a child with a high fever, headaches, vomiting, fine spotted rash on the skin, and “raspberry tongue” is the clinical description of:",
    "back": "Answer: C: scarlet fever Explanation: Exam anchor: scarlet fever. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 155,
    "front": "The definition of 1 carbohydrate exchange (CE) includes an amount of the product comprising:",
    "back": "Answer: B: 10 g of carbohydrates Explanation: Exam anchor: 10 g of carbohydrates. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 156,
    "front": "The serum glycemia level of 156 mg/dl in the 120 minute of the OGTT in a child is interpreted as:",
    "back": "Answer: C: abnormal glucose tolerance Explanation: Exam anchor: abnormal glucose tolerance. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 157,
    "front": "Which of the following is recommended in the treatment of urinary tract infection in a neonate?",
    "back": "Answer: E: ampicillin with gentamicin. th Explanation: Exam anchor: ampicillin with gentamicin. th. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 158,
    "front": "Uveitis is one of the symptoms of juvenile idiopathic arthritis that may lead to eyesight damage. In which type of juvenile idiopathic arthritis does uveitis occur most frequently?",
    "back": "Answer: D: oligoarticular Explanation: Exam anchor: oligoarticular. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 159,
    "front": "Constricted pupils may be observed in:",
    "back": "Answer: B: opioid intoxication Explanation: Exam anchor: opioid intoxication. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 160,
    "front": "In the case of which infectious disease it IS NOT possible to apply prevention by vaccination?",
    "back": "Answer: D: infectious mononucleosis Explanation: Exam trap: infectious mononucleosis is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "caveat/updated"
  },
  {
    "id": 161,
    "front": "Cerebral palsy is a non-progressing disorder of motoric and postural functions caused by the defect of:",
    "back": "Answer: A: CNS during its development (during pregnancy, labor or in perinatal period) Explanation: Exam anchor: CNS during its development (during pregnancy, labor or in perinatal period). Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 162,
    "front": "A woman came to the GP with her one-year-old son because of a trivial viral infection of the upper respiratory tract. The doctor noticed paleness of the child. The boy had been fed non-modified cow milk since 6 months of age. He is unwilling to eat anything else than porridge with cow milk. The complete blood count shows: RBC 4 x 10 /µL, Hgb 9.0 g/dL, MCV 60 fL, RDW 18%, PLT 480 x 10 /µL, WBC 9 x 10 /µL. The child had NEVER taken any medications. Indicate the correct management:",
    "back": "Answer: E: iron-deficiency anemia should be diagnosed and an oral iron preparation should be prescribed as well as diet modification should be advised Explanation: Exam anchor: iron-deficiency anemia should be diagnosed and an oral iron preparation should be prescribed as well as diet modification should be advised. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 163,
    "front": "A 4-month-old girl was admitted to the hospital because of low weight gain, after the second episode of rectal prolapse. In the past she presented prolonged jaundice till 5 week of age. Currently, sporadic cough. On physical examination, apart from dystrophy, without significant abnormalities. Until now she has been neither diagnosed, nor hospitalized. In lab. evaluation the concentrations of serum ions were as follows: Na-128 mmol/l, Cl-88 mmol/l. What is the most probable diagnosis?",
    "back": "Answer: C: cystic fibrosis Explanation: Exam anchor: cystic fibrosis. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 164,
    "front": "Which of the following concerning urinary tract infection (UTI) in children is FALSE ?",
    "back": "Answer: B: risk of developing the disease is greater in female newborns Explanation: Exam trap: risk of developing the disease is greater in female newborns is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 165,
    "front": "Which of the following is the most probable diagnosis in a 12-year-old patient with decreased concentrations of complement component 3 (C3) and normal concentrations of complement component 4 (C4)?",
    "back": "Answer: B: postinfectious glomerulonephritis Explanation: Exam anchor: postinfectious glomerulonephritis. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 166,
    "front": "Which of the following diagnoses should be considered the most probable in a boy over 2 years of age with increased levels of transaminases and phosphocreatine kinase if the mother reports that her son is clumsy?",
    "back": "Answer: E: muscular dystrophy Explanation: Exam anchor: muscular dystrophy. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 167,
    "front": "A 15-month-old child who was vaccinated according to the current immunization schedule should be immune to tuberculosis, diphtheria, tetanus, pertussis and:",
    "back": "Answer: C: hepatitis B, Haemophilus influenzae type B, pneumococci, rotaviruses, poliomyelitis, measles, mumps, rubella Explanation: Polish vaccine schedules change over time; use the current PSO rather than memorizing an old year-specific sequence. The answer here has been checked against the current schedule logic.",
    "status": "caveat/updated"
  },
  {
    "id": 168,
    "front": "A 10-year-old girl was admitted to the ER because of generalized urticaria and difficulty in breathing. The symptoms occurred after she was stung by a bee. At the admission it was stated: disseminated urticaria on the skin, symptoms of wheezing on auscultation, breath rate 56/min, heart rate 110/min, RR 75/50 mmHg. Which of the following variants of therapeutic treatment is correct?",
    "back": "Answer: A: intramuscular administration of epinephrine, intravenous access and administration of fluids Explanation: Exam anchor: intramuscular administration of epinephrine, intravenous access and administration of fluids. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 169,
    "front": "The Streptococcus pyogenes infection may cause various complications in children, mainly related to autoimmune reactions. These complications include: 1) haemolytic-uraemic syndrome (HUS); 2) rheumatic fever; 3) obsessive-compulsive disorder syndrome (PANDAS); 4) acute glomerulonephritis; 5) periodic fever, aphthous stomatitis, pharyngitis and adenitis syndrome (PFAPA)",
    "back": "Answer: D: 2,4 Caveat: Legacy A includes HUS and PFAPA as autoimmune complications of GAS and treats PANDAS as settled. The established post-streptococcal immune complications in this list are acute rheumatic fever and post-streptococcal glomerulonephritis -> D. Explanation: Exam anchor: 2,4. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 170,
    "front": "Indicate true statements concerning urinary tract infections in children: 1) Gram negative bacteria are the most common etiological factor; 2) clinical signs in neonates ARE NOT specific; 3) primary diagnostic procedure is voiding cystourethrography; 4) voiding disturbances are predisposing factors; 5) length of treatment depends on the severity of child condition",
    "back": "Answer: B: 1,2,4,5 Caveat: Legacy A calls VCUG the primary diagnostic procedure for UTI. UTI diagnosis starts with appropriately collected urine urinalysis/culture; VCUG is selective imaging. Statements 1,2,4,5 are true -> B. Explanation: Exam anchor: 1,2,4,5. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 171,
    "front": "A 16-year-old patient complaining of persistent pruritus for 3 months uses immunosuppressive treatment in the form of ointments and creams, prescribed by a dermatologist, with no result. In the patient's relation her neck has recently ‘swelled’, and she reports also weakness and reduced exercise tolerance. On the examination, tachypnea, a bundle of enlarged lymph nodes (the largest with a diameter of 3 cm) in the region of the sternocleidomastoid muscle and the supraclavicular area on the same side were noted. An increased vascularization of the chest skin is visible. The patient should be…",
    "back": "Answer: B: center dealing with cancer treatment in children, because of the suspicion of superior vena cava syndrome secondary to lymphoma Explanation: Exam anchor: center dealing with cancer treatment in children, because of the suspicion of superior vena cava syndrome secondary to lymphoma. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 172,
    "front": "In a 15-year-old girl with asymptomatic bacteriuria you should:",
    "back": "Answer: D: not administer any pharmacotherapy Explanation: Exam anchor: not administer any pharmacotherapy. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 173,
    "front": "The foramen ovale is located:",
    "back": "Answer: B: in intraatrial septum Explanation: Exam anchor: in intraatrial septum. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 174,
    "front": "The most common cause of signs and symptoms of Cushing’s syndrome is:",
    "back": "Answer: C: chronic administration of glucocorticoids Explanation: Exam anchor: chronic administration of glucocorticoids. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 175,
    "front": "The diagnosis of urinary tract infection in newborns can be established on the basis of:",
    "back": "Answer: A: any number of Gram-negative bacteria in urine taken by suprapubic puncture Explanation: For urine culture in a non-toilet-trained infant, suprapubic aspiration has the lowest contamination; catheter collection is also acceptable. Bag cultures are not diagnostic.",
    "status": "caveat/updated"
  },
  {
    "id": 176,
    "front": "The main features of WAGR syndrome are:",
    "back": "Answer: C: aniridia, Wilms tumor, genitourinary malformations, mental retardation Explanation: Exam anchor: aniridia, Wilms tumor, genitourinary malformations, mental retardation. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 177,
    "front": "A 15-year-old boy called at the doctor’s office because of discomfort, runny nose and 2 3 5 cough. The measured temperature was 37.5°C. On physical examination reddish and swollen throat and rhinitis. The physician assigned the patient 1 point according to Centor/McIsaac criteria. Consequently, he should treat the boy with:",
    "back": "Answer: C: symptomatic treatment only Explanation: Exam anchor: symptomatic treatment only. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 178,
    "front": "The indication for an urgent hospitalization of a child with bronchial asthma is:",
    "back": "Answer: D: difficulties in eating, drinking and speaking Explanation: Asthma is variable expiratory airflow limitation with wheeze/cough/dyspnoea; inhaled corticosteroid-containing therapy reduces exacerbation risk.",
    "status": "caveat/updated"
  },
  {
    "id": 179,
    "front": "An infant received the second dose of DTP vaccine 20 days after the first one. What is the proper management in this case?",
    "back": "Answer: B: second dose should be considered not realized and it should be repeated after 4 weeks; next doses should be given according to the schedule Explanation: Exam anchor: second dose should be considered not realized and it should be repeated after 4 weeks; next doses should be given according to the schedule. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 180,
    "front": "Indicate the true statement concerning Ewing’s sarcoma:",
    "back": "Answer: B: primary lesion causes laminated periosteal reaction Explanation: Exam anchor: primary lesion causes laminated periosteal reaction. Retain this as the single best answer for the clinical fact tested in this stem. Q181-Q210",
    "status": "valid"
  },
  {
    "id": 181,
    "front": "Indicate the FALSE statement of hives:",
    "back": "Answer: A: hives is not accompanied by anaphylactic shock Explanation: Exam trap: hives is not accompanied by anaphylactic shock is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "caveat/updated"
  },
  {
    "id": 182,
    "front": "A thirteen-year-old boy has been complaining for several weeks of abdominal pain and black stools. What test should be performed first?",
    "back": "Answer: D: endoscopy with biopsy Explanation: Exam anchor: endoscopy with biopsy. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 183,
    "front": "In a 10-day-old neonate marked bilateral edemas of the limbs and periorbital edemas occurred. The most probable cause is:",
    "back": "Answer: A: nephrotic syndrome of the Finnish type Explanation: Exam anchor: nephrotic syndrome of the Finnish type. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 184,
    "front": "Which of the following is recommended in a 2-year old child diagnosed with acute pyelonephritis?",
    "back": "Answer: D: start antibiotic therapy as soon as possible Explanation: Exam anchor: start antibiotic therapy as soon as possible. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 185,
    "front": "Indicate the FALSE statement concerning broncholitis:",
    "back": "Answer: D: its treatment usually involves a broad-spectrum antibiotic, bronchodilators, high doses of glucocorticosteroids Explanation: Exam trap: its treatment usually involves a broad-spectrum antibiotic, bronchodilators, high doses of glucocorticosteroids is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 186,
    "front": "Indicate the true statements concerning hand, foot and mouth disease (HFMD): 1) disease is caused by enteroviruses; 2) disease is caused by a parvovirus; 3) infection is observed only in infants; 4) animals may be a source of infection; 5) symptomatic treatment is used",
    "back": "Answer: C: 1,5 Caveat: Legacy A says HFMD occurs only in infants. HFMD is an enteroviral illness across young childhood, with human-to-human transmission and symptomatic treatment -> 1 and 5 = C. Explanation: Exam anchor: 1,5. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 187,
    "front": "In the case of autosomal recessive disease the risk of the disease in the offspring of the parents who are both ill is:",
    "back": "Answer: E: 100% Explanation: Exam anchor: 100%. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 188,
    "front": "The most common cause of Cushing’s syndrome in children is:",
    "back": "Answer: A: treatment with glucocorticosteroids Explanation: Exam anchor: treatment with glucocorticosteroids. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 189,
    "front": "Which of the following infectious diseases is characterized by the incubation period between 11 to 21 days?",
    "back": "Answer: C: varicella Explanation: Exam anchor: varicella. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 190,
    "front": "Frothy bubbles of mucous in the oral and nasal cavity of a newborn, despite regular clearing, accompanied with a loud heart murmur and limbs defect is characteristic of:",
    "back": "Answer: D: oesophageal atresia Explanation: Exam anchor: oesophageal atresia. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 191,
    "front": "Indicate the true statement concerning tuberculosis in children:",
    "back": "Answer: A: highest susceptibility to M. tuberculosis infection is observed in children under 3 years of age Explanation: Exam anchor: highest susceptibility to M. tuberculosis infection is observed in children under 3 years of age. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 192,
    "front": "Symptoms of peripheral motor neuron damage include: 1) flaccid paresis; 2) spastic paresis; 3) hyperreflexia; 4) hyporeflexia; 5) decreased muscle tone; 6) increased muscle tone 7) fasciculations",
    "back": "Answer: A: 1,4,5,7 Explanation: Exam anchor: 1,4,5,7. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 193,
    "front": "The characteristic features of cystic fibrosis DO NOT include:",
    "back": "Answer: B: chronic infection with Mycoplasma pneumoniae and/or Chlamydia trachomatis Explanation: Exam trap: chronic infection with Mycoplasma pneumoniae and/or Chlamydia trachomatis is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 194,
    "front": "Indicate true statements concerning the anterior fontanel: 1) immediately after childbirth the skull bones overlap and the fontanel may seem smaller; 2) anterior fontanel correctly closes 6-8 weeks after childbirth; 3) tense fontanel raises suspicion of dehydration; 4) premature ossification (closing) of the anterior fontanel may lead to microcephaly; 5) delayed ossification (closing) of the anterior fontanel is observed, for example in rickets; 6) anterior fontanel correctly closes between 9 and 18 month of life",
    "back": "Answer: B: 1,4,5,6 Caveat: Legacy A says the anterior fontanel normally closes at 6-8 weeks. That timing applies to the posterior fontanel. The anterior fontanel usually closes in the second year; early closure may accompany craniosynostosis/microcephaly and delayed closure occurs in rickets -> B. Explanation: Exam anchor: 1,4,5,6. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 195,
    "front": "Erythrocyturia in children is characteristic of: 1) nephritic syndrome; 2) acute pyelonephritis; 3) acute glomerulonephritis; 4) proximal tubular acidosis; 5) kidney stones",
    "back": "Answer: A: 1,3,5 Explanation: Exam anchor: 1,3,5. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 196,
    "front": "A 3-year-old boy fits to 39 °C, is apathetic. During the examination, the doctor found on the skin of the right thigh three skin lesions. What characteristics of the skin lesions can point to meningococcal sepsis?",
    "back": "Answer: A: they appeared suddenly, do not disappear under pressure, have a dark red color Explanation: Paediatric sepsis is infection with life-threatening organ dysfunction; treatment prioritizes early antibiotics, cautious reassessed fluids and vasoactive support when needed.",
    "status": "valid"
  },
  {
    "id": 197,
    "front": "Which joints are most frequently involved in the oligoarthritis onset of juvenile idiopathic arthritis?",
    "back": "Answer: C: knees Explanation: Exam anchor: knees. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 198,
    "front": "In the laboratory studies in children with type 1 diabetes in the course of ketoacidosis the following can be observed:",
    "back": "Answer: A: hyperglycaemia, ketonemia, ketonuria and metabolic acidosis Explanation: DKA = hyperglycaemia + ketosis + metabolic acidosis; treat with fluids, insulin and electrolyte monitoring while watching closely for cerebral injury.",
    "status": "valid"
  },
  {
    "id": 199,
    "front": "Influenza vaccines can be used in children at the age of:",
    "back": "Answer: A: > 6 months Explanation: Exam anchor: > 6 months. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 200,
    "front": "Which of the following are the attenuated vaccines given obligatorily to all children? 1) BCG vaccine against tuberculosis; 2) IPV polio vaccine; 3) influenza vaccine; 4) diphtheria, pertussis and tetanus vaccine; 5) measles, mumps and rubella vaccine; 6) varicella vaccine. The correct answer is",
    "back": "Answer: B: 1,5 Explanation: Exam anchor: 1,5. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 201,
    "front": "Physical examination of a 4-month-old infant revealed signs of dyspnea, tachypnea 75/ min and diffused rales on lung auscultation. The child was born at 28 hbd, with the birth weight of 820 g. Oxygen therapy was necessary for the first two months of life. Body temperature was 36.8 °C, CRP 1 mg/L. A chest X-ray showed diffused small infiltrations within the lungs. The most probable diagnosis is:",
    "back": "Answer: E: bronchopulmonary dysplasia Explanation: Exam anchor: bronchopulmonary dysplasia. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 202,
    "front": "A urine bacterial culture in a neonate should be performed using the urine collected: 1) to sterile container by the „mid-stream” method; 2) through the catheter placed in the urinary bladder; 3) with suprapubic aspiration; 4) with a sterile pouch attached to the skin of the perineum",
    "back": "Answer: B: 1,2,3 Caveat: Legacy A includes bag-collected urine as suitable for neonatal culture. Bag urine has unacceptable contamination for culture confirmation; catheterization, suprapubic aspiration and a properly obtained clean/midstream specimen when feasible are the defensible methods -> B after repairing the merged options. Explanation: In a suspected UTI, a positive bag specimen must be confirmed with a properly collected sample. The clinically useful statements are those supporting pyuria/bacteriuria assessment and reliable culture collection.",
    "status": "caveat/updated"
  },
  {
    "id": 203,
    "front": "Which set of symptoms is characteristic of acute glomerulonephritis in children?",
    "back": "Answer: A: haematuria, oedema, hypertension Explanation: Nephritic syndromes cause haematuria, hypertension, oedema and reduced GFR; post-streptococcal GN typically follows infection after a latent interval.",
    "status": "valid"
  },
  {
    "id": 204,
    "front": "Acute bronchitis in children is most commonly caused by:",
    "back": "Answer: E: viruses (Parainfluenzae, Adenovirus, Rhinovirus, RS-virus) Explanation: Exam anchor: viruses (Parainfluenzae, Adenovirus, Rhinovirus, RS-virus). Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 205,
    "front": "Indicate the FALSE statement concerning chemoprophylaxis after the contact with a patient infected with Neisseria meningitidis:",
    "back": "Answer: C: it consists in acyclovir given orally at a dose of 4 x 200 mg Explanation: Exam trap: it consists in acyclovir given orally at a dose of 4 x 200 mg is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 206,
    "front": "WHICH OF THE FOLLOWING IS NOT recommended for the feeding in the treatment of cow’s milk protein allergy? 1) soy protein-based formula; 2) breast-feeding by a mother on the elimination diet; 3) amino acid-based formula; 4) extensively hydrolyzed formula; 5) partially hydrolyzed formula",
    "back": "Answer: A: 1,5 Explanation: Exam trap: 1,5 is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 207,
    "front": "Which of the following is more common among teenagers than pre-school children?",
    "back": "Answer: A: malignant bone tumors Explanation: Exam anchor: malignant bone tumors. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 208,
    "front": "Lumbar puncture is CONTRAINDICATED when the following conditions are present: 1) bradycardia; 2) impaired coagulation; 3) cardio-respiratory insufficiency; 4) tachypnea; 5) high fever; 6) opisthotonus",
    "back": "Answer: A: 1,2,3 Explanation: Exam anchor: 1,2,3. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 209,
    "front": "General symptoms of Hodgkin’s lymphoma in children include: 1) fever > 38˚C; 2) lower limb pain; 3) night sweats; 4) weight loss > 10% in the last six months; 5) muscle pain",
    "back": "Answer: C: 1,3,4 Caveat: Legacy A substitutes limb/muscle pain for the classic B symptoms. Hodgkin B symptoms are fever >38 C, drenching night sweats and >10% weight loss in 6 months -> 1,3,4 = C. Explanation: Hodgkin lymphoma staging uses Ann Arbor/Cotswolds concepts; B symptoms are fever, drenching night sweats and >10% weight loss in 6 months.",
    "status": "caveat/updated"
  },
  {
    "id": 210,
    "front": "A mother comes with her obese 5-year-old son to the doctor office. As an infant he had difficulty in eating, was consulted due to reduced muscle tone. During his stay in the office the child presents skin-picking behaviour. The most probable diagnosis is:",
    "back": "Answer: A: Prader-Willi syndrome Explanation: Exam anchor: Prader-Willi syndrome. Retain this as the single best answer for the clinical fact tested in this stem. Q211-Q240",
    "status": "valid"
  },
  {
    "id": 211,
    "front": "Which of the following CANNOT be related to hyperthyroidism?",
    "back": "Answer: D: increased cholesterol concentration Explanation: Exam trap: increased cholesterol concentration is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 212,
    "front": "Typical hemolytic-uremic syndrome in children, classified as thrombotic microangiopathy, is characterized by the following triad of symptoms:",
    "back": "Answer: D: hemolytic anemia, thrombocytopenia, acute kidney injury Explanation: Exam anchor: hemolytic anemia, thrombocytopenia, acute kidney injury. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 213,
    "front": "A maculopapular skin rash, cradle cap not responding to the treatment, swelling of the gums and abnormal teething, soft on palpation bulges of the skull, and X-ray revealing osteolytic lesions in bones of the cranial vault in a 1-year-old child are characteristic of:",
    "back": "Answer: E: Langerhans cell histiocytosis Explanation: Exam anchor: Langerhans cell histiocytosis. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 214,
    "front": "Which neoplastic tumors may develop in the abdominal cavity of a child? 1) Wilms’ tumor; 2) neuroblastoma; 3) non-Hodgkin lymphoma; 4) medulloblastoma; 5) dysgerminoma",
    "back": "Answer: D: 1,2,3,5 Caveat: Legacy A lists only Wilms and neuroblastoma. Abdominal paediatric malignancies can also include non-Hodgkin lymphoma and ovarian germ-cell tumour/dysgerminoma; medulloblastoma is intracranial -> D. Explanation: Exam anchor: 1,2,3,5. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 215,
    "front": "A 12-year-old boy presents in GP's office after cleaning and dressing a wound on his leg. The patient seeks the recommendation concerning tetanus prophylaxis. The boy received the full basic vaccination against tetanus, and the last booster dosis was given 6 years ago. In the opinion of the GP a risk of tetanus in this case is low. Choose the proper recommendation:",
    "back": "Answer: A: there is no need to give a booster dose of diphtheria-tetanus vaccine Explanation: Exam anchor: there is no need to give a booster dose of diphtheria-tetanus vaccine. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 216,
    "front": "The features of hemolytic-uremic syndrome include: 1) hemolytic anemia; 2) thrombocytosis; 3) thrombocytopenia; 4) acute kidney injury with oliguria; 5) splenomegalia",
    "back": "Answer: A: 1,3,4 Explanation: Exam anchor: 1,3,4. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 217,
    "front": "A child at preschool age is presented in GP’s office. According to the parents the child has been suffering from fever over 7 days and 2 days ago they observed a bilateral facial rash and maculopapular lacy rash on the trunk. The general condition of the child is good. Which diagnosis is the most probable?",
    "back": "Answer: D: erythema infectiosum Explanation: Exam anchor: erythema infectiosum. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 218,
    "front": "Parents removed a tick from the skin of their 5-year-old child. After 10 days erythema occurred in the bite mark and it gradually increased. During physical examination the erythema has 7 cm in diameter and has a clearing in the central part. What is the proper management in this case?",
    "back": "Answer: E: serological diagnostics is not necessary; amoxicillin should be administered for 14 days Explanation: Exam anchor: serological diagnostics is not necessary; amoxicillin should be administered for 14 days. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 219,
    "front": "Juvenile idiopathic arthritis is the most frequently occurring group of chronic inflammatory systemic diseases of connective tissue observed in the developmental age, of unknown aetiology. Which of the following describes the criteria for diagnosing this condition:",
    "back": "Answer: C: onset of the disease at the age under 16, the symptoms of arthritis lasting six weeks minimum and excluding other possible causes of arthritis from the so-called “list of exclusions” Explanation: Exam anchor: onset of the disease at the age under 16, the symptoms of arthritis lasting six weeks minimum and excluding other possible causes of arthritis from the so-called “list of exclusions”. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 220,
    "front": "Which from the drugs listed below is used in the treatment of pertussis? . trimethoprim-sulfamethoxazole; 2. azithromycin; 3. amoxicillin; 4. clarithromycin; 5. penicillin V (phenoxymethylpenicillin)",
    "back": "Answer: A: 1,2,4 Explanation: Pertussis treatment/prophylaxis: macrolides are preferred; TMP-SMX is an alternative when macrolides cannot be used in age-appropriate patients.",
    "status": "caveat/updated"
  },
  {
    "id": 221,
    "front": "A patient with an enlarging erythema on the arm presented at the doctor’s office. Current diameter of the erythema is about 12 cm. The doctor diagnosed erythema migrans based on the medical history and the appearance of the lesion. Which of the following should be the next step?",
    "back": "Answer: E: start the treatment with an antibiotic chosen according to recommendations Explanation: Exam anchor: start the treatment with an antibiotic chosen according to recommendations. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 222,
    "front": "Celiac disease differs from the non-celiac gluten sensitivity in:",
    "back": "Answer: E: detection of partial or complete villous atrophy in the biopsy of the duodenum Explanation: Coeliac disease can cause malabsorption, poor growth, iron deficiency and extraintestinal symptoms; screen with tTG-IgA plus total IgA while the child is eating gluten.",
    "status": "valid"
  },
  {
    "id": 223,
    "front": "Which of the following are signs or symptoms of hypercortisolemia in children? 1) accelerated growth; 2) excessive weight gain; 3) delayed growth; 4) acne; 5) hyperpigmentation",
    "back": "Answer: B: 2,3,4 Caveat: Legacy A pairs weight gain with accelerated growth. Paediatric hypercortisolism classically causes weight gain with growth deceleration and can cause acne -> 2,3,4 = B. Explanation: Exam anchor: 2,3,4. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 224,
    "front": "In a 4-year-old child with recurrent respiratory tract infections, hearing impairment and snoring the physical examination showed high-arched palate, distoclusion, mouth breathing and the presence of exudation in the nasal ducts. The most probable cause of the abnormalities is:",
    "back": "Answer: C: hypertrophy of the pharyngeal tonsil Explanation: Exam anchor: hypertrophy of the pharyngeal tonsil. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 225,
    "front": "Which of the following concerning pertussis is FALSE ?",
    "back": "Answer: B: vaccination or being ill gives permanent immunity Explanation: Pertussis is treated and close-contact prophylaxis is given with a macrolide, commonly azithromycin; young infants are at highest risk of severe disease.",
    "status": "caveat/updated"
  },
  {
    "id": 226,
    "front": "WHICH OF THE FOLLOWING IS NOT a cause of arterial hypertension in neonates?",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: Neonatal hypertension has several renal/renovascular, medication, endocrine and iatrogenic causes, and more than one listed choice can be disputed as “not a cause.” The item does not support one stable exception. Explanation: INVALID: neonatal hypertension has a broad differential. Renal/renovascular disease, medications, endocrine disorders (including hypertensive CAH variants) and other listed mechanisms can all be relevant; the stem does not yield one clean exception.",
    "status": "invalid/outdated"
  },
  {
    "id": 227,
    "front": "Skin lesions that occur in children, especially those in immunosuppression, in a form of small dome-shaped and pearly papules with a dimpled center are related to:",
    "back": "Answer: E: molluscum contagiosum Explanation: Exam anchor: molluscum contagiosum. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 228,
    "front": "Which of the following CANNOT be a symptom of acute adrenocortical insufficiency in children?",
    "back": "Answer: E: hyperglycemia Explanation: Exam trap: hyperglycemia is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "caveat/updated"
  },
  {
    "id": 229,
    "front": "In a neonate the signs of respiratory distress are observed after the birth: cyanosis, dyspnoe, tachypnoe and scaphoid abdomen. These are indicative of:",
    "back": "Answer: D: diaphragmatic hernia Explanation: Exam anchor: diaphragmatic hernia. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 230,
    "front": "A pregnant woman (13 weeks of pregnancy) suffering from herpes zoster is concerned about the influence of this infection on her foetus. Choose the right answer concerning this situation:",
    "back": "Answer: A: herpes zoster in a pregnant woman doesn't create a risk for the foetus Explanation: Exam anchor: herpes zoster in a pregnant woman doesn't create a risk for the foetus. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 231,
    "front": "Which of the following scales is used to assess the maturation of a neonate?",
    "back": "Answer: D: Ballard Explanation: Exam anchor: Ballard. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 232,
    "front": "WHICH OF THE FOLLOWING IS NOT a CONTRAINDICATION to the breastfeeding?",
    "back": "Answer: D: chronic hepatitis C in the mother Explanation: Exam trap: chronic hepatitis C in the mother is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 233,
    "front": "Mitochondrial disease is transmitted to the offspring:",
    "back": "Answer: A: by mother Explanation: Exam anchor: by mother. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 234,
    "front": "Absolute CONTRAINDICATIONS to childhood vaccination include:",
    "back": "Answer: D: anaphylactic reaction to a vaccine component in history Explanation: Exam anchor: anaphylactic reaction to a vaccine component in history. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 235,
    "front": "The drug used in the first line of the treatment of idiopathic nephrotic syndrome in children is:",
    "back": "Answer: A: prednisone Explanation: Nephrotic syndrome = heavy proteinuria, hypoalbuminaemia, oedema and hyperlipidaemia; minimal-change disease is common in young children and is usually steroid-responsive.",
    "status": "valid"
  },
  {
    "id": 236,
    "front": "Gastroesophageal reflux in physiological conditions is a short-term phenomenon. But if it lasts long or the episodes of reflux are frequent it could be the cause of gastroesophageal reflux disease (GERD). Alarming signs of GERD DO NOT include:",
    "back": "Answer: C: heartburn Explanation: Most infant reflux is physiologic; alarm signs such as dysphagia, haematemesis, weight loss/faltering growth or neurologic/systemic illness prompt evaluation for GERD/other disease.",
    "status": "valid"
  },
  {
    "id": 237,
    "front": "Indicate the FALSE statement concerning Schönlein-Henoch purpura:",
    "back": "Answer: A: proteinuria and hematuria are necessary for the diagnosis Explanation: IgA vasculitis (Henoch-Schoenlein) = palpable purpura + abdominal pain + arthralgia +/- renal involvement.",
    "status": "caveat/updated"
  },
  {
    "id": 238,
    "front": "A 14-year-old patient was admitted to the hospital because of hypertension, edemas, proteinuria and microscopic hematuria. The lab tests showed increased ASO titres, low levels of C3 complement, normal renal function. What is the most probable diagnosis?",
    "back": "Answer: A: acute poststreptococcal glomerulonephritis Explanation: Exam anchor: acute poststreptococcal glomerulonephritis. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 239,
    "front": "Very high values of acute phase indicators are characteristic of:",
    "back": "Answer: B: systemic onset juvenile idiopathic arthritis Explanation: Exam anchor: systemic onset juvenile idiopathic arthritis. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 240,
    "front": "A 5-year-old boy is brought to the physician because of a 2-day history of fever and painful swelling of the left ankle. In the past he had recurrent cervical lymphadenitis caused by catalase- positive staphylococcus and was hospitalized twice because of pneumonia. Nitroblue tetrazolium blood test shows no color change. Which of the following is the most likely mechanism of the disorder?",
    "back": "Answer: C: impaired phagocytic oxidative metabolism Explanation: Exam anchor: impaired phagocytic oxidative metabolism. Retain this as the single best answer for the clinical fact tested in this stem. Q241-Q270",
    "status": "caveat/updated"
  },
  {
    "id": 241,
    "front": "The sign and symptoms of hyperparathyroidism DO NOT include:",
    "back": "Answer: C: cirrhosis of the liver Explanation: PTH raises calcium and lowers phosphate through renal phosphate wasting; PTH resistance produces the opposite phosphate pattern.",
    "status": "valid"
  },
  {
    "id": 242,
    "front": "Cafe-au-lait spots are typical of:",
    "back": "Answer: C: neurofibromatosis type 1 Explanation: Exam anchor: neurofibromatosis type 1. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 243,
    "front": "Which of the following hormones are released from the posterior lobe of the pituitary gland?",
    "back": "Answer: C: vasopressin and oxytocin Explanation: Exam anchor: vasopressin and oxytocin. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 244,
    "front": "Currently, the most common cause of acquired heart disease in children is:",
    "back": "Answer: C: Kawasaki disease Explanation: Exam anchor: Kawasaki disease. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 245,
    "front": "WHICH OF THE FOLLOWING IS NOT typical of Henoch-Schönlein purpura?",
    "back": "Answer: E: enlargement of the spleen Explanation: IgA vasculitis (Henoch-Schoenlein) = palpable purpura + abdominal pain + arthralgia +/- renal involvement.",
    "status": "valid"
  },
  {
    "id": 246,
    "front": "The syndrome inherited in an autosomal dominant pattern, with the phenotype most similar to Turner syndrome (short stature, short neck, low ears), and with additional pulmonary artery stenosis and hypertrophic cardiomyopathy is:",
    "back": "Answer: A: Noonan syndrome Explanation: Turner syndrome (45,X or mosaic) classically causes short stature and gonadal dysgenesis; screen for cardiac, renal and thyroid disease.",
    "status": "valid"
  },
  {
    "id": 247,
    "front": "The most common solid malignant tumor in children is:",
    "back": "Answer: C: brain tumor Explanation: Exam anchor: brain tumor. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 248,
    "front": "Which of the following signs and symptoms IS NOT typical of iron-deficiency anemia?",
    "back": "Answer: E: bradycardia Explanation: Exam trap: bradycardia is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 249,
    "front": "Live, attenuated vaccines include: 1) BCG; 2) DTP; 3) MMR; 4) OPV; 5) IPV",
    "back": "Answer: C: 1,3,4 Caveat: Legacy A includes DTP and omits BCG. Live attenuated vaccines in the list are BCG, MMR and OPV; DTP and IPV are inactivated -> C. Explanation: Exam anchor: 1,3,4. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 250,
    "front": "Which of the following methods is deciding in the diagnosis of food allergy?",
    "back": "Answer: D: oral provocation test with suspicious foods Explanation: Food allergy diagnosis starts with a compatible history; targeted IgE testing supports sensitization, while supervised oral food challenge is the reference standard when needed.",
    "status": "valid"
  },
  {
    "id": 251,
    "front": "Indicate the FALSE statement concerning HHV6 virus infection:",
    "back": "Answer: A: it is an etiological factor of erythema contagiosum Explanation: Exam trap: it is an etiological factor of erythema contagiosum is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 252,
    "front": "A 4-year old boy presents with a fever lasting 6 days. Which of the following conditions, if they were a part of this patient's presentation, would not cause suspicion of Kawasaki disease?",
    "back": "Answer: D: thrombocytopenia Explanation: Kawasaki disease: >=5 days fever plus mucocutaneous findings; coronary aneurysm prevention is why IVIG + aspirin matters.",
    "status": "caveat/updated"
  },
  {
    "id": 253,
    "front": "An anxious mother reports symptoms that according to her and a parents' website require immunological diagnostics. She asks you to clarify which of the following could indicate primary immunodeficiency in her 1-year-old son: 1) three upper respiratory tract viral infections; 2) otitis media; 3) pneumonia; 4) recurrent oral aphthae; 5) persistent cradle cap; 6) lack of weight gain and the inhibition of normal development",
    "back": "Answer: E: only 6 Caveat: The source treats common isolated childhood problems as sufficient PID indicators. A persistent failure to thrive/developmental arrest is the strongest warning sign among these choices; the other single common events are not enough by themselves -> E. Explanation: Exam anchor: only 6. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 254,
    "front": "A 12-year-old dyslectic boy complains of painful nodules on the abdomen. At least 8 spots of cafe au lait type with the diameter of about 10 mm were noted as well as freckle-like dots in the armpits. Which specialist outpatient clinic should he be immediately referred to?",
    "back": "Answer: E: neurological one, because the diagnostic of neurocutaneous conditions is necessary Explanation: Exam anchor: neurological one, because the diagnostic of neurocutaneous conditions is necessary. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 255,
    "front": "Enteroviral infections in children DO NOT cause:",
    "back": "Answer: E: influenza Explanation: Exam trap: influenza is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 256,
    "front": "Which of the following vaccines may be given to a woman at the 30th week of gestation? 1) against influenza (inactivated vaccine); 2) against chickenpox; 3) against tuberculosis; 4) against diphtheria, tetanus and pertussis (dTpa-an adult type of vaccine); 5) against measles, mumps and rubella",
    "back": "Answer: C: 1,4 Caveat: Legacy A omits Tdap. Inactivated influenza vaccine and Tdap are both appropriate during pregnancy; live varicella, BCG and MMR are contraindicated -> C. Explanation: Exam anchor: 1,4. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 257,
    "front": "Hypercalcemia may be caused by any of the following, EXCEPT for:",
    "back": "Answer: E: hypoparathyroidism Explanation: Exam trap: hypoparathyroidism is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 258,
    "front": "Which of the following is the cytostatic of particularly high cardiotoxicity, which can lead to congestive heart failure?",
    "back": "Answer: C: doxorubicin Explanation: Exam anchor: doxorubicin. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 259,
    "front": "Haemolytic-uraemic syndrome is:",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: “HUS” is not one aetiology: typical STEC-HUS, complement-mediated atypical HUS and pneumococcal HUS differ. Severe ADAMTS13 deficiency instead indicates TTP. The option set conflates entities, so one universal answer is unsafe. Explanation: INVALID WORDING: “HUS” is heterogeneous. Typical HUS is most often Shiga-toxin-associated; complement-mediated atypical HUS and pneumococcal HUS are different entities. Severe ADAMTS13 deficiency points to TTP, not typical HUS.",
    "status": "invalid/outdated"
  },
  {
    "id": 260,
    "front": "According to the current Polish National Program of Immunizations, which of the statements below is FALSE in case of a child with the birth weight of 1700g?",
    "back": "Answer: B: vaccination against hepatitis B should be postponed until the body weight has reached 2000 g Explanation: Exam trap: vaccination against hepatitis B should be postponed until the body weight has reached 2000 g is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 261,
    "front": "¹²³I-metaiodobenzylguanidine (MIBG) scintigraphy is a method used in children for the diagnosis of:",
    "back": "Answer: B: neuroblastoma Explanation: Exam anchor: neuroblastoma. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 262,
    "front": "Secondary drug-induced diabetes can occur after the following drugs EXCEPT for:",
    "back": "Answer: E: vildagliptin Explanation: Exam trap: vildagliptin is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 263,
    "front": "Which of the following symptoms are typical of systemic lupus erythematosus?",
    "back": "Answer: C: photosensitivity, headache, pancytopenia Explanation: Exam anchor: photosensitivity, headache, pancytopenia. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 264,
    "front": "A 6-year-old boy demonstrated itchy maculopapular rash and nasal congestion twice after the ingestion of natural yogurt. The symptoms persisted up to several hours. The boy's parents suspect that their child has signs of allergy to cow milk protein. Which of the following tests would be the best to diagnose food allergy?",
    "back": "Answer: C: double blind, placebo-controlled food challenge Explanation: Food allergy diagnosis starts with a compatible history; targeted IgE testing supports sensitization, while supervised oral food challenge is the reference standard when needed.",
    "status": "valid"
  },
  {
    "id": 265,
    "front": "Meningeal irritation symptoms observed in children include: 1) Flatau’s sign; 2) Brudzinski’s symphyseal sign; 3) Lasègue’s sign; 4) Amoss’ sign; 5) Kernig’s sign",
    "back": "Answer: C: 1,2,4,5 Caveat: Legacy A includes Lasegue, a radicular/sciatic stretch sign. Flatau, Brudzinski symphyseal, Amoss and Kernig are meningeal irritation signs -> C. Explanation: Exam anchor: 1,2,4,5. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 266,
    "front": "The presence of abscesses, emphysema bladders, pneumothorax and pleural abscess in the radiological image of the lungs in a child indicates the diagnosis of:",
    "back": "Answer: B: staphylococcal pneumonia Explanation: Exam anchor: staphylococcal pneumonia. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 267,
    "front": "Subacute sclerosing panencephalitis (SSPE) occurs with higher rate in children suffering in the early childhood (under 2 years of age) from:",
    "back": "Answer: A: measles Explanation: Exam anchor: measles. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 268,
    "front": "In the case of erythema migrans diagnosed in a 4-year-old boy the following antibiotics can be used: 1) amoxicillin; 2) doxycycline; 3) cefuroxime axetil; 4) azithromycin; 5) clarithromycin",
    "back": "Answer: A: 1,2,3 Explanation: Current Lyme erythema migrans therapy includes doxycycline, amoxicillin or cefuroxime; short-course doxycycline is acceptable in children of any age when indicated.",
    "status": "caveat/updated"
  },
  {
    "id": 269,
    "front": "Which of the following is the most common cause of haemolytic-uraemic syndrome in children?",
    "back": "Answer: C: contact with a person suffering from diarrhea Explanation: Exam anchor: contact with a person suffering from diarrhea. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 270,
    "front": "Which of the following are used in the treatment of von Willebrand disease? 1) factor VIII concentrate with von Willebrand factor; 2) factor IX concentrate; 3) intravenous immunoglobulins; 4) dexamethasone; 5) desmopressin",
    "back": "Answer: B: 1,5 Caveat: Legacy A includes factor IX, IVIG and dexamethasone. vWD treatment uses desmopressin in suitable patients and vWF-containing factor concentrate when needed -> 1,5 = B. Explanation: Exam anchor: 1,5. Retain this as the single best answer for the clinical fact tested in this stem. Q271-Q300",
    "status": "caveat/updated"
  },
  {
    "id": 271,
    "front": "A 2-year-old boy was admitted to the hospital because of a high fever in the last 7 days and neck lymphadenopathy. On the 5th day of the fever maculopapular eruptions occurred in the area of the crotch and on the trunk. Conjunctivitis, red lips and „strawberry” tongue were also noted. Laboratory tests showed elevated markers of inflammation (CRP), thrombocytosis, anemia, ALT = 100 U/L, AST = 85 U/L, normal coagulation tests. Which of the following diagnoses is the most probable?",
    "back": "Answer: B: Kawasaki disease Explanation: Exam anchor: Kawasaki disease. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 272,
    "front": "Which of the following is used for the prophylaxis or the treatment of bleeding in von Willebrand disease?",
    "back": "Answer: A: desmopressin Explanation: Exam anchor: desmopressin. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 273,
    "front": "The most common cause of idiopathic nephrotic syndrome in children is:",
    "back": "Answer: A: minimal change nephropathy Explanation: Nephrotic syndrome = heavy proteinuria, hypoalbuminaemia, oedema and hyperlipidaemia; minimal-change disease is common in young children and is usually steroid-responsive.",
    "status": "valid"
  },
  {
    "id": 274,
    "front": "Jaundice, low hemoglobin levels, high reticulocyte count, elevated indirect bilirubin levels, negative direct antiglobulin test, decreased erythrocyte osmotic resistance and abnormal EMA test result point to:",
    "back": "Answer: E: spherocytosis Explanation: Exam anchor: spherocytosis. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 275,
    "front": "A previously healthy 14-year-old girl comes to the physician because of a low-grade fever and a non-productive cough lasted for 7 days. Her temperature is 37.7°C. A few scattered inspiratory crackles are audible. An x-ray of the chest shows interstitial infiltrates and enlarged hilar lymph nodes. Which of the following is the most appropriate initial pharmacotherapy?",
    "back": "Answer: E: clarithromycin or azithromycin Explanation: Exam anchor: clarithromycin or azithromycin. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 276,
    "front": "A 7-month-old boy presented with a 2-day history of fever up to 39 °C. General condition was good. Physical exam revealed pharyngitis only. On the day 3 temperature normalized and multiform macular, pink-red rush fading under pressure was observed,. What is the most probable aetiology of the presented case?",
    "back": "Answer: B: human herpes virus type 6 (HHV-6) Explanation: Exam anchor: human herpes virus type 6 (HHV-6). Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 277,
    "front": "Pleocytosis of 600 cell/µl, with high neutrophil prevalence, high protein concentration (1.5 g/l), high lactic acid concentration, and decreased glucose concentration (decreased cerebrospinal fluid-to-serum ratio) in cerebrospinal fluid analysis points to: 1) bacterial meningitis; 2) viral meningitis; 3) tuberculous meningitis; 4) a necessity for immediate antibiotic therapy; 5) a necessity for antibiotic therapy after positive cerebrospinal fluid culture is obtained",
    "back": "Answer: B: 1,4 Caveat: The source key is attached to an option that disappears in the PDF extraction. The CSF pattern is bacterial meningitis and requires immediate empiric antibiotics, so the visible combination 1 + 4 is B. Explanation: SOURCE LAYOUT CORRECTION: the displayed option A is missing. The clinically correct combination is 1 and 4; the source layout/key is malformed.",
    "status": "caveat/updated"
  },
  {
    "id": 278,
    "front": "The treatment recommended for acute sublaryngeal infection may include: 1) intramuscular dexamethasone; 2) inhalled budesonide; 3) inhalled adrenaline; 4) oral prednisone; 5) intramuscular adrenaline",
    "back": "Answer: E: 1,2,3,4 Caveat: Legacy A omits accepted steroid/adrenaline routes. Croup treatment can include dexamethasone, nebulized budesonide and nebulized epinephrine; oral prednisolone can be used in some settings, whereas IM adrenaline is not routine -> E. Explanation: Croup: corticosteroid (usually dexamethasone; nebulized budesonide is an alternative) + nebulized epinephrine for moderate/severe disease. IM epinephrine is anaphylaxis treatment, not routine croup treatment.",
    "status": "caveat/updated"
  },
  {
    "id": 279,
    "front": "A control chest radiography may be indicated in children treated for pneumonia in the case of: 1) persistent abnormalities on auscultation (at the end of treatment); 2) presence of lung abscess in previous exam; 3) presence of atelectasis in previous exam; 4) presence of pleural exudate in previous exam; 5) severe course of pneumonia",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The source merges C/D options, and modern CAP guidance does not recommend routine follow-up radiography after uncomplicated recovery. Repeat imaging is selective for persistent/recurrent disease or complications, so the legacy combination cannot be safely used. Explanation: INVALID/MALFORMED: the option text is merged in the source. Modern CAP care does not require routine follow-up chest radiography after uncomplicated clinical recovery; repeat imaging is reserved for persistent/recurrent symptoms or complications.",
    "status": "invalid/outdated"
  },
  {
    "id": 280,
    "front": "The mother of a 4-year-old child (with uncontrolled asthma) has been diagnosed with influenza (she has been symptomatic since yesterday). The child is a household contact to the mother. Please indicate the appropriate treatment for the child: 1) start oseltamivir (neuraminidase inhibitor) at a prophylactic dose; 2) recommend seeing the doctor immediately if the symptoms of influenza develop in the child; 3) start oseltamivir at a therapeutic dose if the child has a positive diagnostic test for influenza; 4) start oseltamivir at a prophylactic dose only when the child is symptomatic or has a…",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The source cuts off numbered statements needed to choose the answer. No combination can be audited without inventing missing source content. Explanation: SOURCE TRUNCATION: the stem cuts off statements 4-5. For a high-risk child exposed to influenza, prompt clinician contact and age-appropriate oseltamivir post-exposure prophylaxis can be considered when started within the recommended window; treat promptly if illness develops.",
    "status": "invalid/outdated"
  },
  {
    "id": 281,
    "front": "The parents checked at evening hours into emergency dept. with a 12-year-old son who suffered from nausea, vomiting, pain during micturition that radiated to the left groin area, and left lumbar pain since morning. On physical examination, tenderness in the abdominal area and positive Goldflam syndrome on the left side were noted. Laboratory test results revealed normal blood cell count and kidney function, increased CRP, and erythrocyturia in urinalysis. Abdomen ultrasound showed left-sided hydronephrosis. The left ureter was not visible. The right diagnosis is:",
    "back": "Answer: A: urinary system stones Explanation: Exam anchor: urinary system stones. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 282,
    "front": "Indicate which of the statements regarding children with confirmed COVID-19 infection are true: 1) over 80% of the children tested have mild infection (are mildly symptomatic or asymptomatic); 2) the high risk groups include, between others, newborns, children with chronic kidney disease, children with obesity; 3) infants and children under 2 years of age always need to be seen by a doctor; 4) oxygen saturation measurement is an essential part of the examination; 5) the markers that can be useful to monitor the cytokine storm include IL-6, ferritin, LDH, and D- dimers",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The COVID-19 statements are tied to an earlier pandemic-era epidemiology/vaccine context. Current recommendations and product availability have changed, so a fixed old combination should not be memorized. Explanation: OUTDATED COVID ITEM: most paediatric COVID remains mild, but age <2 alone does not mean every child must be examined in person. Assess severity clinically (including oxygenation when indicated); inflammatory markers such as ferritin/D-dimer are reserved for significant disease/MIS-C evaluation, not routine mild infection.",
    "status": "invalid/outdated"
  },
  {
    "id": 283,
    "front": "Initial ambulatory treatment for severe asthma exacerbation in children under 5 years of age consists in:",
    "back": "Answer: B: administration of inhaled short-acting β-mimetics Explanation: Asthma is variable expiratory airflow limitation with wheeze/cough/dyspnoea; inhaled corticosteroid-containing therapy reduces exacerbation risk.",
    "status": "caveat/updated"
  },
  {
    "id": 284,
    "front": "Indicate FALSE statement regarding allergic contact dermatitis:",
    "back": "Answer: C: the symptoms develop within 15-30 min. after exposure to allergen Explanation: Exam trap: the symptoms develop within 15-30 min. after exposure to allergen is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "caveat/updated"
  },
  {
    "id": 285,
    "front": "In contrast to older children and teenagers, the most common neoplastic diseases among children under 5 years of age include:",
    "back": "Answer: C: acute lymphoblastic leukaemia, neuroblastoma, Wilms’ tumour Explanation: Exam anchor: acute lymphoblastic leukaemia, neuroblastoma, Wilms’ tumour. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 286,
    "front": "A 3-year-old boy was admitted to emergency dept. due to high fever of > 39.5°C lasting for two days, abdominal pain, apathy, lack of appetite and urine odour. Urinalysis showed leukocyturia and the presence of nitrites. Indicate appropriate treatment:",
    "back": "Answer: C: second- or third-generation cephalosporin, intravenously, orally or sequentially Explanation: Exam anchor: second- or third-generation cephalosporin, intravenously, orally or sequentially. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 287,
    "front": "A 6-month-old infant was admitted to emergency dept. because of inexhaustible cry and anxiety persisting for 3 hours. The parents observed leg curling and pale skin. The child refused to take food and vomited twice since the morning. Physical examination revealed abdominal bloating and some palpable mass in the abdomen, normal body temperature, and a trace of “currant jelly- like” stool on a diaper. What is the most likely diagnosis?",
    "back": "Answer: E: intussusception Explanation: Exam anchor: intussusception. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 288,
    "front": "Indicate true statements regarding measles: 1) IgM antibodies appear after 1-2 days of rash; 2) vitamin A at high doses can be recommended for treatment; 3) ascending macular and maculopapular rash is typical; 4) the risk for subacute sclerosing panencephalitis is higher when the infection occurs within the first few years of life; 5) the period of infectivity lasts for up to 5 days after rash resolution",
    "back": "Answer: B: 1,2,4 Caveat: Legacy A calls the measles rash ascending. It is cephalocaudal/descending. IgM appears around the first days of rash, vitamin A is recommended in paediatric measles care, and early-childhood infection increases SSPE risk -> 1,2,4 = B. Explanation: Measles = fever, cough, coryza, conjunctivitis, Koplik spots, then a cephalocaudal maculopapular rash.",
    "status": "caveat/updated"
  },
  {
    "id": 289,
    "front": "Which of the vaccinations within the scope of the Preventive Vaccination Programme are included in the list of vaccinations recommended for medical personnel at the paediatric ward: 1) against hepatitis A virus (HAV); 2) against hepatitis B virus (HBV); 3) against influenza; 4) against pertussis; 5) against Neisseria meningitidis",
    "back": "Answer: D: 2,3,4 Caveat: The source visibly keys A but the A option text is missing. Current Polish occupational guidance consistently prioritizes HepB, seasonal influenza and pertussis for healthcare personnel; meningococcal vaccine is exposure/risk-specific -> displayed D (2,3,4). Explanation: SOURCE LAYOUT CORRECTION: option A is absent in the PDF. The defensible answer is the displayed D combination (2,3,4).",
    "status": "caveat/updated"
  },
  {
    "id": 290,
    "front": "A mother of a 5-month-old infant reports to have fever and cough lasting for 3 days. On the day of examination, type B influenza was diagnosed (confirmed by rapid test result). The mother is breastfeeding and was vaccinated against flu while pregnant. Indicate relevant treatment in relation to the child’s exposure to influenza:",
    "back": "Answer: A: post-exposure prophylaxis using oseltamivir, at 3 mg/kg body weight, in view of the protective benefits for the child Explanation: Oseltamivir post-exposure prophylaxis is an option for high-risk infants/children after close influenza exposure when started promptly; exact dosing/duration is age- and guideline-dependent.",
    "status": "caveat/updated"
  },
  {
    "id": 291,
    "front": "In the diagnostics of Kawasaki disease, the clinically significant symptoms DO NOT include:",
    "back": "Answer: E: pneumonia Explanation: Kawasaki disease: >=5 days fever plus mucocutaneous findings; coronary aneurysm prevention is why IVIG + aspirin matters.",
    "status": "caveat/updated"
  },
  {
    "id": 292,
    "front": "Haematological abnormalities are a common symptom of acute lymphoblastic leukaemia in children. Blood morphology test shows: 1) anaemia; 2) thrombocytopenia; 3) low white blood cell count; 4) normal white blood cell count; 5) high white blood cell count",
    "back": "Answer: A: all of the above Explanation: ALL is the most common childhood leukaemia; prognosis depends on age, WBC, cytogenetics and early treatment response/minimal residual disease.",
    "status": "caveat/updated"
  },
  {
    "id": 293,
    "front": "Indicate true statements regarding mycoplasmatic pneumonia:",
    "back": "Answer: B: in the course of disease, upper respiratory symptoms and mild fever develop gradually Explanation: Exam anchor: in the course of disease, upper respiratory symptoms and mild fever develop gradually. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 294,
    "front": "Although the assessment of cytogenetic and molecular traits IS NOT required in the diagnosis of acute lymphoblastic leukaemia (ALL), they are among the basic classification criteria of ALL. Indicate FALSE statements regarding ALL:",
    "back": "Answer: E: B-ALL is always diagnosed when the number of lymphoblasts > 5% Explanation: ALL is the most common childhood leukaemia; prognosis depends on age, WBC, cytogenetics and early treatment response/minimal residual disease.",
    "status": "caveat/updated"
  },
  {
    "id": 295,
    "front": "A 15-year-old boy came to the primary care unit because of fever (>38.0 C), fatigue, lack of appetite, profuse night sweats and losing weight. Physical examination confirmed weight loss (>= 10% over last six months), painless cervical and supraclavicular lymphadenopathy. Indicate the most probable diagnosis:",
    "back": "Answer: D: Hodgkin’s lymphoma Explanation: Exam anchor: Hodgkin’s lymphoma. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 296,
    "front": "Hodgkin’s lymphoma can be diagnosed based on the findings of all measures listed below, EXCEPT for:",
    "back": "Answer: C: fine-needle aspiration biopsy of lymph node Explanation: Hodgkin lymphoma staging uses Ann Arbor/Cotswolds concepts; B symptoms are fever, drenching night sweats and >10% weight loss in 6 months.",
    "status": "valid"
  },
  {
    "id": 297,
    "front": "The leading cause of viral meningitis in children is:",
    "back": "Answer: A: enteroviruses (EV) Explanation: Bacterial meningitis requires urgent empiric IV antibiotics; CSF pattern helps distinguish bacterial, viral and TB causes when LP is safe.",
    "status": "caveat/updated"
  },
  {
    "id": 298,
    "front": "Early treatment of pertussis in infants (within the first seven days since the onset of symptoms) can reduce the symptoms of the disease. To effectively eradicate pertussis from the nasopharynx, you should administer:",
    "back": "Answer: A: macrolides Explanation: Pertussis is treated and close-contact prophylaxis is given with a macrolide, commonly azithromycin; young infants are at highest risk of severe disease.",
    "status": "valid"
  },
  {
    "id": 299,
    "front": "Which is the FALSE statement concerning vaccination against measles, mumps and rubella?",
    "back": "Answer: A: children who were not vaccinated at the age of 6 years can only be given the misssing vaccination at the age of 10 years Explanation: Exam trap: children who were not vaccinated at the age of 6 years can only be given the misssing vaccination at the age of 10 years is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "valid"
  },
  {
    "id": 300,
    "front": "The following rules should be abided by while performing preventive vaccinations: 1) the interval between the administration of two different vaccines which contain live microorganisms should not be shorter than 4 weeks; 2) the interval between the administration of two different vaccines which DO NOT contain live microorganisms is arbitrary as long as a necessary interval to avoid the adverse events following immunisation (AEFI) overlapping with the subsequent vaccination is maintained; 3) the interval between the administration of a vaccine which contains live microorganisms, and a vaccine…",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The source truncates later numbered vaccination statements, so the keyed combination cannot be reconstructed reliably. Do not manufacture the missing clauses. Explanation: SOURCE TRUNCATION: the stem is cut off. Core rule: two live injectable vaccines not given on the same day should generally be separated by >=4 weeks; non-live vaccines may be given simultaneously or at any interval from other vaccines unless a product-specific rule applies. Q301-Q330",
    "status": "invalid/outdated"
  },
  {
    "id": 301,
    "front": "Which is the true statement concerning simple febrile seizures? 1) they are generalized, usually tonic-clonic; 2) their duration is below 15 minutes, usually 5 minutes; 3) they recur within 24 hours; 4) after a seizure, Todd’s paralysis is observed; 5) they are the most frequent febrile seizures",
    "back": "Answer: A: 1,2,5 Explanation: Exam anchor: 1,2,5. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 302,
    "front": "Which are the true statements concernig whooping cough? 1) the disease starts with non-specific symptoms of a catarrhal inflammation of the airway which last 10-14 days; 2) following the inflammatory phase a paroxysmal cough occurs, which lasts 4-6 weeks; 3) a paroxysmal cough may be followed by apnoea of various duration; 4) between attacks of cough in uncomplicated whooping cough the patient’s condition is good; 5) the recovery period lasts several weeks",
    "back": "Answer: E: all of the above Explanation: Exam anchor: all of the above. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 303,
    "front": "Which is the correct procedure following a tick bite?",
    "back": "Answer: E: removal of the tick and disinfection of the site of the bite on the skin Explanation: Exam anchor: removal of the tick and disinfection of the site of the bite on the skin. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "valid"
  },
  {
    "id": 304,
    "front": "Which of the prophylactic doses of vitamin D in children are INCORRECT for the indicated age group?",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The vitamin-D concentration categories in the options use older/variable thresholds. Current Polish guidance changed the interpretation ranges, creating more than one mismatch with the old choices. Explanation: OUTDATED/MULTIPLE-ANSWER RISK: current Polish expert guidance gives 0-6 mo 400 IU/day; 6-12 mo 400-600; age 1-3 y 600; age 4-10 y 600-1000 when sun exposure is inadequate; age 11-18 y 1000-2000 when sun exposure is inadequate. Thus the old adolescent 800-IU choice and the infant 1000-2000-IU choice cannot support one clean modern SBA.",
    "status": "invalid/outdated"
  },
  {
    "id": 305,
    "front": "What are the clinical symptoms of Wilms’ tumour (nephroblastoma)? 1) abdominal tumour; 2) haematuria; 3) abdominal pain; 4) anorexia; 5) hypertension",
    "back": "Answer: E: all of the above Explanation: Wilms tumour is a renal embryonal tumour of early childhood; avoid rough palpation/biopsy outside protocol and remember association with WAGR/Denys-Drash/Beckwith-Wiedemann.",
    "status": "valid"
  },
  {
    "id": 306,
    "front": "What are the clinical symptoms of neuroblastoma? 1) pallor; 2) loss of body weight; 3) bone pain; 4) exophthalmos; 5) enlargement of the cervical lymph nodes",
    "back": "Answer: E: all of the above Explanation: Neuroblastoma arises from sympathetic neural crest tissue, often adrenal; urine HVA/VMA and metastatic patterns (bone/orbit) are classic exam clues.",
    "status": "valid"
  },
  {
    "id": 307,
    "front": "Indicate the true statements concering celiac disease: 1) Dühring’s disease is its variant. 2) not adhering to the gluten-free diet increases the risk of development of lymphomas in celiac disease patients. 3) detecting the presence of HLA DQ2 and HLA DQ8 constitutes a 100% confirmation of the diagnosis. 4) the first symptom in a child can be slowing down of the somatic development. 5) there may be a secondary occurrence of lactase deficiency",
    "back": "Answer: B: 1,2,4,5 Caveat: Legacy A treats HLA-DQ2/DQ8 positivity as diagnostic confirmation. These alleles are common and mainly useful for exclusion when absent; the true set is dermatitis herpetiformis, lymphoma risk with untreated disease, growth slowing and secondary lactase deficiency -> B. Explanation: Coeliac disease can cause malabsorption, poor growth, iron deficiency and extraintestinal symptoms; screen with tTG-IgA plus total IgA while the child is eating gluten.",
    "status": "caveat/updated"
  },
  {
    "id": 308,
    "front": "A 16-year-old male patient reported to a physician due to a sore throat, fever up to 39°C and enlarged cervical lymph nodes. There was a sudden onset of the symptoms. The patient DOES NOT cough, DOES NOT have a runny nose. The physical examination revealed reddening of the palatine tonsils, no abnormalities were detected, otherwise. Indicate the right further management:",
    "back": "Answer: D: a rapid test for Streptococcus pyogenes infection, and if the test is positive, treatment with phenoxymethylpenicillin for 10 days Explanation: Exam anchor: a rapid test for Streptococcus pyogenes infection, and if the test is positive, treatment with phenoxymethylpenicillin for 10 days. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 309,
    "front": "What are the most common pathogens that cause of meningitis in newborns?",
    "back": "Answer: D: E. coli, Streptococcus agalactiae, Listeria monocytogenes, Klebsiella pneumoniae Caveat: Legacy E (S. pyogenes alone) is not the neonatal meningitis pathogen pattern. Neonatal disease is classically dominated by GBS and Gram-negative enteric bacilli, with Listeria included in standard empiric teaching -> D among the offered choices. Explanation: Bacterial meningitis requires urgent empiric IV antibiotics; CSF pattern helps distinguish bacterial, viral and TB causes when LP is safe.",
    "status": "caveat/updated"
  },
  {
    "id": 310,
    "front": "Due to the necessity to fill the vascular bed in case of sepsis in a child who weighs 15kg, within the first ten minutes cristalloids should be administered in the volume of approximately:",
    "back": "Answer: D: 150 mL Explanation: 2026 paediatric sepsis: fluid boluses are 10-20 mL/kg with reassessment after each bolus; with ICU availability, up to 40-60 mL/kg may be given in the first hour if shock persists and there is no fluid overload. For 15 kg, 150 mL is a valid 10 mL/kg initial bolus.",
    "status": "caveat/updated"
  },
  {
    "id": 311,
    "front": "Indicate the right diagnosis in a 3-year-old boy with the following capillary blood gas analysis parameters-pH 7.3, pCO 55 mmHg, HCO 22 mmol/L, BE -2 and pO 50 mmHg:",
    "back": "Answer: C: uncompensated respiratory acidosis Explanation: Exam anchor: uncompensated respiratory acidosis. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 312,
    "front": "Human papilloma virus infection is one of the most common viral infections. Small common warts located on the extremities may be treated with all of the following EXCEPT for:",
    "back": "Answer: C: a 1% mupirocin ointment Explanation: Exam trap: a 1% mupirocin ointment is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "caveat/updated"
  },
  {
    "id": 313,
    "front": "Which of the following is true about pyloric hypertrophy (pylorostenosis)?",
    "back": "Answer: E: the treatment of choice is pyloromyotomy Explanation: Exam anchor: the treatment of choice is pyloromyotomy. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 314,
    "front": "Glycogenoses are rare metabolic diseases in which glycogen is stored in different organs. Which of the following is a glycogenosis connected with an enzymatic defect of lysosomal alpha- glucosidase and occurs in two variants-a childhood one and a juvenile one?",
    "back": "Answer: A: Pompe disease (type II) Explanation: Exam anchor: Pompe disease (type II). Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 315,
    "front": "Which of the following is the most common extracranial tumour occurring in children below 5 years of age?",
    "back": "Answer: A: neuroblastoma Explanation: Exam anchor: neuroblastoma. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 316,
    "front": "Which of the following is true about contagious impetigo?",
    "back": "Answer: C: it is characterised by the formation of blisters and spots with honey-coloured scabs Explanation: Impetigo causes superficial vesicles/pustules with honey-coloured crust; S. aureus and GAS are typical pathogens.",
    "status": "caveat/updated"
  },
  {
    "id": 317,
    "front": "Which of the following diseases is associated with niacin/nicotinamide deficiency?",
    "back": "Answer: A: pellagra Explanation: Exam anchor: pellagra. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 318,
    "front": "Which of the following is true about Lyme disease?",
    "back": "Answer: C: doxycycline is the treatment of choice in children below 9 years of age Explanation: Lyme erythema migrans can be treated with doxycycline in children of any age; amoxicillin and cefuroxime are also first-line choices, so “the treatment of choice” is overly exclusive.",
    "status": "caveat/updated"
  },
  {
    "id": 319,
    "front": "Legionella pneumophila infection was a serious problem in Poland last year. Which of the following is FALSE about legionellosis?",
    "back": "Answer: A: in small children it occurs quite often but has a mild course Explanation: Exam trap: in small children it occurs quite often but has a mild course is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "caveat/updated"
  },
  {
    "id": 320,
    "front": "Which condition IS NOT caused by bacteria from the Streptococcus group?",
    "back": "Answer: C: lichen planus Explanation: Exam trap: lichen planus is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "caveat/updated"
  },
  {
    "id": 321,
    "front": "Cyanotic congenital heart defects include: 1) Fallot’s tetralogy; 2) dextro-transposition of the great arteries; 3) Eisenmenger syndrome; 4) ventricular septal defect; 5) aortic stenosis",
    "back": "Answer: C: 1,2,3 Caveat: Legacy A includes aortic stenosis and omits Eisenmenger physiology. TOF, TGA and Eisenmenger syndrome are cyanotic; isolated VSD and aortic stenosis are typically acyanotic -> C. Explanation: Exam anchor: 1,2,3. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 322,
    "front": "The most common disease inherited in an autosomal recessive manner is:",
    "back": "Answer: A: cystic fibrosis Explanation: Exam anchor: cystic fibrosis. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 323,
    "front": "Iron-deficiency anaemia is characterised by: 1) increased MCV; 2) increased MCH; 3) increased ferritin; 4) increased transferrin; 5) decreased TIBC",
    "back": "Answer: D: only 4 Caveat: Legacy A reverses the iron-deficiency indices. IDA has low MCV/MCH/ferritin, increased transferrin/TIBC; among the statements only increased transferrin is true -> D. Explanation: Exam anchor: only 4. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 324,
    "front": "Which of the following statements is true about neuroblastoma? 1) it is most commonly located in the kidneys; 2) tumour cells display an increased uptake of MIBG in scintigraphy; 3) it is the most common in schoolchildren; 4) it is the most common in infants and small children; 5) it may infiltrate the bone marrow",
    "back": "Answer: C: 2,4,5 Caveat: Legacy A places neuroblastoma in the kidney and school age. Neuroblastoma is usually adrenal/sympathetic, common in infants/young children, is MIBG-avid and can infiltrate marrow -> 2,4,5 = C. Explanation: Neuroblastoma arises from sympathetic neural crest tissue, often adrenal; urine HVA/VMA and metastatic patterns (bone/orbit) are classic exam clues.",
    "status": "caveat/updated"
  },
  {
    "id": 325,
    "front": "A 3-year-old child has had a fever of 39.5°C for two days, which has been causing the child to wake up screaming at night and have a poor appetite. The child has had a watery runny nose for five days. Also, a purulent discharge from the right ear has been observed. What is the optimal course of action?",
    "back": "Answer: D: acute purulent otitis media should be diagnosed and empirical antibiotic therapy should be instituted Explanation: Exam anchor: acute purulent otitis media should be diagnosed and empirical antibiotic therapy should be instituted. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 326,
    "front": "Which of the following statements are true about compulsory vaccinations in Poland? 1) vaccination against rotaviruses is performed with an intramuscular polysaccharide vaccine; 2) in the first day of a newborn’s life, the newborn is vaccinated against tuberculosis and receives the first dose of a vaccine against hepatitis B; 3) the recommended interval between two live vaccines containing attenuated pathogens is 4 weeks; 4) the MMR vaccine contains live- attenuated viral pathogens; 5) vaccination against tick-borne encephalitis is compulsory for all children below 8 years of age",
    "back": "Answer: B: 2,3,4 Caveat: Legacy A says rotavirus vaccine is IM polysaccharide and TBE is compulsory. Rotavirus vaccine is oral live; newborn BCG+HBV, the 4-week spacing rule for separate live parenteral vaccines, and live MMR are the true statements -> B. Explanation: Exam anchor: 2,3,4. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 327,
    "front": "Growth charts should be used as a point of reference for blood pressure in children. The charts take into account: 1) the age; 2) the sex; 3) the weight; 4) the height; 5) the height centile",
    "back": "Answer: A: 1,2,5 Explanation: Exam anchor: 1,2,5. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 328,
    "front": "A pulse of 60/min in a 3-month-old infant:",
    "back": "Answer: C: is bradycardia Explanation: Exam anchor: is bradycardia. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 329,
    "front": "According to Polish recommendations: 1) the first-line course of action in the case of pneumonia in a 3-week-old child is careful observation without antibiotic therapy; 2) a mild- course community-acquired pneumonia in children between 4 months and 5 years of age may not be treated with antibiotics as most infections are viral; 3) Listeria monocytogenes is responsible for most cases of pneumonia in children above 5 years of age; 4) viral pneumonia CANNOT be distinguished from bacterial pneumonia by means of a radiological examination; 5) macrolides should be used as drugs of first choice in…",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The source cuts off statement 5 and also refers to an older CAP recommendation set. Because the answer combinations depend on missing text, it cannot be safely re-keyed; use current IDSA/PIDS principles instead. Explanation: SOURCE TRUNCATION/2026 CAP UPDATE: neonates with suspected pneumonia require urgent medical assessment and antibiotics, not watchful waiting. In older preschool children many CAP cases are viral, and chest radiography alone cannot reliably distinguish viral from bacterial pneumonia. Antibiotic choice depends on age/severity and current guidance.",
    "status": "invalid/outdated"
  },
  {
    "id": 330,
    "front": "Stage 1 of the Tanner scale means that:",
    "back": "Answer: A: the child does not display any characteristics of puberty Explanation: Tanner stage I is prepubertal; stage II marks onset of breast/testicular enlargement and sparse pubic hair. Q331-Q358",
    "status": "caveat/updated"
  },
  {
    "id": 331,
    "front": "Which of the following statements are true about meningitis in children? 1) it requires an immediate institution of empirical antibiotic therapy before its aetiology is established; 2) most cases are of viral aetiology; 3) the symptoms might include: vomiting accompanied by headaches, nape stiffness, photophobia, fever; 4) cerebrospinal fluid analysis may reveal an increase in inflammatory cells and protein, regardless of the aetiology; 5) it always leads to irreversible changes in the brain",
    "back": "Answer: B: 2,3,4 Caveat: Legacy A includes “meningitis always causes irreversible brain changes,” which is false. Viral causes predominate overall; headache/vomiting/fever/neck stiffness/photophobia and CSF pleocytosis/protein elevation may occur across aetiologies -> 2,3,4 = B. Suspected bacterial meningitis still requires urgent empiric antibiotics. Explanation: Meningitis can be viral or bacterial. If bacterial meningitis is suspected, start empiric antibiotics immediately after cultures/LP when safe, but never delay therapy for procedures in an unstable child.",
    "status": "caveat/updated"
  },
  {
    "id": 332,
    "front": "When diabetes type 1 is diagnosed in children, the following abnormalities may be observed in lab tests? 1) increased levels of glycated haemoglobin; 2) the presence of anti-GAD antibodies in the blood; 3) glycosuria; 4) a high insulin concentration in the blood; 5) metabolic alkalosis",
    "back": "Answer: B: 1,2,3 Caveat: Legacy A omits pancreatic autoantibodies. New T1D can show high HbA1c, anti-GAD antibodies and glycosuria; insulin is not high and DKA causes acidosis, not alkalosis -> B. Explanation: Exam anchor: 1,2,3. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 333,
    "front": "Congenital adrenal hyperplasia may be detected in a screening test of a newborn when a dried blood spot test reveals:",
    "back": "Answer: D: increased 17-hydroxyprogesterone Explanation: Exam anchor: increased 17-hydroxyprogesterone. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 334,
    "front": "Which of the following statements are true about constipation in children? 1) it is the most common cause of abdominal pain in children; 2) macrogols are the drugs of choice in the treatment of children above 6 months of age; 3) it is caused by a high amount of fibre in the child’s diet; 4) Hirschsprung’s disease is a common cause; 5) the treatment of functional constipation is long-lasting and often requires at least 2 months of pharmacotherapy",
    "back": "Answer: A: 1,2,5 Explanation: Functional constipation is clinical (Rome criteria); investigations are reserved for alarm features or refractory/atypical disease.",
    "status": "valid"
  },
  {
    "id": 335,
    "front": "Calculate the basic daily fluid requirements for a 27-kg healthy child using the Holliday- Segar formula:",
    "back": "Answer: B: 1640 mL Explanation: Exam anchor: 1640 mL. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 336,
    "front": "Features characteristic of complex febrile seizures are: 1) focal onset; 2) seizure lasting <15 minutes; 3) postictal paresis; 4) >1 seizure/24 hours; 5) most frequent in children aged 6 months to 9 years; 6) history of prior brain injury",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: Complex febrile seizure is defined by focality, duration >=15 minutes and/or recurrence within 24 hours; Todd paresis supports focality. The offered combinations do not align with that truth set, so the legacy answer is unsafe. Explanation: INVALID: complex febrile seizure = focal features OR duration >=15 min OR recurrence within 24 h. Todd paresis supports focality. Typical febrile-seizure age is about 6 months-5 years. The offered combinations do not match the true set.",
    "status": "invalid/outdated"
  },
  {
    "id": 337,
    "front": "Differential diagnosis of Epstein-Barr virus (EBV) infection relies on specific antibodies. Select the correct antibody test result in a patient with past infection (the patient had the infection previously): 1) anti-VCA IgM-positive result; 2) anti-VCA IgM-negative result; 3) anti-VCA IgG-positive result; 4) anti-VCA IgG-negative result; 5) anti-EA IgG-positive result; 6) anti-EA IgG-negative result; 7) anti-EBNA-positive result; 8) anti-EBNA-negative result",
    "back": "Answer: C: 2,3,6,7 Caveat: Legacy A describes acute infection. Past EBV infection is VCA IgM negative, VCA IgG positive, EBNA positive, and EA IgG typically negative -> 2,3,6,7 = C. Explanation: Exam anchor: 2,3,6,7. Retain this as the single best answer for the clinical fact tested in this stem.",
    "status": "caveat/updated"
  },
  {
    "id": 338,
    "front": "Select the FALSE statement about nephroblastoma:",
    "back": "Answer: B: the basis for initiating treatment is a diagnostic biopsy with histologic examination Explanation: Wilms/nephroblastoma: routine preoperative biopsy is not the standard in classic SIOP management; treatment commonly begins with preoperative chemotherapy, and bilateral disease is stage V.",
    "status": "caveat/updated"
  },
  {
    "id": 339,
    "front": "Select the correct statement(s) about spinal muscular atrophy (SMA):",
    "back": "Answer: E: all answers are correct Explanation: SMA: type I (Werdnig-Hoffmann) is severe infantile disease; type III (Kugelberg-Welander) begins after 18 months and has a much milder course. Tremor can occur, especially a fine postural hand tremor.",
    "status": "caveat/updated"
  },
  {
    "id": 340,
    "front": "The current 2025 immunization schedule includes both mandatory and recommended vaccinations. Which of the following are recommended vaccinations? 1) BCG-vaccination against tuberculosis; 2) TBE-vaccination against tick-borne encephalitis; 3) COVID-19-vaccination against COVID-19; 4) MenB-vaccination against meningococcal serogroup B; 5) MenACWY-vaccination against meningococcal serogroups A, C, W, Y; 6) IIV-inactivated influenza vaccination; 7) LAIV-live influenza vaccination in a nasal spray; 8) MMR-vaccination against measles, mumps and rubella",
    "back": "Answer: C: 2,3,4,5,6,7 Caveat: Legacy A lists BCG/MMR as recommended, but they are routine mandatory vaccines in Poland. In the 2026 framework TBE, COVID-19, MenB, MenACWY and influenza vaccines are in the recommended category -> C. Explanation: Use the 2026 Polish PSO. General mandatory childhood vaccines include BCG, HBV, rotavirus, DTP, IPV, Hib, pneumococcal and MMR; varicella is mandatory for selected risk groups. Always check age-specific timing.",
    "status": "caveat/updated"
  },
  {
    "id": 341,
    "front": "Indicate the FALSE statement about subglottic laryngitis:",
    "back": "Answer: D: in more severe cases it is also possible to use 1% nebulized adrenaline (epinephrine) at a dose of 5 mL/kg body weight Explanation: Croup: dexamethasone is standard; nebulized budesonide is an alternative. Nebulized epinephrine is used for moderate/severe croup, but “1% epinephrine 5 mL/kg” is a grossly incorrect dose/formulation statement.",
    "status": "caveat/updated"
  },
  {
    "id": 342,
    "front": "Select the correct recommendations for the management of community-acquired pneumonia in children: 1) it IS NOT recommended to routinely perform blood cultures in children with community- acquired pneumonia treated on an outpatient basis; 2) blood cultures can be helpful in children with community-acquired pneumonia in severe condition; 3) it is recommended to routinely perform sputum culture and a nasopharyngeal swab in children with community-acquired pneumonia; 4) sputum culture should be performed also in children in good general condition; 5) before ordering cultures, it is recommended…",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The source truncates the later pneumonia statements. Because the combinations rely on missing clauses and the CAP guideline was updated in 2026, the old key cannot be safely retained. Explanation: SOURCE TRUNCATION + 2026 CAP UPDATE: outpatient uncomplicated CAP does not need routine blood cultures. Obtain cultures in severe/hospitalized or complicated disease when results could change management; routine sputum/nasopharyngeal bacterial cultures are not recommended for every well child.",
    "status": "invalid/outdated"
  },
  {
    "id": 343,
    "front": "Thrombophilia DOES NOT include:",
    "back": "Answer: E: haemophilia A Explanation: Exam trap: haemophilia A is the excluded/false choice. The table/true-set above shows what remains correct.",
    "status": "caveat/updated"
  },
  {
    "id": 344,
    "front": "The first-line treatment in a 16-year-old child >40 kg with a diagnosed stage 1 essential hypertension includes all of the listed agents EXCEPT for:",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: Current paediatric first-line antihypertensive classes include ACEi/ARB, long-acting CCB and thiazide diuretic. Both alpha- and beta-blockers are generally not routine first-line choices, so the single-EXCEPT construction has more than one answer. Explanation: INVALID: current first-line paediatric antihypertensive classes are ACE inhibitor/ARB, long-acting calcium-channel blocker or thiazide diuretic. Both beta-blockers and alpha-blockers are generally reserved rather than routine first-line choices, so the item has more than one “EXCEPT.”",
    "status": "invalid/outdated"
  },
  {
    "id": 345,
    "front": "Indicate the FALSE statement regarding the clinical staging of Hodgkin lymphoma:",
    "back": "Answer: E: stage V refers to the spread to the central nervous system and cerebrospinal fluid, involvement of the lymph nodes on both sides of the diaphragm, and malignant pleural or peritoneal effusion without any other extralymphatic lesions Explanation: Hodgkin lymphoma staging uses Ann Arbor/Cotswolds concepts; B symptoms are fever, drenching night sweats and >10% weight loss in 6 months.",
    "status": "caveat/updated"
  },
  {
    "id": 346,
    "front": "Indicate the FALSE statement regarding acute renal failure in children:",
    "back": "Answer: B: the use of sulfonamides is the most common pre-renal cause of acute renal failure Explanation: AKI in children is commonly prerenal from hypovolaemia/dehydration; renal and postrenal causes must be considered from history, urinalysis and imaging.",
    "status": "caveat/updated"
  },
  {
    "id": 347,
    "front": "Indicate the true statements regarding bone tumors in children: 1) osteosarcoma is the second most common bone tumor in children; 2) the characteristic feature of osteosarcoma is that it metastasizes to the lungs; 3) the first-choice diagnostic test for bone lesions is an MIBG (3- iodobenzylguanidine) scintigraphic scan; 4) methotrexate IS NOT used in the course of treatment for osteosarcoma; 5) Ewing sarcoma can also occur in the soft tissues; 6) if distant metastases is detected (Stage IV), Ewing sarcoma is associated with a 5- year survival in 15-20% of cases",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The source combination relies on a fixed stage-IV Ewing survival percentage and other era-dependent statements. Robust facts can be retained, but the exact combination is not stable enough for a 2026 single-best answer. Explanation: Ewing sarcoma commonly metastasizes to lung and bone/bone marrow; extraskeletal Ewing exists. Survival percentages are stage- and era-dependent, so use the directional prognostic facts rather than memorizing an old exact percentage.",
    "status": "invalid/outdated"
  },
  {
    "id": 348,
    "front": "A 4-year-old child with an abdominal lump on an ultrasound scan is admitted into the Pediatric Emergency Department. The lump is localized in the plan view of the right kidney, size: 8x7x7 cm. It IS NOT encapsulated and infiltrates the adjacent structures. There are metastases to the local lymph nodes. A physical examination has revealed edema of the temporozygomatic region with bilaterally visible periorbital hematomas. Indicate the true statement(s) regarding the above clinical scenario (diagnosis and prognosis): 1) one of the steps to ensure proper diagnostic workup is to order a 24-hour…",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The source truncates numbered statements required by the answer combinations. The legacy key cannot be independently audited. Explanation: SOURCE TRUNCATION: the question ends mid-statement (“24-hour…”), so the answer set cannot be reconstructed. Periorbital ecchymoses with an infiltrative adrenal/retroperitoneal mass strongly suggests neuroblastoma; work-up includes urine catecholamine metabolites and metastatic staging.",
    "status": "invalid/outdated"
  },
  {
    "id": 349,
    "front": "A 5-month-old infant is admitted to the Pediatric Emergency Department, presenting with symptoms of a respiratory infection which started a few days earlier, following a cold and cough for several days. The child had a fever of up to 39°C, rapid breathing rate (50/min) and difficulty breathing, with clearly detectable intercostal retractions. A physical examination revealed audible crackles in both lungs and tachycardia. A radiological study of the chest showed shadowing in the lungs, suggestive of an inflammation. Laboratory test results showed an elevated CRP level (132 mg/l) and elevated…",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: The source truncates the clinical stem/answer-defining information. Do not force a single answer from incomplete source text. Explanation: SOURCE TRUNCATION: the clinical vignette is cut off before the question is complete. Severe infant pneumonia with respiratory distress requires hospital-level assessment; blood cultures are appropriate in severe disease, while routine fluoroquinolones are not first-line infant CAP therapy.",
    "status": "invalid/outdated"
  },
  {
    "id": 350,
    "front": "Indicate true statement(s) regarding pre-excitation syndromes: 1) a pre-excitation syndrome is a premature activation of the ventricles through an accessory pathway connecting the atrium and ventricle; 2) WPW (Wolff-Parkinson-White) syndrome features prolonged PR interval and QRS rd complex widened by the delta wave; 3) LGL (Lown-Ganong-Levine) syndrome features shortened PR interval and QRS complex widened by the delta wave; 4) digoxin is the medication of choice in the treatment of WPW syndrome; 5) clinical symptoms of pre-excitation syndromes occur during bradycardia; 6) from around the…",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: Statement 6 is cut off in the source, and several remaining statements are already clearly false (WPW has short PR; digoxin is not the default treatment and can be dangerous in pre-excited AF). The combination cannot be reconstructed. Explanation: SOURCE TRUNCATION: WPW = short PR + delta wave + wide QRS due to an accessory pathway. LGL is a historical label with short PR and normal QRS/no delta. Avoid AV-nodal blockers such as digoxin in pre-excited atrial fibrillation.",
    "status": "invalid/outdated"
  },
  {
    "id": 351,
    "front": "A 4-month-old infant was brought to the paediatric Emergency Department by his father due to watery nasal discharge. The parent, after reading information online, suspects acute sinusitis. Indicate true statement:",
    "back": "Answer: B: the sphenoid sinuses become aerated after 3 years of age Explanation: Paranasal sinuses develop at different ages: maxillary/ethmoid are present very early, sphenoid aerates later in early childhood, and frontal sinuses develop later. A 4-month-old with simple watery rhinorrhoea is far more likely to have viral rhinitis than bacterial sinusitis.",
    "status": "caveat/updated"
  },
  {
    "id": 352,
    "front": "Indicate FALSE statement(s) regarding coagulopathies: 1) haemophilia type A is inherited in an autosomal recessive manner; 2) haemophilia type A results from a deficiency of factor VIII; 3) haemophilia type B is inherited in an autosomal dominant manner; 4) in 80% of cases there is a positive family history, while sporadic cases are caused by new mutations; 5) haemophilia types A and B occur mainly in boys; females are carriers, although the disease may also occur in girls; 6) typical manifestations of haemophilia include intra-articular and intra- muscular bleeding; 7) the severe form of…",
    "back": "Answer: INVALID / OUTDATED - do not memorize the legacy key Caveat: Statement 7 is cut off. Statements 1 and 3 are already false because haemophilia A and B are X-linked recessive, but without statement 7 the requested false-set combination cannot be finalized. Explanation: SOURCE TRUNCATION: haemophilia A and B are X-linked recessive deficiencies of factors VIII and IX; deep muscle/hemarthrosis bleeding is typical, and severe disease means factor activity <1%. The missing statement 7 prevents a reliable combination answer.",
    "status": "invalid/outdated"
  },
  {
    "id": 353,
    "front": "According to the 2026 vaccination schedule, the mandatory vaccinations administered during the first year of life include: (BCG-vaccination against tuberculosis, DTP-vaccination against diphtheria, tetanus, and pertussis, IPV-intramuscular vaccine against poliomyelitis, OPV-oral poliomyelitis vaccine, PCV-vaccination against pneumococcal infection, RV-vaccination against rotavirus infection, HBV-vaccination against hepatitis B, Hib-vaccination against Haemophilus influenzae type B, MMR-vaccination against measles, mumps, and rubella)",
    "back": "Answer: C: BCG, DTP, IPV, PCV, RV, HBV, Hib Explanation: This item is already labelled 2026 but had no source answer marker. In the first year, Polish mandatory vaccines include BCG, HBV, rotavirus, DTP, Hib, PCV and IPV; MMR starts at 13-15 months -> C. 📊 2026 Polish PSO — mandatory vaccines in the first year Age window Key mandatory vaccines Birth / first 24h BCG + HBV 2 months DTP, IPV, Hib, PCV, RV 3-4 months next DTP/IPV/Hib + RV/PCV sequence 5-6 months further DTP/IPV/Hib doses (per schedule/product) 6-7 months HBV completion dose Note: MMR starts after the first birthday (13-15 months). OPV is not part of the routine schedule. 💡 MEMORIZE 2026 Polish PSO, first year: BCG, HBV, rotavirus, DTP, IPV, Hib and pneumococcal vaccination are given. MMR begins after the first birthday (13-15 months), and OPV is not used in the routine schedule.",
    "status": "caveat/updated"
  },
  {
    "id": 354,
    "front": "According to the 2026 vaccination schedule, the recommended (non-mandatory) vaccinations for children include immunization against: 1) influenza; 2) hepatitis A; 3) meningococcal infection; 4) pneumococcal infection; 5) human papillomavirus (HPV), 6) COVID-19; 7) chickenpox (varicella)",
    "back": "Answer: A: 1, 2, 3, 5, 6, 7 Explanation: The source answer remains A after a 2026 check: influenza, HAV, meningococcal, HPV, COVID-19 and varicella are recommended categories; pneumococcal vaccine is routine mandatory for the general paediatric schedule (with risk-specific nuances). 📊 2026 Polish PSO — recommended vs general mandatory vaccines Recommended / non-mandatory Already in the general mandatory schedule Influenza Pneumococcal vaccine Hepatitis A — Meningococcal vaccines — HPV — COVID-19 — Varicella (outside mandatory risk groups) — Note: That is why statement 4 (pneumococcal infection) does not belong in the “recommended only” answer set. 💡 MEMORIZE 2026 Polish PSO: recommended/non-mandatory vaccines include influenza, hepatitis A, meningococcal, HPV, COVID-19 and varicella (outside defined mandatory risk groups). Pneumococcal vaccination is mandatory for the general paediatric population, so statement 4 does not belong in the “recommended only” set.",
    "status": "caveat/updated"
  },
  {
    "id": 355,
    "front": "Indicate FALSE statement regarding the congenital autoinflammatory syndrome PFAPA in children:",
    "back": "Answer: B: the gene responsible for the occurrence of PFAPA is ABC1 Explanation: PFAPA has no single established “ABC1 gene.” It is a clinical autoinflammatory syndrome with periodic fever, aphthous stomatitis, pharyngitis and cervical adenitis, usually beginning in early childhood and with a good prognosis.",
    "status": "caveat/updated"
  },
  {
    "id": 356,
    "front": "Indicate true statement regarding the treatment of osteosarcoma in children:",
    "back": "Answer: A: preoperative chemotherapy includes ifosfamide, cisplatin, adriamycin, and high-dose methotrexate with calcium folinate Explanation: Osteosarcoma is treated with multi-agent chemotherapy plus definitive surgery; limb-sparing surgery is preferred when oncologically feasible. Prognosis depends strongly on metastases and response to chemotherapy.",
    "status": "caveat/updated"
  },
  {
    "id": 357,
    "front": "Hemorrhagic disease of the newborn can be caused by vitamin K deficiency. This leads to the decreased levels of several coagulation factors, primarily those belonging to the prothrombin complex. Indicate the correct set of factors affected with level decrease:",
    "back": "Answer: A: II, VII, IX, X Explanation: Vitamin K is required for gamma-carboxylation of factors II, VII, IX and X (and proteins C/S). Deficiency prolongs PT first because factor VII has the shortest half-life.",
    "status": "caveat/updated"
  },
  {
    "id": 358,
    "front": "Indicate true statement regarding NEC (necrotizing enterocolitis):",
    "back": "Answer: A: pneumatosis intestinalis visible on abdominal X-ray is a specific feature Explanation: NEC: pneumatosis intestinalis on abdominal radiograph is a classic specific finding. Prematurity is the major risk factor; severe disease can progress to systemic instability/DIC, but DIC is not a stage-I defining feature.",
    "status": "caveat/updated"
  },
  {
    "id": 359,
    "front": "When is an extensor Babinski response physiologic, and when is persistence concerning?",
    "back": "Answer: An extensor plantar response is normal in infancy and may remain physiologic through roughly 1–2 years. Persistence beyond about age 2, marked asymmetry, or accompanying upper-motor-neuron findings is concerning. Interpret with age, gait, tone, strength, and the rest of the neurologic examination.",
    "status": "caveat/updated"
  },
  {
    "id": 360,
    "front": "When does the Moro reflex appear and when does it usually integrate?",
    "back": "Answer: It is present by late gestation and is usually integrated by about 4–6 months. Stimulus: sudden loss of support or startle. Response: abduction/extension followed by flexion and often a cry. Persistent marked asymmetry is abnormal.",
    "status": "caveat/updated"
  },
  {
    "id": 361,
    "front": "What are the stimulus and expected response of the rooting reflex, and when does it usually integrate?",
    "back": "Answer: Stroke the cheek or corner of the mouth; the infant turns toward the stimulus and opens the mouth. It is present by late gestation and usually integrates by about 4–6 months.",
    "status": "caveat/updated"
  },
  {
    "id": 362,
    "front": "What are the high-yield timing facts for the sucking reflex?",
    "back": "Answer: Sucking appears around 32–35 weeks’ gestation; coordination with swallowing and breathing matures toward term. Weak or discoordinated sucking in a term infant warrants assessment.",
    "status": "caveat/updated"
  },
  {
    "id": 363,
    "front": "When does the palmar grasp reflex usually integrate?",
    "back": "Answer: It is elicited by placing a finger in the infant’s palm and usually integrates by about 4–6 months. Persistence, marked asymmetry, or abnormal tone requires clinical context.",
    "status": "caveat/updated"
  },
  {
    "id": 364,
    "front": "When does the stepping reflex usually fade?",
    "back": "Answer: Hold the infant upright with the soles touching a surface; alternating step-like movements may appear. It often fades by about 2 months, with variation by state and maturity.",
    "status": "caveat/updated"
  },
  {
    "id": 365,
    "front": "What is the asymmetric tonic neck reflex and when does it usually integrate?",
    "back": "Answer: Turning the head produces ipsilateral extension and contralateral flexion, the “fencing” posture. It usually integrates by about 5–7 months; persistence beyond the expected period or marked asymmetry is concerning.",
    "status": "caveat/updated"
  },
  {
    "id": 366,
    "front": "When should the posterior and anterior fontanelles close?",
    "back": "Answer: The posterior fontanelle commonly closes first, often within about 2 months. The anterior fontanelle commonly closes around 7–18 months. These are approximate ranges, not rigid cutoffs.",
    "status": "caveat/updated"
  },
  {
    "id": 367,
    "front": "What does a persistently bulging or sunken fontanelle suggest?",
    "back": "Answer: A persistent bulge when the infant is calm and upright raises concern for raised intracranial pressure, meningitis/encephalitis, hydrocephalus, or bleeding. A sunken fontanelle commonly raises concern for dehydration. Transient prominence with crying or lying down may be physiologic.",
    "status": "caveat/updated"
  },
  {
    "id": 368,
    "front": "What are the five Apgar domains?",
    "back": "Answer: Appearance, Pulse, Grimace, Activity, and Respiration. Each is scored 0–2 at 1 and 5 minutes. The score describes transition and does not replace immediate resuscitation when needed.",
    "status": "caveat/updated"
  },
  {
    "id": 369,
    "front": "What are the four Centor/McIsaac clinical criteria?",
    "back": "Answer: Fever >38°C, tonsillar exudate or swelling, tender/swollen anterior cervical nodes, and absence of cough. Each contributes +1; McIsaac adds age adjustment: +1 for ages 3–14, 0 for ages 15–44, and −1 for age ≥45.",
    "status": "caveat/updated"
  },
  {
    "id": 370,
    "front": "What is the difference between Barlow and Ortolani maneuvers?",
    "back": "Answer: Barlow tests whether a reduced hip can be displaced: flex, adduct, and apply gentle posterior pressure. Ortolani tests reduction: flex and abduct while lifting the greater trochanter anteriorly. A palpable clunk is the key positive finding; never force the hip.",
    "status": "valid"
  },
  {
    "id": 371,
    "front": "What is the usual karyotype notation for Down syndrome?",
    "back": "Answer: Most cases involve trisomy 21, written for example as 47,XX,+21 or 47,XY,+21. Other mechanisms include an unbalanced translocation and mosaicism.",
    "status": "caveat/updated"
  },
  {
    "id": 372,
    "front": "What are the high-yield chromosome patterns for Turner and Klinefelter syndromes?",
    "back": "Answer: Turner syndrome is classically 45,X or a mosaic/structural X abnormality. Klinefelter syndrome is classically 47,XXY, with mosaic forms possible.",
    "status": "caveat/updated"
  },
  {
    "id": 373,
    "front": "What are classic high-yield associations of trisomy 13 and trisomy 18?",
    "back": "Answer: Trisomy 13 is associated with severe multisystem anomalies including holoprosencephaly-spectrum findings, cleft lip/palate, and polydactyly. Trisomy 18 is associated with growth restriction, clenched overlapping fingers, rocker-bottom feet, and severe multisystem disease.",
    "status": "caveat/updated"
  },
  {
    "id": 374,
    "front": "Is HSV-2 infection itself a contraindication to cesarean delivery?",
    "back": "Answer: No. The source statement is incorrect. Active genital HSV lesions or prodromal symptoms at labor generally support cesarean delivery to reduce neonatal transmission risk; management depends on the full obstetric context.",
    "status": "invalid/outdated"
  },
  {
    "id": 375,
    "front": "Is routine sodium bicarbonate a first-line medication at the beginning of neonatal resuscitation?",
    "back": "Answer: No. Current neonatal-resuscitation guidance does not support routine sodium bicarbonate during initial resuscitation. Effective ventilation, compressions when indicated, epinephrine when indicated, and correction of reversible causes take priority.",
    "status": "invalid/outdated"
  },
  {
    "id": 376,
    "front": "Why should prolonged bag-mask ventilation be avoided in known or suspected congenital diaphragmatic hernia?",
    "back": "Answer: Gastric and bowel insufflation can worsen lung compression. Prioritize expert airway management and gastric decompression according to neonatal-resuscitation and surgical protocols.",
    "status": "caveat/updated"
  },
  {
    "id": 377,
    "front": "What is the current high-yield measles infectious window?",
    "back": "Answer: A person with measles is generally infectious from 4 days before through 4 days after rash onset, with rash day counted as day 0. Older answer choices using 5- or 7-day windows should be treated as outdated.",
    "status": "invalid/outdated"
  },
  {
    "id": 378,
    "front": "How should vaccine schedule cards be handled in a study set?",
    "back": "Answer: Vaccine schedules are date- and jurisdiction-sensitive. Use the current national schedule, catch-up table, medical-indication table, and contraindication/precaution appendix rather than memorizing an undated static schedule.",
    "status": "caveat/updated"
  },
  {
    "id": 379,
    "front": "What is the high-yield distinction between nephrotic and nephritic patterns?",
    "back": "Answer: Nephrotic syndrome features heavy protein loss, hypoalbuminemia, edema, and hyperlipidemia. Nephritic disease features hematuria, hypertension, reduced kidney function, and variable proteinuria.",
    "status": "valid"
  },
  {
    "id": 380,
    "front": "What makes a pediatric physical sign a useful flashcard rather than a diagnosis?",
    "back": "Answer: Pair the sign with its classic association, important differentials, age context, and urgency caveat. An isolated sign is a clue, not a diagnosis.",
    "status": "valid"
  },
  {
    "id": 381,
    "front": "What is the LEK-style one-line distinction between Noonan and Turner syndromes?",
    "back": "Answer: Turner syndrome is a sex-chromosome disorder, classically 45,X. Noonan syndrome is a RASopathy that can resemble Turner syndrome with short stature, webbed/excess neck skin and congenital heart disease, but occurs in any sex and chromosome studies can be normal. Think pulmonary valve stenosis or hypertrophic cardiomyopathy in Noonan.",
    "status": "caveat/updated"
  },
  {
    "id": 382,
    "front": "What high-yield cluster should suggest Williams syndrome?",
    "back": "Answer: Think chromosome 7 microdeletion with supravalvular aortic stenosis, hyperacusis, developmental/visual-spatial difficulty and possible infant hypercalcemia. “Elfin facies” is an old non-specific label; the cardiovascular association is more useful.",
    "status": "caveat/updated"
  },
  {
    "id": 383,
    "front": "What classic cluster should suggest 22q11.2 deletion syndrome?",
    "back": "Answer: Conotruncal heart disease, palatal abnormalities, immune dysfunction/recurrent infection risk and hypocalcemia are classic clues. The phenotype is variable; confirm genetically rather than by a single feature.",
    "status": "caveat/updated"
  },
  {
    "id": 384,
    "front": "How do Prader–Willi and Angelman syndromes differ as an LEK trap?",
    "back": "Answer: Both involve the 15q11–q13 imprinted region but differ by parent-of-origin expression. Prader–Willi: loss of paternal expression, early hypotonia/poor feeding followed later by hyperphagia/obesity risk. Angelman: loss of maternal UBE3A expression with severe neurodevelopmental phenotype.",
    "status": "caveat/updated"
  },
  {
    "id": 385,
    "front": "What are the key LEK associations of Beckwith–Wiedemann syndrome?",
    "back": "Answer: Macroglossia, abdominal-wall defect, overgrowth/lateralized overgrowth, neonatal hypoglycemia and embryonal-tumor risk, especially Wilms tumor and hepatoblastoma.",
    "status": "caveat/updated"
  },
  {
    "id": 386,
    "front": "Expand WAGR syndrome.",
    "back": "Answer: WAGR = Wilms tumor, Aniridia, Genitourinary anomalies, and a range of developmental delay. It is a classic tumor-predisposition acronym.",
    "status": "valid"
  },
  {
    "id": 387,
    "front": "What is the high-yield principle for Fragile X syndrome?",
    "back": "Answer: Fragile X is an FMR1-related X-linked neurodevelopmental condition and a common inherited cause of intellectual disability. Consider it with developmental differences/autism phenotype and a suggestive family pattern.",
    "status": "caveat/updated"
  },
  {
    "id": 388,
    "front": "Why are named-syndrome questions a common LEK trap?",
    "back": "Answer: They may test a single discriminating association rather than the full phenotype: Noonan vs Turner, Williams with supravalvular aortic stenosis, WAGR with Wilms/aniridia, Beckwith–Wiedemann with macroglossia and embryonal-tumor risk, or Prader–Willi’s age-dependent feeding-to-hyperphagia shift.",
    "status": "valid"
  },
  {"id": 389,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for calcium gluconate?","back": "Do not give 10% calcium gluconate solution in a dose of 1 ml/kg over 10 minutes. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01541"},
  {"id": 390,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Children <3 years with head injury: Always check for pulsating bruise sign (sign of increased intracranial pressure). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00652"},
  {"id": 391,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for ampicillin?","back": "Key Dose: 10–14 days of ampicillin/erythromycin for chemoprophylaxis. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00020"},
  {"id": 392,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Sodium bicarbonate?","back": "First Choice Drug: Sodium bicarbonate (administered at the beginning of resuscitation). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01025"},
  {"id": 393,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "\"Jellinek is not a contraindication\" → Remember Jellinek’s sign is the only option not a contraindication. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01110"},
  {"id": 394,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for glucagon?","back": "Treatment involves administering hydrocortisone (5 mg/kg/24 hours) or glucagon to neonates whose mothers have diabetes. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01241"},
  {"id": 395,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for immunoglobulin?","back": "pregnancy are advised to receive immunoglobulin 0.55 mL/kg (lack of data on the effectiveness of this approach). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01594"},
  {"id": 396,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for immunoglobulin?","back": "Pregnant women (IgG seronegative, 1st trimester): 0.55 mL/kg immunoglobulin. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01602"},
  {"id": 397,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for cefotaxime?","back": "Meningitis requires higher doses of cefotaxime (300 mg/kg) vs. invasive infections (100 mg/kg). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01753"},
  {"id": 398,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Acyclovir?","back": "Acyclovir Inhibits viral DNA polymerase HSV infections 10 mg/kg IV every 8 hours Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00006"},
  {"id": 399,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Acyclovir?","back": "Acyclovir IV 20 mg/kg Every 8 hours (Acyclovir IV 20/8) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00178"},
  {"id": 400,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Neonatology?","back": "Flatau sign (ocular-chorioretinal) is a key differentiator in ZOMR, often seen in newborns and infants. Always correlate with facial SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00581"},
  {"id": 401,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Cefotaxime?","back": "- Example: Cefotaxime 200 mg/kg mc./24 hours i.v. every 6 hours + netromycin 7.5 mg/kg mc./24 hours i.v. every 12 hours Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00619"},
  {"id": 402,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Cefotaxime?","back": "- Example: Cefotaxime 200 mg/kg mc./24 hours i.v. every 6 hours or ceftiraxone 100 mg/kg mc./24 hours i.v. every 24 hours + penicillin G 300–400 Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00623"},
  {"id": 403,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Vancomycin?","back": "- Dose: Vancomycin 60 mg/kg mc./24 hours i.v. every 6 hours + acyclovir 15 mg/kg mc./24 hours every 8 hours Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00626"},
  {"id": 404,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Ampicillin?","back": "Ampicillin 200–300 mg/kg mc./24 hours every 4–6 hours for 21 days + aminoglycosides Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00630"},
  {"id": 405,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Ampicillin?","back": "- Ampicillin: 100–200 mg/kg for <3 months; 200–300 mg/kg for L. monocytogenes (21 days) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00637"},
  {"id": 406,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Paracetamol?","back": "Paracetamol: 10–15 mg/kg (children) / 650–1000 mg (≥12 years) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00689"},
  {"id": 407,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Rifampicin?","back": "a) Rifampicin 10 mg/kg p.o. every 12 hours for the next two days Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01083"},
  {"id": 408,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for calcium gluconate?","back": "Administer 10% calcium gluconate solution at a dose of 1 mL/kg Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01249"},
  {"id": 409,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Do not give 10% glucose in doses of 2 ml/kg (200 mg/kg). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01538"},
  {"id": 410,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Amoxicillin?","back": "Amoxicillin/Clavulanate: 80–90 mg/kg mc/24 hours every 8–12 hours Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01747"},
  {"id": 411,"front": "LEK source drill — What key finding, timing, or association is listed for Genetics & congenital syndromes?","back": "Proteinuria: Unstable sign of OPKZN; rarely <3 g/24 hours (mainly albuminuria), rarely leading to nephrotic syndrome. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00347"},
  {"id": 412,"front": "LEK source drill — What key finding, timing, or association is listed for Development & neurology?","back": "Brdlik's sign: Normal in children under 5–6 years; abnormal in older children suggests meningeal irritation. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00603"},
  {"id": 413,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Increased intracranial pressure in children <3 years old with recent head injury (check for pulsating bruise sign). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00651"},
  {"id": 414,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for immunoglobulin?","back": "3. Blood transfusion or immunoglobulin preparations – contraindicated in relation to live vaccines for 3–6 months following administration. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00968"},
  {"id": 415,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for immunoglobulin?","back": "Wait 3–6 months after blood transfusion/immunoglobulin before administering live vaccines. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00981"},
  {"id": 416,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for immunoglobulin?","back": "Specific immunoglobulin (administered until 72 hours of life) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00177"},
  {"id": 417,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Nephrology & urology?","back": "UTI in children <2 years: Always suspect kidney involvement (acute pyelonephritis) if fever is present. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00258"},
  {"id": 418,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Children under 12 months: Always require diagnostic evaluation. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00519"},
  {"id": 419,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Development & neurology?","back": "Tuberculous meningitis is the only type with both glucose and chloride <45 in ~80% of cases. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00589"},
  {"id": 420,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Infectious disease & immunization?","back": "ZOMR (etiology unknown in empirical treatment) – always confirm etiology within 48 hours to avoid prolonged antibiotic use. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00617"},
  {"id": 421,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Cefotaxime?","back": "- <3 months: Cefotaxime + aminoglycosides or ampicillin Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00631"},
  {"id": 422,"front": "LEK source drill — What key finding, timing, or association is listed for Oncology & hematology?","back": "\"9-Month Rule\": If no tumor recurs 9 months after diagnosis age, prognosis is favorable SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00746"},
  {"id": 423,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Neonatology?","back": "- Diagnosed in only 5% of newborns born after 37 weeks of gestation. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01312"},
  {"id": 424,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Dilute: Always dilute to 1–2 ml for intratracheal use. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01525"},
  {"id": 425,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Infectious disease & immunization?","back": "Infants <6 months of age: Gamma globulin not recommended after exposure if the mother was vaccinated and had measles. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01569"},
  {"id": 426,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Ampicillin?","back": "Ampicillin: 300–400 mg/kg mc/24 hours every 4–6 hours Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01734"},
  {"id": 427,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Ampicillin?","back": "Ampicillin: 100–200 mg/kg mc/24 hours every 6 hours Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01741"},
  {"id": 428,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Amoxicillin?","back": "Amoxicillin: 80–90 mg/kg mc/24 hours every 8–12 hours Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01746"},
  {"id": 429,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Respiratory?","back": "Urinary tract infections (UTIs) constitute 10–20% of all community-acquired infections (second only to respiratory infections in terms of frequency) SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00234"},
  {"id": 430,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Infectious disease & immunization?","back": "Indicates maternal infection only (antibodies persist in the child until 6–18 months of age) SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00371"},
  {"id": 431,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Development & neurology?","back": "Clinical Pearl: MPD is diagnosed after 2 years of age, while DMPC refers to developmental disorders in children under 2 years. Always SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00456"},
  {"id": 432,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "EBV Contagiousness: \"7 days before symptoms, 18 months after\" (7-18 rule). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01652"},
  {"id": 433,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for vitamin K?","back": "Neonatal hemorrhagic disease is caused by vitamin K deficiency – remember \"K\" for Kidney (vitamin K is needed for clotting factors). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00106"},
  {"id": 434,"front": "LEK source drill — What key finding, timing, or association is listed for Infectious disease & immunization?","back": "\"6–8 Weeks Rule\": Repeat HIV-RNA/p24Ag tests between 6–8 weeks of age to confirm infection SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00380"},
  {"id": 435,"front": "LEK source drill — What key finding, timing, or association is listed for Cardiology & rheumatology?","back": "Searching for left ventricular hypertrophy (the most significant sign of organ damage in children with hypertension). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00411"},
  {"id": 436,"front": "LEK source drill — What key finding, timing, or association is listed for Cardiology & rheumatology?","back": "Left ventricular hypertrophy on echocardiography is the most significant sign of organ damage in children with hypertension. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00416"},
  {"id": 437,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Ampicillin?","back": "Ampicillin with aminoglycosides. Erythromycin and cotrimoxazole are also effective. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00473"},
  {"id": 438,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Diazepam?","back": "Diazepam is the first-line medication for acute seizure management in children. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00521"},
  {"id": 439,"front": "LEK source drill — What key finding, timing, or association is listed for Orthopedics?","back": "Battle’s sign (bruising behind the ear) is a key indicator of skull fracture. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00545"},
  {"id": 440,"front": "LEK source drill — What key finding, timing, or association is listed for Babinski?","back": "Positive: Dorsal flexion of the hallux (similar to Babinski's sign). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00594"},
  {"id": 441,"front": "LEK source drill — What key finding, timing, or association is listed for Oncology & hematology?","back": "Gold standard: Histopathological examination of tumor tissue from the mass or omental fat (per IRS criteria). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00751"},
  {"id": 442,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "IRS criteria: Focus on histopathological grading to determine surgical staging. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00752"},
  {"id": 443,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Homer sign: Drooping eyelid, sunken eyeball, constricted pupil, iris discoloration on the affected side. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00762"},
  {"id": 444,"front": "LEK source drill — What key finding, timing, or association is listed for Nephrology & urology?","back": "Homer sign is a classic indicator of adrenal or retroperitoneal neuroblastoma. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00765"},
  {"id": 445,"front": "LEK source drill — What key finding, timing, or association is listed for Orthopedics?","back": "Bone X-ray: Confirmation of osteolytic changes and bony swelling (\"cabbage leaf sign\"), bone fracture, soft tissue effusion. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00784"},
  {"id": 446,"front": "LEK source drill — What key finding, timing, or association is listed for Oncology & hematology?","back": "X-ray sign: \"Cabbage leaf sign\" = osteolytic lesion with bony expansion (key for diagnosing osteolytic bone tumors). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00791"},
  {"id": 447,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Acyclovir?","back": "Key drugs for severe infections: Acyclovir (viral), amphotericin B (fungal), and dexamethasone (anti-inflammatory/diuretic). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00825"},
  {"id": 448,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for amoxicillin?","back": "First-line: Penicillin G, amoxicillin with clavulanic acid, cephalosporins. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00879"},
  {"id": 449,"front": "LEK source drill — What key finding, timing, or association is listed for Dermatology, allergy & immunology?","back": "Hanifin and Rajka criteria emphasize objective symptoms (e.g., eczema, pruritus) over subjective complaints. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00940"},
  {"id": 450,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Lichenification is a key sign in late childhood and adulthood stages. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00945"},
  {"id": 451,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Confirmed by laboratory tests: At least 3 of the following criteria (not fully listed in text). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00983"},
  {"id": 452,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Sodium bicarbonate?","back": "a) Sodium bicarbonate is used to correct metabolic acidosis. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01019"},
  {"id": 453,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Sodium bicarbonate?","back": "Metabolic acidosis: Sodium bicarbonate is correct for treatment (so any statement claiming otherwise is false). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01023"},
  {"id": 454,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Indomethacin?","back": "Indomethacin/Ibuprofen → Maintain PDA patency (patent ductus arteriosus). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01034"},
  {"id": 455,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Rifampicin?","back": "Drugs: Rifampicin (a) or Ceftriaxone (b) are first-line. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01092"},
  {"id": 456,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Jellinek's sign → not a contraindication (rarely used clinically). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01109"},
  {"id": 457,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for insulin?","back": "Pages 38–39, 80 – Link to insulinoma or starvation. Use \"Hypoglycemia = Low glucose, High insulin\". Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01131"},
  {"id": 458,"front": "LEK source drill — What key finding, timing, or association is listed for Development & neurology?","back": "Brudziński's sign: \"Neck flexion causes hip/knee flexion\" → Bend Neck → Bend Knees. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01136"},
  {"id": 459,"front": "LEK source drill — What key finding, timing, or association is listed for Orthopedics?","back": "Trendselenburg sign: Think \"Trendelenburg\" (position) + \"sign\" for hip instability. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01145"},
  {"id": 460,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for adrenaline?","back": "Remember \"Neonatal Resuscitation Drugs\" (e.g., adrenaline, surfactant) are covered here. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01210"},
  {"id": 461,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "- Obstetric history of polyhydramnios and double bariatric sign. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01216"},
  {"id": 462,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Includes diagnostic criteria, treatment protocols, drug dosages, and clinical scenarios. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01391"},
  {"id": 463,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Trendelenburg sign: \"Pelvis drops when standing on one leg\" → indicates gluteus medius weakness. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01477"},
  {"id": 464,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "- FAS diagnosis requires all four criteria (maternal alcohol use, physical anomalies, growth deficits, and cognitive dysfunction). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01510"},
  {"id": 465,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Calcium gluconate?","back": "Calcium gluconate is contraindicated in hyperkalemia due to risk of cardiac toxicity. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01554"},
  {"id": 466,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Appears on the face (involves skin between cheek folds – triangular Filatov sign). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01584"},
  {"id": 467,"front": "LEK source drill — What key finding, timing, or association is listed for Dermatology, allergy & immunology?","back": "Filatov Sign: Visualize the triangle between cheek folds on the face – a hallmark of rubella rash. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01589"},
  {"id": 468,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for acyclovir?","back": "Varicella in newborns with maternal infection near delivery is life-threatening – prioritize VZIG and acyclovir in high-risk cases. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01625"},
  {"id": 469,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Ampicillin?","back": "Penicillin, Ampicillin, Ceftriaxone, Cefotaxime, Vancomycin, Meropenem, Rifampicin → PACCCVR. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01752"},
  {"id": 470,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for amoxicillin?","back": "Oral therapy uses amoxicillin and amoxicillin/clavulanate for non-invasive cases. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01754"},
  {"id": 471,"front": "LEK source drill — What key finding, timing, or association is listed for Dermatology, allergy & immunology?","back": "Finkelstein sign: No rash (used to differentiate from other conditions). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01787"},
  {"id": 472,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Hecht sign: Think \"Hecht\" = \"Hematoma\" after injection. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01789"},
  {"id": 473,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Infectious disease & immunization?","back": "Vaccination is the cornerstone of prevention – always refer to the official vaccination schedule. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00025"},
  {"id": 474,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Rectal enema is only performed in the early stages of the disease; later on, there is a risk of intestinal perforation. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00034"},
  {"id": 475,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Weight loss is a quantitative measure but may not always be available in clinical settings. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00058"},
  {"id": 476,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "ml/kg over the first four hours or 5–10 ml/kg after each loose stool. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00075"},
  {"id": 477,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "13. Requires only oral supplementation with NaCl and KCl; no dietary treatment needed. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00094"},
  {"id": 478,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Always confirm total IgA levels when testing for EMA or tTG in IgA class to avoid false negatives due to IgA deficiency. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00206"},
  {"id": 479,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Endocrine & metabolism?","back": "Always check calcium-to-creatinine ratio in urine for hypercalciuria (not just absolute calcium levels). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00218"},
  {"id": 480,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Low-purine diet helps only in dietary cases, not in endogenous overproduction (e.g., gout, Lesh-Nyhan). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00223"},
  {"id": 481,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "First sign: Change in urine odor or visible crystalline sediment on diapers (mucus) SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00228"},
  {"id": 482,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Infectious disease & immunization?","back": "- Antibiotic stewardship is critical in UTIs—always consider local resistance patterns. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00233"},
  {"id": 483,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Invasive tests (supralipocentesis, catheterization) are used only in exceptional circumstances. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00259"},
  {"id": 484,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Lapse: Late Lapse = Late Relapse = 3 days, 3 times in a week. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00317"},
  {"id": 485,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Penicillamine: 50–100 mg/kg/day (divided into 3–4 doses; max 3 g/day for 10 days). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00350"},
  {"id": 486,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Infants <2 months: 15–50 mg/kg/day (3–4 divided doses) or cephalosporins. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00352"},
  {"id": 487,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Cardiology & rheumatology?","back": "No contraindications for sportive activities except uncontrolled stage II hypertension. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00439"},
  {"id": 488,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Cardiology & rheumatology?","back": "Clinical pearl: Only uncontrolled stage II hypertension is a contraindication to sportive activities. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00442"},
  {"id": 489,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Spasmus nutans is the only condition in this list requiring neuroimaging. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00525"},
  {"id": 490,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Genetics & congenital syndromes?","back": "Munchausen's Syndrome involves fabricated symptoms by parents; always consider psychosocial factors in unexplained pediatric cases. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00532"},
  {"id": 491,"front": "LEK source drill — What key finding, timing, or association is listed for Oncology & hematology?","back": "Head injuries, subcutaneous bruising, bleeding from the ear or nose, Battle’s sign (bruise behind the ear) → Skull fracture SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00543"},
  {"id": 492,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Rifampicin?","back": "TB treatment drugs: Remember RIPE (Rifampicin, Isoniazid, Pyrazinamide, Ethambutol) + Ethionamide Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00547"},
  {"id": 493,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Flatau sign (ocular-chorioretinal); other focal symptoms are rarely present SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00580"},
  {"id": 494,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Flattau sign Pupils dilated (cervico-midriatic) or testicle release (erective) \"Erective\" sign is specific to tuberculous ZOMR SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00587"},
  {"id": 495,"front": "LEK source drill — What key finding, timing, or association is listed for Kernig?","back": "Weil-Edelman's During lower Kernig's sign Hallux dorsal flexion Meningitis, cerebral edema SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00602"},
  {"id": 496,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for vancomycin?","back": "If resistant to vancomycin and rifampicin: Adjust accordingly Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00628"},
  {"id": 497,"front": "LEK source drill — What number, timing, or threshold is listed under Oncology & hematology?","back": "Children over 1 year more commonly have infratentorial tumors. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00710"},
  {"id": 498,"front": "LEK source drill — What number, timing, or threshold is listed under Oncology & hematology?","back": "Children >1 year = infratentorial tumors (e.g., medulloblastoma). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00720"},
  {"id": 499,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for cefotaxime?","back": "Combination of cephalosporins (cefotaxime, ceftriaxone) and penicillins (ampicillin, piperacillin) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00732"},
  {"id": 500,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Histopathological evaluation of the mass according to Shimada criteria SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00767"},
  {"id": 501,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Oncology & hematology?","back": "Retinoblastoma history is a red flag for osteosarcoma – always check for bone lesions in these patients. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00783"},
  {"id": 502,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Orthopedics?","back": "Surgical removal: Bones that do not cause disability (e.g., rib, sternum). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00785"},
  {"id": 503,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Oncology & hematology?","back": "Only large tumors causing optic nerve compression are treated. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00797"},
  {"id": 504,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Key: Benign, spontaneous regression; treat only if causing optic nerve compression. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00800"},
  {"id": 505,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "\"Currant jelly stool\" is a hallmark but not always present. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00899"},
  {"id": 506,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Amoxicillin?","back": "- Antibiotic Mnemonic: \"I° Amoxicillin, II° Amoxicillin + Aminoglycosides/Cefuroxime/Clarithromycin\" Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-00922"},
  {"id": 507,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Diagnosis based on confirmation of at least 3 out of 4 main symptoms (per Hanifin and Rajka criteria) or at least 3 from numerous minor SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00938"},
  {"id": 508,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Table 9. Clinical Symptoms of AZS, Criteria Hanifina and Rajki SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00941"},
  {"id": 509,"front": "LEK source drill — What key finding, timing, or association is listed for Dermatology, allergy & immunology?","back": "Main Symptoms of Atopic Dermatitis (Hanifin and Rajka Criteria) SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00946"},
  {"id": 510,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Infectious disease & immunization?","back": "Exception: Varicella zoster virus (VZV) is not part of TORCH. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00999"},
  {"id": 511,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Orthopedics?","back": "b) Both statements are true, but they do not form a causal relationship. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01016"},
  {"id": 512,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for indomethacin?","back": "In the treatment of congenital heart defects, we use indomethacin or ibuprofen; these drugs cause maintenance of patency of the pulmonary Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01030"},
  {"id": 513,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Nephrology & urology?","back": "Identify the false statement regarding kidney stones in children. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01043"},
  {"id": 514,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Cardiology & rheumatology?","back": "Key Point: Uncontrolled Grade II hypertension is the only contraindication for competitive sports. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01058"},
  {"id": 515,"front": "LEK source drill — What key finding, timing, or association is listed for Dermatology, allergy & immunology?","back": "Hanifin criteria Diagnostic for atopic dermatitis 210, 212 SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01132"},
  {"id": 516,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "- Absence of fetal stomach visualization (earliest sign) SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01175"},
  {"id": 517,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "- Mouth-to-mouth ventilation is a red flag in suspected diaphragmatic hernia due to risk of esophageal rupture. Always prioritize intubation. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01176"},
  {"id": 518,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "1. Administer prostaglandin E1 (prostin) i.v. in continuous infusion 0.01–0.02 µg/kg/min. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01195"},
  {"id": 519,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Neonatology?","back": "Meconium ileus is a red flag for cystic fibrosis. Always consider this diagnosis in neonates with intestinal obstruction and thick meconium. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01218"},
  {"id": 520,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "of the first day > 40 mg%, and during the first week of life > 45 mg%. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01227"},
  {"id": 521,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Administer 10% glucose at a dose of 2 ml/kg (200 mg/kg). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01239"},
  {"id": 522,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Endocrine & metabolism?","back": "- Always monitor cardiac rhythm during calcium administration to prevent arrhythmias. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01256"},
  {"id": 523,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for indomethacin?","back": "Pharmacological closure of the ductus arteriosus with indomethacin or surgical ligation Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01316"},
  {"id": 524,"front": "LEK source drill — What key finding, timing, or association is listed for Apgar?","back": "MAS Mnemonic: Meconium Aspiration Syndrome – Remember the 3 key signs: Green amniotic fluid, Low Apgar score, and Snowstorm SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01334"},
  {"id": 525,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "- 4 mg/24 hours during preconception and subsequent pregnancies. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01351"},
  {"id": 526,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "4 mg folic acid is critical for women with a history of spina bifida to prevent recurrence. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01356"},
  {"id": 527,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Respiratory?","back": "Clinical Pearl: Always consider pulmonary hypoplasia in infants with respiratory failure and abnormal chest imaging. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01363"},
  {"id": 528,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Only IgG antibodies play a pathogenic role in the serological conflict because they have the ability to cross the placental barrier. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01383"},
  {"id": 529,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "- IgG antibodies are the only pathogenic antibodies in hemolytic disease because they cross the placenta. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01385"},
  {"id": 530,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "- Always cross-check drug dosages with the latest guidelines (e.g., WHO, AAP) to ensure accuracy. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01392"},
  {"id": 531,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Rh system: Conflict typically occurs only during the second pregnancy (first pregnancy has an immunizing effect). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01406"},
  {"id": 532,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Pumping sign: Sliding of the thigh along the midline during pressure SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01469"},
  {"id": 533,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Trendelenburg sign: When the child stands on one leg (other leg bent at knee and pelvis), a drop of the pelvis indicates dysfunction of the middle SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01471"},
  {"id": 534,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Intratracheal administration: Requires several times higher doses. Dilute with saline to a volume of 1–2 ml. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01518"},
  {"id": 535,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Neonatology?","back": "Use restrictions: Only in properly ventilated neonates. Only if metabolic acidosis is suspected. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01520"},
  {"id": 536,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Adrenaline?","back": "Adrenaline Cardiac arrest, bradycardia 0.1–0.3 IV/ET Tachycardia, vomiting Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01527"},
  {"id": 537,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Sodium Bicarbonate?","back": "Sodium Bicarbonate Metabolic acidosis 2–4 (resuscitation) IV Osmolarity, necrosis Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01528"},
  {"id": 538,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Administer prostaglandin E1 (prostigmin) i.v. as continuous infusion at rates of 0.01–0.02 µg/kg/min. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01542"},
  {"id": 539,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "\"2 ml/kg, then 8–15 mg/kg/min\" – use this sequence to avoid rapid glucose overload. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01545"},
  {"id": 540,"front": "LEK source drill — What number, timing, or threshold is listed under Cardiology & rheumatology?","back": "\"Avoid 1 ml/kg over 10 minutes\" – rapid infusion risks cardiac arrhythmias. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01546"},
  {"id": 541,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "\"0.01–0.02 µg/kg/min\" – low infusion rates to prevent side effects. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01548"},
  {"id": 542,"front": "LEK source drill — What key finding, timing, or association is listed for Koplik?","back": "- Koplik's spots appear in the 2nd or 3rd day of the pre-rash phase – white spots with a red border localized on the buccal mucosa of the mouth at the SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01559"},
  {"id": 543,"front": "LEK source drill — What number, timing, or threshold is listed under Dermatology, allergy & immunology?","back": "Incubation Period: 4 days before rash + 3 days after rash = 7-day window for diagnosis. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01563"},
  {"id": 544,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "HIV-infected children or AIDS patients: Give 0.5 ml/kg mc. post-exposure, even if vaccinated. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01570"},
  {"id": 545,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Swollen lymph nodes may be the only symptom of illness. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01583"},
  {"id": 546,"front": "LEK source drill — What number, timing, or threshold is listed under Dermatology, allergy & immunology?","back": "Confirmation of IgM antibodies appearing during the 2nd week of rash with increasing exudate over 2–3 weeks. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01591"},
  {"id": 547,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Infectious disease & immunization?","back": "Transmission: droplet, airborne, contact; reservoir is only the person with chickenpox or shingles (rarely herpes zoster). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01595"},
  {"id": 548,"front": "LEK source drill — What number, timing, or threshold is listed under Dermatology, allergy & immunology?","back": "2nd week of rash → IgM appears; 2–3 weeks → exudate increases. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01598"},
  {"id": 549,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Nephrology & urology?","back": "Routine nasopharyngeal carriage testing is not recommended, except for epidemic focus diagnosis. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01687"},
  {"id": 550,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Nasal swab cultures are not recommended for pneumococci isolation. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01732"},
  {"id": 551,"front": "LEK source drill — What number, timing, or threshold is listed under Infectious disease & immunization?","back": "Ganciclovir Inhibits viral DNA synthesis CMV infections 5 mg/kg IV every 12 hours Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00007"},
  {"id": 552,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Gastroenterology & nutrition?","back": "- Positive stool culture (+) → bacterial diarrhea (despite a very high probability of infectious etiology, bacteriological examination is not always positive) SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00059"},
  {"id": 553,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Gastroenterology & nutrition?","back": "→ Bacterial diarrhea (despite a very high probability of infectious etiology, bacteriological examination is not always positive) SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00063"},
  {"id": 554,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "7. Metronidazole (20 mg/kg mc./24 hours) or cotrimoxazole (5–10 mg trimethoprim/kg mc./24 hours) for 7–10 days in dysbacteriosis (<6 Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00091"},
  {"id": 555,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Dysbacteriosis Metronidazole (20 mg/kg/24h), cotrimoxazole (5–10 mg trimethoprim/kg/24h) 7–10 days Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00102"},
  {"id": 556,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "growth delay) should prompt early endoscopic evaluation to rule out organic pathology. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00140"},
  {"id": 557,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "7. Testing only EMA or tTG in one antibody class (e.g., IgA without total IgA level determination) SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00199"},
  {"id": 558,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "more invasive method (e.g., catheterization) to rule out contamination. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00263"},
  {"id": 559,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Ciprofloxacin (not recommended for children due to safety concerns) SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00283"},
  {"id": 560,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Nitrofurantoin: 1–2 mg/kg every 24 hours (6 weeks or longer) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00287"},
  {"id": 561,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Sodium nitrofurantoin: 50 mg/kg every 24 hours (10–14 days) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00290"},
  {"id": 562,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "\"Trimethoprim-Sulfamethoxazole\": Prevents Pneumocystis carinii until 1 year of age Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00384"},
  {"id": 563,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "\"Normal CT = <90th centile; always use right arm for consistency.\" SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00392"},
  {"id": 564,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Nephrology & urology?","back": "Pharmacological treatment not recommended unless other indications (e.g., chronic kidney disease, heart failure, left ventricular hypertrophy) SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00395"},
  {"id": 565,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "🧠 Comparison table: Common causes of hypertension in newborns vs. 1–2 year-olds Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00420"},
  {"id": 566,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Upper limbs: Always flexed and adducted; hands tucked into the axilla SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00464"},
  {"id": 567,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Development & neurology?","back": "Infants and young children with normal development and neurological examination require only blood glucose and calcium levels. Further diagnostic SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00510"},
  {"id": 568,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Development & neurology?","back": "Anisocoria + Focal Neurological Symptoms = High suspicion for intracranial pathology (e.g., tumor, hemorrhage). Always prioritize SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00551"},
  {"id": 569,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "White (mg/dl) Markedly elevated >100–500 (less than 50% changes in serum) Normal or slightly elevated Elevated Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00588"},
  {"id": 570,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Nafcillin (200–300 mg/kg mc./24 hours) or oxacillin (200–300 mg/kg mc./24 hours) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00629"},
  {"id": 571,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Amphotericin B: 0.25 mg/kg BW/24 h, increasing to 1.5 mg/kg BW/24 h Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00641"},
  {"id": 572,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Development & neurology?","back": "Persistent headaches in children always warrant imaging if associated with neurological abnormalities, increased intracranial pressure, or SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00677"},
  {"id": 573,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Respiratory?","back": "3. Antibiotic therapy only if lower respiratory tract inflammation is confirmed SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00859"},
  {"id": 574,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Perlakowicz inflammation is always surgical due to structural destruction, unlike simple chronic inflammation which may have medical SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00929"},
  {"id": 575,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Nephrology & urology?","back": "False statement in kidney stones: Infants with urinary stones do not typically show lack of body mass gain and no kidney swelling SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01047"},
  {"id": 576,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Cardiology & rheumatology?","back": "e) children do not receive pharmacological treatment for hypertension SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01064"},
  {"id": 577,"front": "LEK source drill — What key finding, timing, or association is listed for Infectious disease & immunization?","back": "Varicella infectious period: 4 before, 13 after rash (mnemonic: 4-13 Rule). SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01072"},
  {"id": 578,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Infectious disease & immunization?","back": "Which of the following statements about measles is incorrect? SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01074"},
  {"id": 579,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "[Incomplete question; only options a and b are listed in the original text] SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01088"},
  {"id": 580,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "A previously healthy 7-month-old, breastfed infant was hospitalized due to fevers up to 38.7°C for 2 days without an apparent cause. Physical Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01099"},
  {"id": 581,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "- Paroxysmal torticollis (pages 151, 166) often resolves spontaneously in infants but may require imaging to rule out intracranial hemorrhage. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01134"},
  {"id": 582,"front": "LEK source drill — What key finding, timing, or association is listed for WAGR?","back": "Pallister-Hall, Perlman, Turcot, WAGR: Use \"PPTW\" to recall these syndromes. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01153"},
  {"id": 583,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "levels checked depending on the results and condition of the child: every 6 hours during the first day, every 12 hours during the second day, and every Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01229"},
  {"id": 584,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "Neonatal hypocalcemia is diagnosed if the calcium level is below 8 mg% (2 mmol/l), and in premature infants, it is below 7 mg% (1.75 Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01242"},
  {"id": 585,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Hydrocortisone: 5 mg/kg/24 hours (for infants of diabetic mothers) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01245"},
  {"id": 586,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Nephrology & urology?","back": "Clinical Pearl: Hypernatremia requires gradual correction to avoid cerebral edema. Always monitor electrolytes and renal function during SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01266"},
  {"id": 587,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "10. Maintain phenylalanine levels within 2–6 mg% throughout pregnancy Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01293"},
  {"id": 588,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Head imaging: Always include head imaging (transverse USG, CT, or MRI) due to the frequent association of fatty arachnoid cysts with Arnold- SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01359"},
  {"id": 589,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Arnold-Chiari complex is frequently associated with fatty arachnoid cysts and severe cranial/spinal malformations. Always consider SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01360"},
  {"id": 590,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "Severe jaundice (conjugated bilirubin level over 20 mg/dL or increasing conjugated bilirubin > 0.5 mg/kg mc./hour) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01384"},
  {"id": 591,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Blood exchange transfusion (transfusion of double the amount of circulating blood with a volume of 80–100 ml/kg, which allows for the Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01388"},
  {"id": 592,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "Average bilirubin level > 20 mg% (non-hemolytic jaundice) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01398"},
  {"id": 593,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "Average bilirubin level > 10–15 mg% (ChHN associated with fetal edema, placental insufficiency, infection) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01399"},
  {"id": 594,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "Average bilirubin >20 mg% (non-hemolytic) or >10–15 mg% (ChHN with fetal edema) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01403"},
  {"id": 595,"front": "LEK source drill — What number, timing, or threshold is listed under Gastroenterology & nutrition?","back": "Abnormal delivery (cesarean section, manual placenta extraction, stillbirth): 300 µg Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01412"},
  {"id": 596,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "10. Dawkowanie: 1–6 mg/kg/24 godziny (dawki pojedyncze lub podzielone) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01426"},
  {"id": 597,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Endocrine & metabolism?","back": "Clinical symptoms appear only in the first weeks of life (transplacental passage of maternal thyroid hormones) SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01440"},
  {"id": 598,"front": "LEK source drill — What key finding, timing, or association is listed for Ortolani?","back": "Key Tip: Both signs require the infant to be supine with hips flexed to 90°. Ortolani confirms reduction, Barlow confirms instability. SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01468"},
  {"id": 599,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Early detection: Multiple delicate examinations during pregnancy and up to 1 year after birth. First examination should occur at the beginning of Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01472"},
  {"id": 600,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Diazepam?","back": "Diazepam: Used for acute spasms; routes include p.r. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01537"},
  {"id": 601,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "150–200 mg/kg/24 hours for newborns and preterm infants Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01544"},
  {"id": 602,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Infectious disease & immunization?","back": "chemotherapy, antibiotics) in relation to the observed clinical picture of the disease. An adequate antibiotic choice must always be made based on SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-01556"},
  {"id": 603,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Children over 9 months of age (preferred over 1 year for better immune response) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01621"},
  {"id": 604,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "<1 month old: 5 mg/kg mc. p.o. every 12 hours for 2 days Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01698"},
  {"id": 605,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Penicillin: 400,000 j.m./kg mc/24 hours every 4–6 hours Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01733"},
  {"id": 606,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "2. Peritonsillar Abscess (usually on the 8th day of illness; 4% of cases may cause infertility) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01774"},
  {"id": 607,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Mortality (30%) → Spinal cord compression (thoracic) → Hypoxia (lung). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00024"},
  {"id": 608,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "80% of cases involve children aged 4–12 months; occurs significantly more often in boys. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00028"},
  {"id": 609,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Rectal enema is contraindicated after 12 hours due to perforation risk. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00045"},
  {"id": 610,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "- Severe symptoms include: sunken eyeballs (sub-cranial), absence of mouth/tongue moisture, very slow skin fold retraction, and weight loss >10%. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00057"},
  {"id": 611,"front": "LEK source drill — What number, timing, or threshold is listed under Gastroenterology & nutrition?","back": "Rapid rehydration based on diet before illness onset, within 4 hours of oral feeding. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00086"},
  {"id": 612,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Clinical Pearl: Recurrent abdominal pain in children aged 6–12 years is often functional, but organic causes must be ruled out in 10–15% of cases. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00136"},
  {"id": 613,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Colic resolves spontaneously by 4–5 months; no long-term complications. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00159"},
  {"id": 614,"front": "LEK source drill — What number, timing, or threshold is listed under Nephrology & urology?","back": "Product of Absorptive vs. Kidney hyperkaliuria – calcium-creatinine index after 7 days dairy-free and calcium supplementation. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00221"},
  {"id": 615,"front": "LEK source drill — What number, timing, or threshold is listed under Infectious disease & immunization?","back": "For HIV diagnosis in infants: Early blood morphology testing is critical to detect infection within the first 2 days of life. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00253"},
  {"id": 616,"front": "LEK source drill — What number, timing, or threshold is listed under Nephrology & urology?","back": "Any UTI in a child <2 years old should be treated as probable acute pyelonephritis, especially if accompanied by fever. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00255"},
  {"id": 617,"front": "LEK source drill — What number, timing, or threshold is listed under Nephrology & urology?","back": "USG first, then cystography (after 4–6 weeks post-UTI), and DMSA for pyelonephritis confirmation. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00277"},
  {"id": 618,"front": "LEK source drill — What number, timing, or threshold is listed under Nephrology & urology?","back": "\"3-Upper, 5-Lower\" (3–10 days for upper UTI; 3–5 days for lower UTI). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00278"},
  {"id": 619,"front": "LEK source drill — What number, timing, or threshold is listed under Genetics & congenital syndromes?","back": "Glucocorticoid therapy for 6 months is the gold standard for idiopathic nephrotic syndrome in children. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00307"},
  {"id": 620,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Relapse rate is high (~70%), emphasizing the need for long-term monitoring. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00308"},
  {"id": 621,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Clinical and biochemical remission achieved within the first 4 weeks of initial treatment. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00314"},
  {"id": 622,"front": "LEK source drill — What number, timing, or threshold is listed under Nephrology & urology?","back": "Remission: Remember Remission = Remove Proteinuria for 3 days. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00316"},
  {"id": 623,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "- Swelling and lymphadenopathy are hallmark signs in 90% of OPKZN cases. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00344"},
  {"id": 624,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Occurs in ~30% of cases; lasts up to 2 weeks, then progresses to hemoglobinuria (characteristic of OPKZN), which may persist for 6–12 months. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00346"},
  {"id": 625,"front": "LEK source drill — What number, timing, or threshold is listed under Nephrology & urology?","back": "↑ ASO titer (peaks 4–6 weeks after OPKZN) in all OPKZN patients, after glomerulonephritis, and in ~50% of patients with skin inflammation. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00348"},
  {"id": 626,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Symptoms subside within weeks or months in ~98% of cases. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00359"},
  {"id": 627,"front": "LEK source drill — What number, timing, or threshold is listed under Nephrology & urology?","back": "May lead to sclerosing glomerulonephritis, hypertension, and reduced proteinuria (hypocomplementemia lasting >6 months). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00361"},
  {"id": 628,"front": "LEK source drill — What number, timing, or threshold is listed under Nephrology & urology?","back": "98% resolve quickly; 1% risk chronic kidney issues in epidemic OPKZN. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00366"},
  {"id": 629,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Child should sit calmly for 5 minutes before measurement. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00387"},
  {"id": 630,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Condition where systolic blood pressure exceeds 99th percentile for age by at least 30 mmHg. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00404"},
  {"id": 631,"front": "LEK source drill — What number, timing, or threshold is listed under Genetics & congenital syndromes?","back": "Acquired nephrotic syndrome (NT) accounts for 60–80% of cases in children. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00425"},
  {"id": 632,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Failure of lifestyle modification/diet after 6 months of observation. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00440"},
  {"id": 633,"front": "LEK source drill — What number, timing, or threshold is listed under Development & neurology?","back": "Before 2 years of age: Developmental disorders (central nervous system origin – DMPC). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00453"},
  {"id": 634,"front": "LEK source drill — What number, timing, or threshold is listed under Genetics & congenital syndromes?","back": "West syndrome is strongly associated with bilateral hemiplegia (50–90% prevalence). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00470"},
  {"id": 635,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "50% of cases concern premature infants and newborns with low birth weight. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00478"},
  {"id": 636,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "Muscle tension increases after 2 years of life with deep reflexes dominance. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00484"},
  {"id": 637,"front": "LEK source drill — What number, timing, or threshold is listed under Development & neurology?","back": "Complex – lasting more than 15 minutes or multiple seizures within the same illness, accompanied by neurological symptoms. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00514"},
  {"id": 638,"front": "LEK source drill — What number, timing, or threshold is listed under Development & neurology?","back": "All children under 12 months with feverish seizures require immediate diagnostic evaluation due to higher risk of underlying pathology. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00520"},
  {"id": 639,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "For infants (<23 months): Focus on gestures, crying, and reflexes. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00558"},
  {"id": 640,"front": "LEK source drill — What number, timing, or threshold is listed under Orthopedics?","back": "Positive: Inability to bend forward deeply without flexing lower limbs at hip and knee joints (normal in children <5–6 years). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00592"},
  {"id": 641,"front": "LEK source drill — What key finding, timing, or association is listed for Kernig?","back": "Kernig's (upper) Trunk flexion Reflexive lower limb flexion at hip/knee Meningitis, cerebral edema SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00599"},
  {"id": 642,"front": "LEK source drill — What number, timing, or threshold is listed under Development & neurology?","back": "30–40% of children experience recurring headaches (peak: ages 7–14). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00647"},
  {"id": 643,"front": "LEK source drill — What number, timing, or threshold is listed under Respiratory?","back": "Associated with infectious diseases (mainly viral; 57% due to upper respiratory tract infections). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00650"},
  {"id": 644,"front": "LEK source drill — What number, timing, or threshold is listed under Development & neurology?","back": "Viral infections (e.g., upper respiratory tract infections) account for 57% of infectious-related headaches in children. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00654"},
  {"id": 645,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Sudden vertigo, dizziness, nystagmus; occurs in children aged 2–3 years (preceding migraines). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00656"},
  {"id": 646,"front": "LEK source drill — What number, timing, or threshold is listed under Oncology & hematology?","back": "Prevalence: Most common childhood leukemia, accounting for 80–85% of all cases. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00693"},
  {"id": 647,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "- Remember Reed-Sternberg cells and rare under 4 years. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00707"},
  {"id": 648,"front": "LEK source drill — What number, timing, or threshold is listed under Oncology & hematology?","back": "- 20–25% of childhood cancers; focus on brain tumor diversity. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00708"},
  {"id": 649,"front": "LEK source drill — What number, timing, or threshold is listed under Oncology & hematology?","back": "80% of primary brain tumors in children originate from neuroepithelial tissue. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00709"},
  {"id": 650,"front": "LEK source drill — What number, timing, or threshold is listed under Oncology & hematology?","back": "Second most common solid tumor after OUN tumors in children, accounting for 8% of all childhood cancers. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00759"},
  {"id": 651,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "Most common aggressive tumor during the neonatal period and most common abdominal mass up to 3 years of age. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00760"},
  {"id": 652,"front": "LEK source drill — What number, timing, or threshold is listed under Oncology & hematology?","back": "Neuroblastoma is the most common abdominal tumor in children under 3 years. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00766"},
  {"id": 653,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Mnemonic: \"Super 7\" (superior quadrant, regression by 7 years). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00799"},
  {"id": 654,"front": "LEK source drill — What number, timing, or threshold is listed under Oncology & hematology?","back": "3% of all tumors in children up to 15 years old are germinal cell tumors or other localized tumors. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00803"},
  {"id": 655,"front": "LEK source drill — What number, timing, or threshold is listed under Oncology & hematology?","back": "95% of testicular germ cell tumors are benign teratomas. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00805"},
  {"id": 656,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Age of onset: Most common in preschool children; 90% diagnosed by age 7. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00813"},
  {"id": 657,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Bilateral involvement: ~5–8% of cases (associated with nephroblastomatosis – incomplete maturation of nephrogenic cells). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00814"},
  {"id": 658,"front": "LEK source drill — What key finding, timing, or association is listed for WAGR?","back": "- WAGR syndrome (Wilms' tumor – aniridia – genitourinary malformation – mental retardation) SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00815"},
  {"id": 659,"front": "LEK source drill — What number, timing, or threshold is listed under Oncology & hematology?","back": "Prevalence: Comprise about 2% of all childhood tumors; more common in boys. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00827"},
  {"id": 660,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Asymptomatic growth of the primary lesion; 10% of cases are incidentally diagnosed. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00829"},
  {"id": 661,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "AFP (Alpha-fetoprotein): Key diagnostic marker in 80% of hepatoblastoma cases. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00832"},
  {"id": 662,"front": "LEK source drill — What number, timing, or threshold is listed under Oncology & hematology?","back": "Imaging: CT scan detects solid masses in the right upper quadrant (6% of cases), while USG with Doppler evaluates tumor vascularity. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00835"},
  {"id": 663,"front": "LEK source drill — What number, timing, or threshold is listed under Respiratory?","back": "Bacterial infection – 90% of infections are caused by S. pneumoniae, H. influenzae, M. catarrhalis. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00843"},
  {"id": 664,"front": "LEK source drill — What number, timing, or threshold is listed under Respiratory?","back": "Bacterial causes (90%): SHM – S. pneumoniae, H. influenzae, M. catarrhalis. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00847"},
  {"id": 665,"front": "LEK source drill — What number, timing, or threshold is listed under Infectious disease & immunization?","back": "Duration of antibiotic therapy: 14–21 days (critical for resolution). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00849"},
  {"id": 666,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Red flags: Age <2 years, delayed presentation, perforation risk. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00887"},
  {"id": 667,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Imaging: Ultrasound preferred in children <5 years; CT in older patients. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00888"},
  {"id": 668,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Non-surgical: Successful in 80% of cases with enema reduction. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00892"},
  {"id": 669,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Surgical correction: Preferred between 6–18 months of age. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00893"},
  {"id": 670,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "\"Early surgery\" (6–18 months) avoids complications like curvature. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00900"},
  {"id": 671,"front": "LEK source drill — What number, timing, or threshold is listed under Infectious disease & immunization?","back": "6. Body weight below 2000 g and children born before 32 weeks gestation – contraindicated for measles vaccination. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00971"},
  {"id": 672,"front": "LEK source drill — What key finding, timing, or association is listed for Other / mixed?","back": "Correct answer: a) a positive Allis or Galezzi sign SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-00997"},
  {"id": 673,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "- The preparation must be administered within 24 hours after childbirth. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01015"},
  {"id": 674,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Rh anti-D IgG: \"Rho(D) IgG in 24\" (administer within 24 hours after childbirth for Rh-positive mothers with Rh-negative children). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01021"},
  {"id": 675,"front": "LEK source drill — What number, timing, or threshold is listed under Infectious disease & immunization?","back": "For varicella, isolation is required 4 days before rash onset until 13 days after to prevent transmission. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01073"},
  {"id": 676,"front": "LEK source drill — What number, timing, or threshold is listed under Infectious disease & immunization?","back": "b) Measles rash appears within 24 hours after the onset of illness and lasts for approximately 5 days. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01075"},
  {"id": 677,"front": "LEK source drill — What number, timing, or threshold is listed under Infectious disease & immunization?","back": "Measles rash timeline: Appears within 24 hours (not days later). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01081"},
  {"id": 678,"front": "LEK source drill — What drug detail, dose, route, or interval is listed for Acetaminophen?","back": "Treatment: \"R, H, A, A\" (Rest, Hydration, Acetaminophen, Antivirals). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "pharma","sourceAtomId": "LEK-01157"},
  {"id": 679,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "- Condition deteriorates within 2–3 days due to ductus closure. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01190"},
  {"id": 680,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "\"2–3 days\" → Ductus closure triggers cyanosis in TOF/TA. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01194"},
  {"id": 681,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Volpe Classification: Remember \"10–50%\" for Grade II intraventricular hemorrhage. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01271"},
  {"id": 682,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "- Diagnosed in almost 70% of newborns born between 26 and 30 weeks of gestation. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01311"},
  {"id": 683,"front": "LEK source drill — What number, timing, or threshold is listed under Respiratory?","back": "TTN typically resolves within 24–72 hours, while RDS requires prolonged respiratory support. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01319"},
  {"id": 684,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Clinical Pearl: MAS symptoms typically resolve within 24–72 hours with supportive care. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01324"},
  {"id": 685,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Dopamine: 2–10 μg/kg/min → Dose 2–10 for Dopamine. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01349"},
  {"id": 686,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "W około 50% przypadków towarzyszy zwrot moczu (refluks) i hydronefroza. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01366"},
  {"id": 687,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Ektopia + hydronefroza → 50% przypadków towarzyszy refluks. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01370"},
  {"id": 688,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Surgical Treatment: One- or multi-stage procedures performed around 6–24 months of age. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01373"},
  {"id": 689,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Physiological Note: In boys aged 2–3 years, the foreskin does not retract due to adhesion to the glans. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01374"},
  {"id": 690,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "All women up to 12 weeks of pregnancy should have ABO blood type and alloantibodies tested. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01410"},
  {"id": 691,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "All women around 28 weeks of pregnancy should have alloantibodies tested. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01411"},
  {"id": 692,"front": "LEK source drill — What number, timing, or threshold is listed under Gastroenterology & nutrition?","back": "Administer within 72 hours after delivery or miscarriage. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01415"},
  {"id": 693,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "IgG anti-D must be administered within 72 hours after delivery or miscarriage to prevent hemolytic disease of the newborn. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01419"},
  {"id": 694,"front": "LEK source drill — What number, timing, or threshold is listed under Dermatology, allergy & immunology?","back": "Incubation period – 4 days before and 3 days after the rash appears. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01557"},
  {"id": 695,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Incidence: Affects 15% of patients; risk doubles or triples in those over the age of 10. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01565"},
  {"id": 696,"front": "LEK source drill — What number, timing, or threshold is listed under Development & neurology?","back": "Meningoencephalitis and myelitis (1:1000 cases) – most severe complication; mortality rate 10–30%. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01566"},
  {"id": 697,"front": "LEK source drill — What number, timing, or threshold is listed under Infectious disease & immunization?","back": "SSPE Timing: Remember \"4–10 years\" after measles infection. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01571"},
  {"id": 698,"front": "LEK source drill — What number, timing, or threshold is listed under Development & neurology?","back": "Severe Complication: Meningoencephalitis (1:1000 cases) has 10–30% mortality – critical to note. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01574"},
  {"id": 699,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Rubella risk timeline: First trimester → high risk; >22 weeks → low risk. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01578"},
  {"id": 700,"front": "LEK source drill — What number, timing, or threshold is listed under Dermatology, allergy & immunology?","back": "Incubation period: 7 days before rash onset, 5 days after rash appears. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01579"},
  {"id": 701,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "VZIG is most effective within 96 hours of exposure, but may still be beneficial if administered later, especially for high-risk individuals. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01639"},
  {"id": 702,"front": "LEK source drill — What number, timing, or threshold is listed under Dermatology, allergy & immunology?","back": "Trunk and extremities: Garland-like rash, lasting 7–10 days (up to 3 weeks). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01641"},
  {"id": 703,"front": "LEK source drill — What number, timing, or threshold is listed under Nephrology & urology?","back": "Joint inflammation: Spontaneous resolution in hands, knees, and ankles (10% of cases). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01642"},
  {"id": 704,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "15–20% of asymptomatic infected individuals have EBV in saliva. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01646"},
  {"id": 705,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "During the disease course (may persist up to 18 months). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01648"},
  {"id": 706,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Leukocytозa 10–30 tys. z dominacją limfocytów (60–80%), w tym 10–20% limfocytów atypowych (mononuklearnych). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01656"},
  {"id": 707,"front": "LEK source drill — What number, timing, or threshold is listed under Genetics & congenital syndromes?","back": "U dzieci z syndromem Chediak-Higashiego i 1% dzieci po przeszczepie narządu. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01657"},
  {"id": 708,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "9. Najcięższy przebieg u nastolatków (śmiertność do 20%). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01665"},
  {"id": 709,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "12. 80% Polaków ma przeciwciała wskazujące na wcześniejszy kontakt z bakterią. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01667"},
  {"id": 710,"front": "LEK source drill — What number, timing, or threshold is listed under Infectious disease & immunization?","back": "If the mother contracts the primary infection before or during pregnancy, the virus passes to the fetus in 40% of cases. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01682"},
  {"id": 711,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Children <2 years have 10× higher incidence than general population. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01717"},
  {"id": 712,"front": "LEK source drill — What number, timing, or threshold is listed under Development & neurology?","back": "5–10% mortality, 25–35% neurological defects – use \"5-10 and 25-35\" as a recall anchor. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01731"},
  {"id": 713,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Period of contagiousness: A few days before falling ill until 6 weeks after the illness (period of virus excretion in the feces). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01756"},
  {"id": 714,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Before symptoms → 6 weeks post-illness (virus excretion in feces). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01761"},
  {"id": 715,"front": "LEK source drill — What number, timing, or threshold is listed under Infectious disease & immunization?","back": "Paralytic poliomyelitis following live attenuated vaccine (OPV) or 4–75 days after contact with a person vaccinated with OPV. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01763"},
  {"id": 716,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Isolation of patients until clinical symptoms subside, for at least 9 days. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01781"},
  {"id": 717,"front": "LEK source drill — What number, timing, or threshold is listed under Dermatology, allergy & immunology?","back": "Scarlet fever rash: \"Blanching, fine, and fleeting\" (blanching, fine papules, resolves in 5 days). Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01790"},
  {"id": 718,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Administered intravenously at 5 mg/kg every 12 hours Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00002"},
  {"id": 719,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "First Period 7–14 days Fever, runny nose, dry cough Widening of interstitial markings Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00013"},
  {"id": 720,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Recovery Period 1–2 weeks Gradual reduction of cough N/A Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00015"},
  {"id": 721,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Incubation period: 3–21 days; the shorter the incubation period, the more severe the disease Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00022"},
  {"id": 722,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "- Cause: 95% idiopathic; 5% secondary (e.g., Meckel’s diverticulum, Peyer’s patches) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00031"},
  {"id": 723,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Surgical treatment – more than 12 hours after the onset of disease symptoms, in the case of symptoms of intestinal perforation and after an Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00035"},
  {"id": 724,"front": "LEK source drill — What number, timing, or threshold is listed under Gastroenterology & nutrition?","back": "Chronic diarrhea – a condition lasting more than 14 days, characterized by the child passing an increased number of Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00039"},
  {"id": 725,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Age range: Occurs primarily between 6 to 36 months of age Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00049"},
  {"id": 726,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "- Interview; chloride concentration > 60 mmol/l in urine → maldigestion Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00060"},
  {"id": 727,"front": "LEK source drill — What number, timing, or threshold is listed under Gastroenterology & nutrition?","back": "Secretory pH > 6, Na+ < 70 mmol/l, osmolarity < 140 mOsm/l VIPoma, autoimmune diarrhea Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00064"},
  {"id": 728,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Clinical Symptoms (Early Stage: Symptoms appear within 2 years of life) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00069"},
  {"id": 729,"front": "LEK source drill — What number, timing, or threshold is listed under Gastroenterology & nutrition?","back": "- Clinical pearl: Chronic diarrhea with pH <6, Na <70 mmol/l, and osmolality >140 mOsm/l strongly suggests osmotic causes (e.g., lactose Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00078"},
  {"id": 730,"front": "LEK source drill — What number, timing, or threshold is listed under Genetics & congenital syndromes?","back": "Children 2–12 years: EMVIM (Esophageal varices, Malory-Weiss syndrome, Vascular malformations, Intestinal duplication, Meckel's Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00109"},
  {"id": 731,"front": "LEK source drill — What number, timing, or threshold is listed under Gastroenterology & nutrition?","back": "Celiac disease prevalence: 1 in 300–1800 children aged 2.5–15 years (≈1% of adult population) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00181"},
  {"id": 732,"front": "LEK source drill — What exception, contraindication, or “false statement” trap is listed under Other / mixed?","back": "Fluid restriction only in cases of nephrogenic stones SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "traps","sourceAtomId": "LEK-00229"},
  {"id": 733,"front": "LEK source drill — What number, timing, or threshold is listed under Nephrology & urology?","back": "E. coli (33–90% of first-time UTI cases depending on gender and age) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00238"},
  {"id": 734,"front": "LEK source drill — What number, timing, or threshold is listed under Nephrology & urology?","back": "- \"2-50, 3-75\": Second UTI = 50% recurrence risk; third UTI = 75% recurrence risk Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00240"},
  {"id": 735,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "- Peripheral blood morphology must be determined within 2 days Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00251"},
  {"id": 736,"front": "LEK source drill — What number, timing, or threshold is listed under Nephrology & urology?","back": "Cystography with contrast dye (performed after urine culture and 4–6 weeks post-UTI treatment, followed by antibacterial ointment due to Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00266"},
  {"id": 737,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "7. Duration: 7–10 days (oral, intravenous, or sequential therapy) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00274"},
  {"id": 738,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Children >3 years: Fluoroquinolones may be used (age-dependent) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00279"},
  {"id": 739,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Nitrofurantoin 1–2 6 weeks+ Preferred for long-term use Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00294"},
  {"id": 740,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Sodium nitrofurantoin 50 10–14 days For specific high-risk cases Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00297"},
  {"id": 741,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "2. Glucocorticoids in a standardized regimen for 6 months Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00304"},
  {"id": 742,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "6. Or relapse within 2 weeks after treatment completion Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00326"},
  {"id": 743,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "- Most commonly affects children over 3 years of age (diagnosis in younger children is rare) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00336"},
  {"id": 744,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Second HIV-RNA, p24Ag, and viral culture tests should be performed between 6–8 weeks of age Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00372"},
  {"id": 745,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "Add nevirapine (viramune) to the newborn for first 2 weeks Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00376"},
  {"id": 746,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Method of pregnancy termination depends on maternal viral load at 36 weeks Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00378"},
  {"id": 747,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Measure blood pressure within the next 1–2 weeks (earlier if symptomatic) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00396"},
  {"id": 748,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Stage I Yes (if indicated) 1–2 weeks (earlier if symptomatic) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00400"},
  {"id": 749,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "SCT or RCT greater than 5 mmHg above the 95th percentile with associated symptoms in both the patient and their environment requires Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00405"},
  {"id": 750,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Urgent Hypertensive State SCT/RTC > 5 mmHg above 95th percentile Symptoms in patient and environment; hospitalization required Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00415"},
  {"id": 751,"front": "LEK source drill — What number, timing, or threshold is listed under Cardiology & rheumatology?","back": "1–2 years Coarctation of aorta, nephrohypertension, renovascular hypertension, nephroblastoma Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00421"},
  {"id": 752,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "- CT higher on upper limbs than lower limbs by ≥20 mmHg Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00427"},
  {"id": 753,"front": "LEK source drill — What number, timing, or threshold is listed under Genetics & congenital syndromes?","back": "7–14 years: \"Nephro (nephrotic syndrome) + Coarct (aortic coarctation) + Hormone\" Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00431"},
  {"id": 754,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "15–18 years: \"Idio (idiopathic) + Nephro + Heavy Metals\" Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00432"},
  {"id": 755,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Genetic factors: Most often damage to the central nervous system between 26–34 weeks of gestation Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00454"},
  {"id": 756,"front": "LEK source drill — What number, timing, or threshold is listed under Development & neurology?","back": "DMPC: Developmental disorders (central nervous system origin) in children under 2 years Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00455"},
  {"id": 757,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Age 6–8 months: Walking difficulties, lower limb paresis, hypotonia along the head-to-tail axis, persistent postures, microcephaly Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00465"},
  {"id": 758,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "DMPC (Dysmyelination of the posterior columns) is most commonly recognized by 9 months of age and often presents with lower limb Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00483"},
  {"id": 759,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Paroxysmal tilting to one side lasting several minutes in children up to 2 years old Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00524"},
  {"id": 760,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "Reflex anoxic <2 years Pale, falls, bradycardia, nerve compression No Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00528"},
  {"id": 761,"front": "LEK source drill — What number, timing, or threshold is listed under Development & neurology?","back": "Early infantile myoclonic 4–6 years Shaking without altered consciousness Yes (epilepsy) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00530"},
  {"id": 762,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Points Up to 23 months old From 2 years to 5 years old Over 5 years old Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00555"},
  {"id": 763,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Fever (about 50% of cases) or body temperature elevation Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00576"},
  {"id": 764,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Somnolence, restlessness (about 30% of children) to deep changes in consciousness Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00577"},
  {"id": 765,"front": "LEK source drill — What number, timing, or threshold is listed under Orthopedics?","back": "Brdlik's Sitting flat, attempt to touch knees Inability to bend forward without hip/knee flexion Normal in <5–6 years; abnormal o Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00601"},
  {"id": 766,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Empirical treatment (should not last longer than 48 hours) until information about the etiology of ZOMR is obtained Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00611"},
  {"id": 767,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Protein 50–290 mg/dl (avg 100) 45–120 mg/dl (avg 60) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00615"},
  {"id": 768,"front": "LEK source drill — What number, timing, or threshold is listed under Genetics & congenital syndromes?","back": "Presence of nerve-skin syndromes or pain sensitivity before 3 years of age (due to limited verbal communication) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00678"},
  {"id": 1149,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Medulloblastomy (24%) – najczęściej występujący nowotwór embrionalny; zwykle lokalizowany w czwartym komórce mózgowej Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00723"},
  {"id": 1150,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Papillomy pęcherzyka choroidowego (3%) – najczęściej lokalizowane w czwartym komórce mózgowej Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00726"},
  {"id": 1151,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "200 mg/kg/24 hours for premature infants and newborns Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00734"},
  {"id": 1152,"front": "LEK source drill — What number, timing, or threshold is listed under Oncology & hematology?","back": "cure if no new tumor appears after the child's age at diagnosis, increased by 9 months Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00741"},
  {"id": 1153,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Most common among nRMS diagnosed before 1 year of age Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00753"},
  {"id": 1154,"front": "LEK source drill — What number, timing, or threshold is listed under Oncology & hematology?","back": "Prevalence: Approximately 5.5% of all tumours in children and adolescents Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00769"},
  {"id": 1155,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "↑ AFP (80% cases) – diagnostic evaluation and observation Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00830"},
  {"id": 1156,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Mainly occurs in children aged 2–7 years (peaks at 3–4 years) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00851"},
  {"id": 1157,"front": "LEK source drill — What number, timing, or threshold is listed under Dermatology, allergy & immunology?","back": "c) 4 days before and 13 days after the appearance of rash Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01068"},
  {"id": 1158,"front": "LEK source drill — What number, timing, or threshold is listed under Dermatology, allergy & immunology?","back": "Correct answer: c) 4 days before and 13 days after the appearance of rash Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01070"},
  {"id": 1159,"front": "LEK source drill — What number, timing, or threshold is listed under Emergency & resuscitation?","back": "Fluid Resuscitation Crystalloids, 5% albumin Restore intravascular volume Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01126"},
  {"id": 1160,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Leczenie: Rurka oralno-nasalna/tracheostomia Leczenie: Interwencja chirurgiczna (najpóźniej w 24 godziny) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01149"},
  {"id": 1161,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Oral maintenance: 2 mmol/kg/24 hours of magnesium preparations Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01252"},
  {"id": 1162,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "1. Grade I: In situ, <10% of ventricular volume, subventricular Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01268"},
  {"id": 1163,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "2. Grade II: Intraventricular hemorrhage filling 10–50% of ventricular space Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01269"},
  {"id": 1164,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "3. Introduce low-phenylalanine diet within 3 weeks after birth Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01286"},
  {"id": 1165,"front": "LEK source drill — What number, timing, or threshold is listed under Nephrology & urology?","back": "Cleft Palate Palate defect with lip cleft 6–18 months Routine Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01376"},
  {"id": 1166,"front": "LEK source drill — What number, timing, or threshold is listed under Infectious disease & immunization?","back": "Early infections are caused by intrauterine infection. Symptoms of the disease develop within 72 hours of birth. Secondary infections result from Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01479"},
  {"id": 1167,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "≤6 months Pavlik harness Lowest risk of femoral head necrosis Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01498"},
  {"id": 1168,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "6–18 months Closed reduction + tenotomy Requires cast immobilization Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01499"},
  {"id": 1169,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": ">18 months Surgical intervention Failure of non-operative methods Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01500"},
  {"id": 1170,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Dosage: 1–6 mg/kg/24 hours (single dose or divided) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01531"},
  {"id": 1171,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "6. Brain inflammation (15% mortality; 15% permanent cranial nerve damage) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01609"},
  {"id": 1172,"front": "LEK source drill — What number, timing, or threshold is listed under Infectious disease & immunization?","back": "Vaccination of healthy/susceptible individuals within 72 hours of exposure Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01622"},
  {"id": 1173,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "Newborns with measles occurring within 5 days before or up to 2 days after birth Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01626"},
  {"id": 1174,"front": "LEK source drill — What number, timing, or threshold is listed under Infectious disease & immunization?","back": "Cause: Infection with HHV-6 (6 months–3 years of age) or HHV-7 (after 3 years; β-Herpesviridae family) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01630"},
  {"id": 1175,"front": "LEK source drill — What number, timing, or threshold is listed under Neonatology?","back": "Compromised immune system, Newborns with perinatal measles, Pregnant women, Premature infants (<28 weeks or ≤1000 g), Mothers not Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01636"},
  {"id": 1176,"front": "LEK source drill — What number, timing, or threshold is listed under Nephrology & urology?","back": "In the absence of adrenal gland involvement, prognosis is better but still associated with high mortality (50%) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01670"},
  {"id": 1177,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Kindergarten/preschool contact within 7 days before illness onset Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01692"},
  {"id": 1178,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Passengers living closest to the patient during at least 8 hours of flight Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01693"},
  {"id": 1179,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Adults: 600 mg mc. p.o. every 12 hours for 2 days Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01700"},
  {"id": 1180,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Clindamycin: 20–40 mg/kg mc/24 hours every 8 hours Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01751"},
  {"id": 1181,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "2–6 days before the appearance of salivary gland swelling Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01768"},
  {"id": 1182,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Contagious Period 2–6 days before symptoms + 9 days after onset Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01777"},
  {"id": 1183,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "- Benzylpenicillin: 50,000–150,000 j.m./kg mc./24 hours (4 doses) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01794"},
  {"id": 1184,"front": "LEK source drill — What number, timing, or threshold is listed under Oncology & hematology?","back": "Mixed Cell Lineage Lymphoma (MCL): 15% of cases. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00698"},
  {"id": 1185,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Age: Rarely occurs in children under 4 years old. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00700"},
  {"id": 1186,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Risk of incarceration: 10% in infants, 20% in adults. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00896"},
  {"id": 1187,"front": "LEK source drill — What number, timing, or threshold is listed under Dermatology, allergy & immunology?","back": "30–50% risk of atopic disease if one parent has it. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00936"},
  {"id": 1188,"front": "LEK source drill — What number, timing, or threshold is listed under Dermatology, allergy & immunology?","back": "50–80% risk if both parents have atopic disease. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00937"},
  {"id": 1189,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Palate surgery: Performed around 18 months of age. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01372"},
  {"id": 1190,"front": "LEK source drill — What key finding, timing, or association is listed for Infectious disease & immunization?","back": "Urine culture (to rule out urinary tract infection) SOURCE-DERIVED — verify before clinical use.","status": "source-derived","category": "signs_scores","sourceAtomId": "LEK-01408"},
  {"id": 1191,"front": "LEK source drill — What number, timing, or threshold is listed under Infectious disease & immunization?","back": "Exclusion: Infants <6 months if mother had measles. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01573"},
  {"id": 1192,"front": "LEK source drill — What number, timing, or threshold is listed under Dermatology, allergy & immunology?","back": "Infectious period: 2 days before rash to crusts form. Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01600"},
  {"id": 1193,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Recovery Period (1–2 weeks; can last up to 10 weeks) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00011"},
  {"id": 1194,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "No response to antibacterial treatment within 48 hours Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00254"},
  {"id": 1195,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "In youth: CT > 120/80 mmHg (even if below 90 centiles) Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00393"},
  {"id": 1196,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Stage II: \">5 mmHg above 95\" → \"Five Over Nine-Five\" Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00398"},
  {"id": 1197,"front": "LEK source drill — What number, timing, or threshold is listed under Development & neurology?","back": "Common Seizure Type 34–60% West syndrome (50–90%) N/A Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00469"},
  {"id": 1198,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Mixed Cell Lineage 15% Combination of cell types Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00705"},
  {"id": 1199,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "4. Children > 18 Months or Failed Closed Reduction Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01492"},
  {"id": 1200,"front": "LEK source drill — What number, timing, or threshold is listed under Dermatology, allergy & immunology?","back": "Rash onset 24 hours after fever 14 days after exposure Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-01791"},
  {"id": 1201,"front": "LEK source drill — What number, timing, or threshold is listed under Other / mixed?","back": "Treatment: 1. Neurosurgical (primary method in most cases) 2. Radiotherapy (contraindicated in children <3 years old) 3. Chemotherapy (primary Legacy source number — verify against current local/national guidance before clinical use.","status": "source-derived","category": "numbers","sourceAtomId": "LEK-00740"},
  {"id": 1202,"front": "What is the current pediatric first-line route and standard weight-based dose for adrenaline in anaphylaxis?","back": "Verified drill: give IM adrenaline promptly. A common weight-based rule is 0.01 mg/kg of 1 mg/mL (1:1000) adrenaline IM, up to 0.5 mg; use the local emergency protocol/device table rather than calculating small volumes under stress. RCH 2025 source.","status": "caveat/updated","category": "pharma"},
  {"id": 1203,"front": "Which anaphylaxis number marks “refractory” disease in the RCH pediatric guideline?","back": "Verified drill: persistent respiratory or cardiovascular symptoms despite 2 appropriate IM adrenaline doses = refractory anaphylaxis. Escalate according to local critical-care protocol. RCH 2025 source.","status": "caveat/updated","category": "numbers"},
  {"id": 1204,"front": "What minimum observation number should you remember after pediatric anaphylaxis?","back": "Verified drill: observe children in a setting able to manage deterioration for at least 4 hours after the last adrenaline dose, or after symptom onset if no adrenaline was given. Individual disposition depends on severity and local guidance. RCH 2025 source.","status": "caveat/updated","category": "numbers"},
  {"id": 1205,"front": "For moderate croup, what steroid numbers are listed in the RCH pediatric guideline?","back": "Verified drill: moderate croup: dexamethasone 0.15 mg/kg orally OR prednisolone 1 mg/kg orally. Apply severity assessment and local protocol. RCH source.","status": "caveat/updated","category": "pharma"},
  {"id": 1206,"front": "For severe or life-threatening croup, what dexamethasone number should be drilled?","back": "Verified drill: severe/life-threatening croup: dexamethasone 0.6 mg/kg (maximum 12 mg) by PO/IM/IV as clinically appropriate in the RCH guideline. Airway management takes priority; follow local protocol.","status": "caveat/updated","category": "pharma"},
  {"id": 1207,"front": "What is the first-line IVIg number for acute Kawasaki disease?","back": "Verified drill: IVIg 2 g/kg as a single infusion, typically over 8–12 hours in the RCH guideline. Senior clinician and local protocol guide timing and co-treatment decisions.","status": "caveat/updated","category": "pharma"},
  {"id": 1208,"front": "What neonatal HSV acyclovir number is used in current pediatric references?","back": "Verified drill: neonatal HSV treatment commonly uses IV acyclovir 20 mg/kg/dose every 8 hours (60 mg/kg/day) in term infants; prematurity/renal function can require adjustment. Use neonatal infectious-disease guidance. AAP/Canadian Paediatric Society source.","status": "caveat/updated","category": "pharma"},
  {"id": 1209,"front": "For suspected invasive meningococcal disease, which empiric antibiotic class should be recalled?","back": "Verified drill: current CDC guidance recommends an extended-spectrum cephalosporin such as cefotaxime or ceftriaxone for empiric treatment. Penicillin or ampicillin requires confirmed susceptibility.","status": "caveat/updated","category": "pharma"},
  {"id": 1210,"front": "What duration pattern should you recall for meningococcal carriage eradication when ceftriaxone/cefotaxime was not used?","back": "Verified drill: CDC lists rifampin as 4 doses over 2 days, or a single dose of ciprofloxacin or ceftriaxone, to eradicate carriage before discharge when indicated. Pediatric agent selection depends on age and public-health protocol.","status": "caveat/updated","category": "pharma"},
  {"id": 1211,"front": "What vitamin K prophylaxis number is commonly tested for a newborn >1500 g?","back": "Verified drill: 1 mg vitamin K IM within 6 hours of birth is recommended for newborns weighing >1500 g in AAP guidance. Preterm/low-birth-weight dosing follows the local newborn protocol.","status": "caveat/updated","category": "pharma"}
];
